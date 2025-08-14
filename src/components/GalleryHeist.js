import React, { useEffect, useRef, useState } from 'react';
import '../styles/game.css';
import { getItems as getPortfolioItems } from './Portfolio';

const GAME_WIDTH = 1100;
const GAME_HEIGHT = 700;
const PLAYER_SPEED = 200; // px/sec
const PLAYER_SIZE = 48; // px
const PLAYER_RADIUS = PLAYER_SIZE / 2;
const GUARD_SPEED = 90; // px/sec (slower movement)
const GUARD_VIEW_RADIUS = 65; // px (larger detection radius)
const SHARD_SIZE = Math.round(PLAYER_SIZE * 0.83); // slightly smaller than player, larger than original
const SHARD_COUNT = 12;
const TILE_COLS = 4;
const TILE_ROWS = 3;
const PLAY_AREA_RIGHT = GAME_WIDTH; // full play area; mosaic rendered outside the play canvas

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function length(x, y) {
  return Math.sqrt(x * x + y * y);
}

function normalized(x, y) {
  const len = length(x, y) || 1;
  return [x / len, y / len];
}

function createPatrolGuard(x, y, waypoints) {
  return {
    position: { x, y },
    waypointIndex: 0,
    waypoints,
  };
}

function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

function clampPoint(p) {
  return {
    x: clamp(p.x, 16, PLAY_AREA_RIGHT - 16),
    y: clamp(p.y, 16, GAME_HEIGHT - 16),
  };
}

function pickRandomTarget() {
  return clampPoint({ x: randRange(40, PLAY_AREA_RIGHT - 40), y: randRange(40, GAME_HEIGHT - 40) });
}

function createHybridGuard(x, y) {
  // mode: 'wander' or 'chase', re-decided every second
  const initialMode = Math.random() < 0.5 ? 'wander' : 'chase';
  return {
    position: { x, y },
    target: pickRandomTarget(),
    retargetIn: randRange(1.0, 2.0),
    decisionIn: 1.0,
    mode: initialMode,
  };
}

function generateRandomGuards(count) {
  const guards = [];
  for (let i = 0; i < count; i++) {
    const start = pickRandomTarget();
    const g = createHybridGuard(start.x, start.y);
    g.spriteIndex = i % 2;
    guards.push(g);
  }
  return guards;
}

function generateShards(exclusions) {
  const result = [];
  let attempts = 0;
  while (result.length < SHARD_COUNT && attempts < 2000) {
    attempts += 1;
    const x = 40 + Math.random() * (GAME_WIDTH - 80);
    const y = 40 + Math.random() * (GAME_HEIGHT - 80);
    const tooCloseToExcluded = exclusions.some((p) => length(p.x - x, p.y - y) < 80);
    const tooCloseToOthers = result.some((p) => length(p.x - x, p.y - y) < 60);
    if (!tooCloseToExcluded && !tooCloseToOthers) {
      result.push({ x, y, collected: false });
    }
  }
  // assign a unique tile index to each shard so each collected shard reveals a distinct tile
  const indices = Array.from({ length: SHARD_COUNT }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  for (let i = 0; i < result.length; i++) {
    result[i].tileIndex = indices[i % indices.length];
  }
  return result;
}

const GalleryHeist = ({ currentLang }) => {
  const canvasRef = useRef(null);
  const lastTimeRef = useRef(0);
  const requestIdRef = useRef(0);
  const resetTimerRef = useRef(null);
  const endModeRef = useRef(null);
  const endDeadlineRef = useRef(0);

  const [isRunning, setIsRunning] = useState(true);
  const [isWin, setIsWin] = useState(false);
  const [shards, setShards] = useState([]);
  const [player, setPlayer] = useState({ x: 80, y: 80 });
  const [guards, setGuards] = useState([]);
  const playerRef = useRef({ x: 80, y: 80 });
  const guardsRef = useRef([]);
  const shardsRef = useRef([]);
  const keysRef = useRef({});
  const isRunningRef = useRef(true);
  const isWinRef = useRef(false);
  const projectImageRef = useRef(null);
  const currentProjectRef = useRef(null);
  const mosaicCanvasRef = useRef(null);
  const playerImageRef = useRef(null);
  const guardImagesRef = useRef([]);
  const shardImageRef = useRef(null);
  const mapImageRef = useRef(null);
  const defaultProjectSrc = `${process.env.PUBLIC_URL || ''}/rendering.png`;

  function loadImageWithFallback(src, fallback) {
    const img = new Image();
    let swapped = false;
    img.crossOrigin = 'anonymous';
    img.onerror = () => {
      if (!swapped && fallback) {
        swapped = true;
        img.src = fallback;
      }
    };
    img.src = src || fallback;
    return img;
  }

  useEffect(() => {
    // pick a random portfolio item each round, prefer local thumbnail if provided; fallback to rendering.png
    const items = getPortfolioItems(currentLang);
    const candidates = items.filter((i) => i.thumbnail);
    const pick = candidates[Math.floor(Math.random() * (candidates.length || 1))];
    currentProjectRef.current = pick || null;
    const src = (pick?.thumbnail && pick.thumbnail.startsWith('http'))
      ? pick.thumbnail
      : (pick?.thumbnail || defaultProjectSrc);
    projectImageRef.current = loadImageWithFallback(src, defaultProjectSrc);
  }, [currentLang]);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL || ''}/gammer.png`;
    playerImageRef.current = img;
  }, []);

  useEffect(() => {
    const g1 = new Image();
    g1.src = `${process.env.PUBLIC_URL || ''}/professor1.png`;
    const g2 = new Image();
    g2.src = `${process.env.PUBLIC_URL || ''}/professor2.png`;
    guardImagesRef.current = [g1, g2];
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL || ''}/puzzle.png`;
    shardImageRef.current = img;
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL || ''}/map.png`;
    mapImageRef.current = img;
  }, []);

  useEffect(() => {
    const initialGuards = generateRandomGuards(2);
    const exclusions = [{ x: 80, y: 80 }, ...initialGuards.map((g) => g.position)];
    setGuards(initialGuards);
    guardsRef.current = initialGuards;
    const gen = generateShards(exclusions);
    setShards(gen);
    shardsRef.current = gen;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysRef.current[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    lastTimeRef.current = performance.now();
    requestIdRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(requestIdRef.current);
  }, []);

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    isWinRef.current = isWin;
  }, [isWin]);

  function tick(time) {
    const dt = Math.min(0.032, (time - lastTimeRef.current) / 1000);
    lastTimeRef.current = time;
    if (isRunningRef.current && !isWinRef.current) {
      step(dt);
    }
    draw();
    requestIdRef.current = requestAnimationFrame(tick);
  }

  function step(dt) {
    const keys = keysRef.current;
    let moveX = 0;
    let moveY = 0;
    if (keys['arrowleft'] || keys['a']) moveX -= 1;
    if (keys['arrowright'] || keys['d']) moveX += 1;
    if (keys['arrowup'] || keys['w']) moveY -= 1;
    if (keys['arrowdown'] || keys['s']) moveY += 1;
    const [nx, ny] = normalized(moveX, moveY);
    const prevP = playerRef.current;
    const newX = clamp(prevP.x + nx * PLAYER_SPEED * dt, PLAYER_RADIUS, GAME_WIDTH - PLAYER_RADIUS);
    const newY = clamp(prevP.y + ny * PLAYER_SPEED * dt, PLAYER_RADIUS, GAME_HEIGHT - PLAYER_RADIUS);
    const nextPlayer = { x: newX, y: newY };
    setPlayer(nextPlayer);
    playerRef.current = nextPlayer;

    const currentGuards = guardsRef.current;
    const playerPos = playerRef.current;
    const nextGuards = currentGuards.map((g) => {
      // decide behaviour every second
      let decisionIn = (g.decisionIn || 0) - dt;
      let mode = g.mode;
      let target = g.target;
      if (decisionIn <= 0) {
        mode = Math.random() < 0.3 ? 'chase' : 'wander';
        decisionIn = 1.0; // next second re-evaluate
        if (mode === 'wander') target = pickRandomTarget();
      }

      // within current second: move according to mode
      if (mode === 'chase') {
        target = { x: playerPos.x, y: playerPos.y };
      } else {
        // wander target may need refresh if arrived
        const distToTarget = length(target.x - g.position.x, target.y - g.position.y);
        if (distToTarget < 8) {
          target = pickRandomTarget();
        }
      }

      const toTarget = { x: target.x - g.position.x, y: target.y - g.position.y };
      const [dx, dy] = normalized(toTarget.x, toTarget.y);
      const nextPos = { x: g.position.x + dx * GUARD_SPEED * dt, y: g.position.y + dy * GUARD_SPEED * dt };

      return { ...g, position: nextPos, target, decisionIn, mode };
    });
    setGuards(nextGuards);
    guardsRef.current = nextGuards;

    {
      const currentShards = shardsRef.current;
      let collectedCount = 0;
      const updated = currentShards.map((s) => {
        if (s.collected) {
          collectedCount += 1;
          return s;
        }
        const dist = length(s.x - newX, s.y - newY);
        if (dist < PLAYER_RADIUS + 12) {
          collectedCount += 1;
          return { ...s, collected: true };
        }
        return s;
      });
      if (collectedCount === SHARD_COUNT) {
        setIsWin(true);
        isWinRef.current = true;
        isRunningRef.current = false;
        setIsRunning(false);
        endModeRef.current = 'win';
        endDeadlineRef.current = performance.now() + 30000;
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => {
          resetGame();
        }, 30000);
      }
      setShards(updated);
      shardsRef.current = updated;
    }

    for (const g of guardsRef.current) {
      const dist = length(g.position.x - newX, g.position.y - newY);
      if (dist < GUARD_VIEW_RADIUS) {
        setIsRunning(false);
        isRunningRef.current = false;
        endModeRef.current = 'lose';
        endDeadlineRef.current = performance.now() + 30000;
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => {
          resetGame();
        }, 30000);
        break;
      }
    }
  }

  function resetGame() {
    const start = { x: 80, y: 80 };
    setPlayer(start);
    playerRef.current = start;
    // Regenerate guards to keep patrol random each round
    const newGuards = generateRandomGuards(2);
    setGuards(newGuards);
    guardsRef.current = newGuards;
    const exclusions = [start, ...newGuards.map((g) => g.position)];
    const gen = generateShards(exclusions);
    setShards(gen);
    shardsRef.current = gen;
    setIsWin(false);
    setIsRunning(true);
    // choose a new project image on restart
    const items = getPortfolioItems(currentLang);
    const candidates = items.filter((i) => i.thumbnail);
    const pick = candidates[Math.floor(Math.random() * (candidates.length || 1))];
    currentProjectRef.current = pick || null;
    const src = (pick?.thumbnail && pick.thumbnail.startsWith('http'))
      ? pick.thumbnail
      : (pick?.thumbnail || defaultProjectSrc);
    projectImageRef.current = loadImageWithFallback(src, defaultProjectSrc);

    // clear end state & timers
    endModeRef.current = null;
    endDeadlineRef.current = 0;
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mapImg = mapImageRef.current;
    if (mapImg && mapImg.complete && mapImg.naturalWidth > 0) {
      ctx.save();
      ctx.globalAlpha = 0.35; // transparent effect
      ctx.imageSmoothingEnabled = false; // keep pixel look
      // Cover + slight overscale to guarantee full coverage without white seams.
      const iw = mapImg.naturalWidth || mapImg.width;
      const ih = mapImg.naturalHeight || mapImg.height;
      const coverScale = Math.max(canvas.width / iw, canvas.height / ih) * 1.03; // overscale 3%
      const dw = Math.ceil(iw * coverScale);
      const dh = Math.ceil(ih * coverScale);
      ctx.drawImage(mapImg, 0, 0, dw, dh); // align top-left; extra area clipped by canvas
      ctx.restore();
    }

    // grid removed per request

    const shardsToDraw = shardsRef.current;
    const shardImg = shardImageRef.current;
    shardsToDraw.forEach((s) => {
      if (shardImg && shardImg.complete && shardImg.naturalWidth > 0) {
        ctx.save();
        if (s.collected) ctx.globalAlpha = 0.4;
        ctx.drawImage(shardImg, s.x - SHARD_SIZE / 2, s.y - SHARD_SIZE / 2, SHARD_SIZE, SHARD_SIZE);
        ctx.restore();
      } else {
        ctx.beginPath();
        ctx.arc(s.x, s.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = s.collected ? 'rgba(151,163,141,0.35)' : 'rgba(151,163,141,0.9)';
        ctx.fill();
      }
    });

    const guardsToDraw = guardsRef.current;
    guardsToDraw.forEach((g) => {
      // view circle
      ctx.beginPath();
      ctx.arc(g.position.x, g.position.y, GUARD_VIEW_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200,80,80,0.10)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(200,80,80,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // sprite
      const imgs = guardImagesRef.current;
      const sprite = imgs[g.spriteIndex || 0];
      if (sprite && sprite.complete && sprite.naturalWidth > 0) {
        ctx.drawImage(sprite, g.position.x - 22, g.position.y - 22, 44, 44);
      } else {
        ctx.beginPath();
        ctx.arc(g.position.x, g.position.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200,80,80,0.9)';
        ctx.fill();
      }
    });

    const p = playerRef.current;
    const sprite = playerImageRef.current;
    if (sprite && sprite.complete && sprite.naturalWidth > 0) {
      ctx.drawImage(sprite, p.x - PLAYER_SIZE / 2, p.y - PLAYER_SIZE / 2, PLAYER_SIZE, PLAYER_SIZE);
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, PLAYER_SIZE / 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(80,120,220,0.95)';
      ctx.fill();
    }

    drawMosaicExternal();

    if (!isRunningRef.current && endModeRef.current === 'lose') {
      drawOverlay(ctx, currentLang === 'zh' ? '你被教授發現了！' : 'You were caught!');
    }
    if (isWinRef.current || endModeRef.current === 'win') {
      const p = currentProjectRef.current;
      const label = p ? (p.title || '') : '';
      drawOverlay(ctx, (currentLang === 'zh' ? '畢業成功！完成：' : 'Graduation! Completed: ') + label);
    }
  }

  function drawMosaicExternal() {
    const canvas = mosaicCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = projectImageRef.current;
    const panelW = canvas.width;
    const panelH = canvas.height;

    ctx.clearRect(0, 0, panelW, panelH);
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, 0, panelW, panelH);
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    ctx.strokeRect(0, 0, panelW, panelH);

    const tileW = panelW / TILE_COLS;
    const tileH = panelH / TILE_ROWS;
    const collected = shardsRef.current.filter((s) => s.collected);
    const revealed = new Set(collected.map((s) => s.tileIndex).filter((n) => Number.isFinite(n)));

    for (let r = 0; r < TILE_ROWS; r++) {
      for (let c = 0; c < TILE_COLS; c++) {
        const index = r * TILE_COLS + c;
        const dx = c * tileW;
        const dy = r * tileH;
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(dx, dy, tileW - 1, tileH - 1);
        if (img && img.complete && img.naturalWidth > 0 && revealed.has(index)) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(dx, dy, tileW - 1, tileH - 1);
          ctx.clip();
          ctx.drawImage(
            img,
            (img.width / TILE_COLS) * c,
            (img.height / TILE_ROWS) * r,
            img.width / TILE_COLS,
            img.height / TILE_ROWS,
            dx,
            dy,
            tileW,
            tileH
          );
          ctx.restore();
        }
      }
    }
  }

  function drawOverlay(ctx, text) {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = '20px system-ui, -apple-system, Segoe UI, Roboto';
    ctx.textAlign = 'center';
    const centerY = ctx.canvas.height / 2;
    ctx.fillText(text, ctx.canvas.width / 2, centerY);
    if (endDeadlineRef.current > 0) {
      const remainMs = Math.max(0, endDeadlineRef.current - performance.now());
      const sec = Math.ceil(remainMs / 1000);
      const sub = (currentLang === 'zh' ? '將於 ' : 'Auto restart in ') + sec + (currentLang === 'zh' ? ' 秒後重新開始' : 's');
      ctx.font = '16px system-ui, -apple-system, Segoe UI, Roboto';
      ctx.fillText(sub, ctx.canvas.width / 2, centerY + 28);
    }
    ctx.restore();
  }

  function pickRandomLinkFromItem(item) {
    if (!item || !item.links) return null;
    const list = [item.links.demo, item.links.github, item.links.video, item.links.paper].filter(Boolean);
    if (list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  }

  function getRelatedLink() {
    // prefer current project's links
    const current = currentProjectRef.current;
    let url = pickRandomLinkFromItem(current);
    if (url) return url;
    // fallback: pick any item that has links
    const items = getPortfolioItems(currentLang);
    const candidates = items.filter((i) => !!pickRandomLinkFromItem(i));
    if (candidates.length > 0) {
      const item = candidates[Math.floor(Math.random() * candidates.length)];
      url = pickRandomLinkFromItem(item);
    }
    // last resort fallback (stable link)
    return url || 'https://github.com/stanfc/stanleychen-profile';
  }

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">🎓</div>
        <span>{currentLang === 'zh' ? '畢業大逃殺' : 'Graduation Battle Royale'}</span>
      </h2>
      <div className="heist-wrap">
        <div className="heist-top">
          <div className="heist-mosaic">
            <div className="heist-row heist-row-title">
              <strong>{currentLang === 'zh' ? '拼圖進度' : 'Mosaic'}</strong>
            </div>
            <canvas ref={mosaicCanvasRef} width={300} height={220} />
          </div>
          <div className="heist-rules">
            <div className="heist-row"><strong>{currentLang === 'zh' ? '規則' : 'Rules'}</strong></div>
            <div className="heist-row">{currentLang === 'zh' ? '使用 WASD 移動，避免靠近紅色警戒範圍。' : 'Move with WASD; avoid red guard zones.'}</div>
            <div className="heist-row" style={{ marginTop: '0.5rem' }}><strong>{currentLang === 'zh' ? '目標' : 'Goal'}</strong></div>
            <div className="heist-row">{currentLang === 'zh' ? '收集碎片，完成左側作品拼圖。' : 'Collect shards to complete the left-side project mosaic.'}</div>
            <div className="heist-actions">
              <button className="link-button" onClick={resetGame}>{currentLang === 'zh' ? '重新開始' : 'Restart'}</button>
              <a className="link-button" href={getRelatedLink()} target="_blank" rel="noreferrer">{currentLang === 'zh' ? '相關作品' : 'Related Project'}</a>
            </div>
          </div>
        </div>
        <div className="heist-canvas-wrap">
          <canvas ref={canvasRef} width={GAME_WIDTH} height={GAME_HEIGHT} />
        </div>
      </div>
    </div>
  );
};

export default GalleryHeist;



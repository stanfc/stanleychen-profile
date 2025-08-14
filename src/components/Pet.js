import React, { useEffect, useRef, useState } from 'react';
import catGif from '../assets/cat-roll.gif';

const Pet = ({ currentLang }) => {
  const petRef = useRef(null);
  const containerRef = useRef(null);
  const [isFollowingCursor, setIsFollowingCursor] = useState(false);
  const [isAtHome, setIsAtHome] = useState(false);
  
  // 保存貓咪當前位置
  const petPositionRef = useRef({ x: 0, y: 0 });

  // 翻譯內容
  const content = {
    zh: {
      summonCat: "讓貓咪自己玩耍",
      freeCat: "與貓咪玩耍"
    },
    en: {
      summonCat: "let kitty play by herself",
      freeCat: "play with kitty"
    }
  };

  // 點擊家的事件處理函數
  const handleHouseClick = () => {
    if (isFollowingCursor) {
      // 切換到回家模式
      setIsFollowingCursor(false);
      setIsAtHome(false);
    } else {
      // 切換回追蹤游標模式
      setIsFollowingCursor(true);
      setIsAtHome(false);
    }
  };

  useEffect(() => {
    const pet = petRef.current;
    const container = containerRef.current;
    
    if (!pet || !container) return;

    // 寵物速度配置 // s123
    const SPEED = 1.5; // 等速移動的速度 (像素/幀)
    const STOP_DISTANCE = 5; // 停止追蹤的距離

    let bounds = container.getBoundingClientRect();
    const refreshBounds = () => bounds = container.getBoundingClientRect();

    // 毛線球位置（右下角）
    const homeX = bounds.width / 2 - 100; // 距離右邊緣 50px
    const homeY = bounds.height / 2 - 80; // 距離下邊緣 50px

    // 寵物位置（初始位置設為毛線球位置）
    let petX = petPositionRef.current.x || homeX;
    let petY = petPositionRef.current.y || homeY;
    let targetX = petX;
    let targetY = petY;
    let isMoving = false;

    // 等速移動動畫函數
    const animate = () => {
      if (isMoving) {
        // 計算距離
        const dx = targetX - petX;
        const dy = targetY - petY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > STOP_DISTANCE) {
          // 等速移動
          const angle = Math.atan2(dy, dx);
          petX += Math.cos(angle) * SPEED;
          petY += Math.sin(angle) * SPEED;
          
          // 更新保存的位置
          petPositionRef.current.x = petX;
          petPositionRef.current.y = petY;
          
          pet.style.transform = `translate(${petX}px, ${petY}px)`;
          requestAnimationFrame(animate);
        } else {
          isMoving = false;
          if (!isFollowingCursor) {
            setIsAtHome(true);
          }
        }
      }
    };

    // 滑鼠移動事件
    const onMouseMove = (e) => {
      if (!isFollowingCursor) return;
      
      const { width, height, left, top } = bounds;
      const hw = width / 2;
      const hh = height / 2;
      
      // 計算目標位置（限制在容器範圍內）
      const x = Math.max(-hw, Math.min(e.clientX - left - hw, hw));
      const y = Math.max(-hh, Math.min(e.clientY - top - hh, hh));
      
      targetX = x;
      targetY = y;
      
      if (!isMoving) {
        isMoving = true;
        animate();
      }
    };

    // 當切換到回家模式時，立即開始移動到家
    if (!isFollowingCursor && !isAtHome) {
      targetX = homeX;
      targetY = homeY;
      isMoving = true;
      animate();
    }
    
    // 初始化時設置當前位置
    if (petPositionRef.current.x === 0 && petPositionRef.current.y === 0) {
      petPositionRef.current.x = homeX;
      petPositionRef.current.y = homeY;
      pet.style.transform = `translate(${homeX}px, ${homeY}px)`;
    }

    // 視窗大小改變時重新計算邊界
    const onResize = () => {
      refreshBounds();
    };

    // 添加事件監聽器
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    container.addEventListener('scroll', refreshBounds);

    // 清理函數
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container) {
        container.removeEventListener('scroll', refreshBounds);
      }
    };
  }, [isFollowingCursor, isAtHome]);

  return (
    <div className="pet-container" ref={containerRef}>
      {/* 毛線球 */}
      <div className="yarn-ball" onClick={handleHouseClick} style={{ cursor: 'pointer' }}>
        <div className="yarn-icon">🧶</div>
        <div className="yarn-status">
          {isFollowingCursor ? content[currentLang].summonCat : content[currentLang].freeCat}
        </div>
      </div>
      
      {/* 貓咪 */}
      <div 
        className={`pet ${isAtHome ? 'at-home' : ''}`} 
        ref={petRef}
      >
        <img src={catGif} alt="Cat Pet" className="pet-image" />
      </div>
    </div>
  );
};

export default Pet; 
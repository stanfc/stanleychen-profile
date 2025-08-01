import React, { useEffect, useRef } from 'react';
import catGif from '../assets/cat-roll.gif';

const Pet = () => {
  const petRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const pet = petRef.current;
    const container = containerRef.current;
    
    if (!pet || !container) return;

    // 寵物速度配置
    const SPEED = 1; // 等速移動的速度 (像素/幀)
    const STOP_DISTANCE = 5; // 停止追蹤的距離

    let bounds = container.getBoundingClientRect();
    const refreshBounds = () => bounds = container.getBoundingClientRect();

    // 寵物初始位置
    let petX = 0;
    let petY = 0;
    let targetX = 0;
    let targetY = 0;
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
          
          pet.style.transform = `translate(${petX}px, ${petY}px)`;
          requestAnimationFrame(animate);
        } else {
          isMoving = false;
        }
      }
    };

    // 滑鼠移動事件
    const onMouseMove = (e) => {
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
  }, []);

  return (
    <div className="pet-container" ref={containerRef}>
      <div className="pet" ref={petRef}>
        <img src={catGif} alt="Cat Pet" className="pet-image" />
      </div>
    </div>
  );
};

export default Pet; 
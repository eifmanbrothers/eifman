import { useState, useEffect } from 'react'

const usePosMouseX = (container) => {

  const [mousePosX, setMousePosX] = useState();

  useEffect(() => {
    const handleMouseMove = (container) => {
      setMousePosX(container.clientX);
    };
    window.addEventListener('mousemove', handleMouseMove);
    handleMouseMove()
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosX;
}

export default usePosMouseX
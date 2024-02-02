import React, { useState, useRef, useEffect } from 'react';
import '../css-files/Spaceship.css';
import SpaceshipImage from '../other-files/spaceship_1_rotated.png';

const Spaceship = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, angle: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  // const navbarRef = useRef(0.1 * window.innerWidth);
  const navbarRef = useRef(200);

  useEffect(() => {
    const speedFactor = 0.02; // Adjust the speed (0.02 is an example)

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;

        setMousePosition((prev) => {
          const deltaX = prev.x - prev.mouseX;
          const deltaY = prev.y - prev.mouseY;

          const angleRad = Math.atan2(deltaY, deltaX);
          const angleDeg = (angleRad * 180) / Math.PI;

          return {
            x: prev.x - deltaX * speedFactor * deltaTime,
            y: prev.y - deltaY * speedFactor * deltaTime,
            angle: angleDeg - 45, // Add 90 degrees to adjust the rotation
            mouseX: prev.mouseX,
            mouseY: prev.mouseY,
          };
        });
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      cancelAnimationFrame(requestRef.current);
      setMousePosition((prev) => ({ ...prev, mouseX: e.clientX - navbarRef.current, mouseY: e.clientY }));
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      // navbarRef.current = 0.1 * window.innerWidth;
      navbarRef.current = 200;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="spaceship" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: `rotate(${mousePosition.angle}deg)` }}>
      <img src={SpaceshipImage} alt="Spaceship" />
    </div>
  );
};

export default Spaceship;







import React, { useEffect, useRef } from 'react';
import '../css-files/Laser.css'; // Create a CSS file for styling

const Laser = ({ startCoordinates, endCoordinates }) => {
  const dotRef = useRef(null);

  useEffect(() => {
    const transitionDuration = 500; // Adjust the duration of the transition
    const startTime = performance.now();

    const animateDot = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / transitionDuration); // Ensure progress doesn't exceed 1

      const newX = startCoordinates.x + progress * (endCoordinates.x - startCoordinates.x);
      const newY = startCoordinates.y + progress * (endCoordinates.y - startCoordinates.y);

      dotRef.current.style.left = `${newX}px`;
      dotRef.current.style.top = `${newY}px`;

      if (progress < 1) {
        requestAnimationFrame(animateDot);
      }
    };

    const animationId = requestAnimationFrame(animateDot);

    return () => cancelAnimationFrame(animationId);
  }, [startCoordinates, endCoordinates]);

  return (
    <div className="laser_parent">
      <div
        className="laser-dot"
        ref={dotRef}
        style={{
          left: startCoordinates.x,
          top: startCoordinates.y,
        }}
      />
    </div>
  );
};

export default Laser;



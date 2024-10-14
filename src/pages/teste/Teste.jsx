import React, { useRef, useState } from 'react'
import './teste.css'

function Teste() {
    const [position, setPosition] = useState({ top: 100, left: 100 }); // Initial position
    const [target, setTarget] = useState(null); // Target position (for animation)
    const [moving, setMoving] = useState(false); // Track if the div is moving
    const containerRef = useRef(null);
  
    // Function to handle the click event
    const handleClick = (e) => {
      if (moving) return; // Prevent further clicks while moving
  
      const containerRect = containerRef.current.getBoundingClientRect();
      const newTarget = { top: e.clientY - containerRect.top, left: e.clientX - containerRect.left };
      setTarget(newTarget);
      setMoving(true);
  
      // Animate the div to the new position
      setTimeout(() => {
        setPosition(newTarget);
        setMoving(false);
      }, 100); // Duration of the animation in milliseconds
    };
  
    return (
     <div className='ever'>
 <div className="container" ref={containerRef} onClick={handleClick}>
        <div
          className="movable-div"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transition: moving ? 'none' : 'top 1s linear, left 1s linear'
          }}
        >
          Move me!
        </div>
      </div>
     </div>
    );
  }
export default Teste
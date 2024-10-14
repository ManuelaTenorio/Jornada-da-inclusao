import React from 'react';
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import './letters.css'

function Letters({ id, value }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });

  const staticStyles = {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    willChange: 'transform',
  };

  const dynamicStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
  };


  return (
    <div className='letters'>
      <div
        className="letter"
        ref={setNodeRef}
        style={{ ...staticStyles, ...dynamicStyles }}
        {...attributes}
        {...listeners}
      >
        {String.fromCharCode(64 + value)}
      </div>
    </div>
  );
}

export default Letters;

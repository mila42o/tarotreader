import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './App1.css';

const DropZone = ({ id }) => {

  const [droppedImage, setDroppedImage] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => setDroppedImage(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`drop-zone ${isOver ? 'over' : ''}`}>
      <h2>{id}</h2>
      {droppedImage ? (
        <img src={droppedImage} alt="Dropped" className="dropped-image" />
      ) : (
        <p>Choose a card</p>
      )}
    </div>
  );
};

export default DropZone;


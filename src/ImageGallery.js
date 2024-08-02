import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import ImageData from './ImageData';
import './App1.css';

const ImageGallery = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="image-gallery">
          {ImageData[id].map((image, index) => (
            <DraggableImage key={index} src={image} id={index} />
          ))}
        </div>
      )}
    </div>
  );
};

const DraggableImage = ({ src, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id, src },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={src}
      alt={`Draggable ${id}`}
      className={`draggable-image ${isDragging ? 'dragging' : ''}`}
    />
  );
};

export default ImageGallery;
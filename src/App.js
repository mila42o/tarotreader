import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropZone from "./DropZone.js";
import ImageGallery from './ImageGallery.js';
import './App.css';

const App = () => {
  const [content, setContent] = useState('initial');

  const handleOptionClick = (option) => {
    setContent(option);
  };

  const handleGoBack = () => {
    setContent('initial');
  };
  const galleryData = [
    { id: '1', title: 'Major Arcana' },
    { id: '2', title: 'Cups' },
    { id: '3', title: 'Pentacles' },
    { id: '4', title: 'Wands' },
    { id: '5', title: 'Swords' },
  ];


  const renderCards = (numCards) => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(
        <div className="card" key={i}>
          <DropZone />
        </div>
      );
    }
    return cards;
  };

  const renderContent = () => {
    switch (content) {
      case 'option1':
        return (
          <DndProvider backend={HTML5Backend}>
            <div className="cards">{renderCards(3)}</div>
            <hr />
            <div className="gallery-container">
              {galleryData.map((gallery) => (
                <ImageGallery key={gallery.id} id={gallery.id} title={gallery.title} />
              ))}
            </div>
            <div className="go-back" onClick={handleGoBack}>
            <h2>Iskam drugo chetene</h2>
            </div>
          </DndProvider>
        );
      case 'option2':
        return (
          <DndProvider backend={HTML5Backend}>
            <div className="cards">{renderCards(2)}</div>
            <hr />
            <div className="cards">{renderCards(3)}</div>
            <hr />
            <div className="gallery-container">
              {galleryData.map((gallery) => (
                <ImageGallery key={gallery.id} id={gallery.id} title={gallery.title} />
              ))}
            </div>
            <div className="go-back" onClick={handleGoBack}>
            <h2>Iskam drugo chetene</h2>
            </div>
          </DndProvider>
        );
      case 'option3':
        return (
          <DndProvider backend={HTML5Backend}>
            <div className="cards">{renderCards(2)}</div>
            <hr />
            <div className="cards">{renderCards(3)}</div>
            <hr />
            <div className="cards">{renderCards(3)}</div>
            <hr />
            <div className="gallery-container">
              {galleryData.map((gallery) => (
                <ImageGallery key={gallery.id} id={gallery.id} title={gallery.title} />
              ))}
            </div>
            <div className="go-back" onClick={handleGoBack}>
              <h2>Iskam drugo chetene</h2>
            </div>
          </DndProvider>
        );
      default:
        return (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('option1')}>
              <h2>Yes/No reading</h2>
              <p>(3 cards)</p>
            </div>
            <div className="option" onClick={() => handleOptionClick('option2')}>
              <h2>Question reading</h2>
              <p>(5 cards)</p>
            </div>
            <div className="option" onClick={() => handleOptionClick('option3')}>
              <h2>Past/Pr/F reading</h2>
              <p>(8 cards)</p>
            </div>
          </div>
        );
    }
  };

  return <div className="package">{renderContent()}</div>;
};

export default App;

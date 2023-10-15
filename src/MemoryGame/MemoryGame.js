import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './MemoryGame.css';
import tileslist from './Tiles';

import pic from './tilePictures/LandingPagePic.png'

var tileMap  = new Map();
const MemoryGame = ()  => {
  const { difficulty } = useParams();
  const [tiles, setTiles] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);


  const createTiles = () => {
    var initialTiles = tileslist;
    
    for (let i = 0; i < initialTiles.length; i += 2) {
      tileMap.set(initialTiles[i], i);
      tileMap.set(initialTiles[i + 1], i);
    }

    if (difficulty === "easy"){
      initialTiles = initialTiles.slice(0, 4)
    }
    if (difficulty === "medium"){
      initialTiles = initialTiles.slice(0, 8)
    }
    const shuffledTiles = initialTiles.sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
  };

  useEffect(() => {
    createTiles();
  }, [difficulty]);

  const handleTileClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      if (tileMap.get(tiles[newFlipped[0]]) === tileMap.get(tiles[newFlipped[1]])) {
        setSolved([...solved, ...newFlipped]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="MemoryGame">
      <div className="game-buttons">
      <Link to="/memory">
            <button>Back</button>
        </Link>
      </div>

      <div className="tiles">
        {tiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => handleTileClick(index)}
            className={`tile ${flipped.includes(index) ? 'flipped' : ''} ${solved.includes(index) ? 'solved' : ''}`}>
            {flipped.includes(index) || solved.includes(index) ? tile : ''}
          </div>
        ))}
      </div>
    </div>
  ); 
}
export default MemoryGame;


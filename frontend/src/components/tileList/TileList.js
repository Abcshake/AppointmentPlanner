import React from "react";
import {Tile} from './../tile/Tile.js';
import Background from '../../assets/Background.jpg';

export const TileList = ({list,onDelete, onQuery}) => {
  return (
    <div style={{ backgroundImage: 'url(' + Background + ')'}}>
      {list.map((tile, index) => (
          <Tile key={index} tile={tile} onDelete={onDelete} onQuery={onQuery} />
      ))}
    </div>
  );
};
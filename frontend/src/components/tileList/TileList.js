import React from "react";
import {Tile} from './../tile/Tile.js';
export const TileList = ({list,onDelete, onQuery}) => {
  return (
    <div>
      {list.map((tile, index) => (
          <Tile key={index} tile={tile} onDelete={onDelete} onQuery={onQuery} />
      ))}
    </div>
  );
};
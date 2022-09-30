import React from "react";
import {Tile} from './../tile/Tile.js';
export const TileList = ({list}) => {
  console.log(list);
  return (
    <div>
      {list.map((tile, index) => (
          <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
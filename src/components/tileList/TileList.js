import React from "react";
import {Tile} from './../tile/Tile.js';
export const TileList = (props) => {

  console.log(props.list);
  return (
    <div>
     {
     props.list.map((info,index) => 
        <Tile info = {info} key = {index} />
      )
    }
    
    </div>
  );
  
};
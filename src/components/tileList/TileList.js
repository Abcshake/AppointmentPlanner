import React from "react";
import {Tile} from '../../components/tile/Tile';

export const TileList = ({contacts}) => {
  
  return (
    <div>
        {contacts.map((value,index) =>  <Tile value={value} key={index} />)}
    </div>
  );
};

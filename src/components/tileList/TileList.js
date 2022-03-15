import React from "react";
import {Tile} from '../../components/tile/Tile';

export const TileList = (props) => {
  const {objArr} = props;
  return (
    <div>
      <ul>
        {objArr.map((value,index) => <Tile value={value} key={index} />
        )}
      </ul>
    </div>
  );
};

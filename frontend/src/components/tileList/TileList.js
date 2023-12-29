import React from "react";
import {Tile} from './../tile/Tile.js';
import Background from '../../assets/Background.jpg';
import "./TileList.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const TileList = ({list,onDelete, onQuery}) => {
    if (list === null || list.length === 0) {
      return (
      <div className="EmptyList">
          <Player
              autoplay
              loop
              src="https://lottie.host/06d65f47-ab4f-4560-ad77-f8342a02d368/MjJCuqGbOj.json"
              style={{ height: '300px', width: '300px' }}
              >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
          <p>One Appointment Coming up!</p>
      </div>
      )
  } else {
    return (
      <div style={{ backgroundImage: 'url(' + Background + ')'}}>
        {list.map((tile, index) => (
            <Tile key={index} tile={tile} onDelete={onDelete} onQuery={onQuery} />
        ))}
      </div>
    );
  }
};
import React from "react";

export const Tile = ({ list }) => {
  return (
    <div className="tile-container">
      {Object.values(list).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};

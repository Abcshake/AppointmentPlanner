import React from "react";

export const Tile = ({tile}) => {


 const info = Object.values(tile).map((value, index) => {
  let className;
  if (index === 0) {
    className='tile-title';
  } else {
    className='tile'
  }
  return <p key={index} className={className} >{value}</p>
  
});
 


return (
  <div className="tile-container">
    {info}
  </div>
);
};
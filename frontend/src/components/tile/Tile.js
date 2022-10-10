import React from "react";
import { NavLink } from 'react-router-dom';


export const Tile = ({tile,onDelete}) => {

const handleDelete = async() => {
  let id = tile.name;
  onDelete(id);
  await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
    });
    
}



 const info = Object.values(tile).map((value, index) => {
  let className;
  if (index === 0) {
    className='tile-title';
  } else {
    className='tile'
  }

  return (
    <div>
      <p key={index} className={className} >{value}</p>
    </div>
  ) 
});
 


return (
  <div className="tile-container">
    <React.Fragment>
    {info}
    <button onClick={handleDelete}>Delete</button>
    <NavLink to={`/update/${tile.name}`}>
      Update
    </NavLink>
    </React.Fragment>
  </div>
);
};
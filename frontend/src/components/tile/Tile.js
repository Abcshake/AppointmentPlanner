import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect  } from "react";

export const Tile = ({tile,onDelete, onQuery}) => {

const handleDelete = async() => {
  let id = tile.name;
  onDelete(id);
  await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
    });
    
}

useEffect(() => {
  onQuery({name: tile.name,
           phone: tile.phone,
           email: tile.email})
})


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
    <NavLink to={`/update/`}>
      Update
    </NavLink>
    </React.Fragment>
  </div>
);
};
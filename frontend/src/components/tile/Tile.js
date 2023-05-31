import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect  } from "react";
import { useHistory } from 'react-router-dom';
export const Tile = ({tile,onDelete, onQuery}) => {
const history = useHistory();
const handleDelete = async() => {
  let id = tile.name;
  onDelete(id);
  await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
    });
    
}

const handleUpdate = () => {
  history.push('/update/')
}

useEffect(() => {
  if(tile.hasOwnProperty('title')){  
  onQuery({
          title: tile.title,
          contact: tile.contact,
           date: tile.date,
           time: tile.time})
  } else {
  onQuery({
            id: tile.id,
            name: tile.name,
             phone: tile.phone,
             email: tile.email})
  }
},[tile])


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
    <button onClick={handleUpdate}>Update</button>
    </React.Fragment>
  </div>
);
};
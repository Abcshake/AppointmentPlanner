import React from "react";

export const Tile = ({tile,onDelete}) => {

const handleDelete = async() => {
  let id = tile.name;
  await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
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
    <button>Update</button>
    <button onClick={handleDelete}>Delete</button>
    </React.Fragment>
  </div>
);
};
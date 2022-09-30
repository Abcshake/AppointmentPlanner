import React from "react";

export const Tile = ({tile}) => {

const handleUpdate = {

}

const handleDelete = {
    
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
    <button onClick={handleUpdate}>Update</button>
    <button onClick={handleDelete}>Delete</button>
    </React.Fragment>
  </div>
);
};
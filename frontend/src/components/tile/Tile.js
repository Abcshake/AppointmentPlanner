import React from "react";
import { useEffect  } from "react";
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export const Tile = ({tile,onDelete, onQuery}) => {
const history = useHistory();
const handleDelete = async() => {
  let id = tile.name;
  onDelete(id);
  // await fetch(`http://localhost:5000/api/contacts/${id}`, {
  //     method: "DELETE",
  //   });
    
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
    <Container maxWidth="lg" justifyContent="center">
    <Box 
        display="flex" 
        flexDirection="column"
        width={500} height={200} 
        bgcolor="#cfe8fc"
        justifyContent="center"
        sx={{ p: 2, border: '1px solid' }}
    >
      {info}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </Box>
    </Container>
    </React.Fragment>
  </div>
);
};
import React from "react";
import { useEffect  } from "react";
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

export const Tile = ({tile,onDelete, onQuery}) => {
const history = useHistory();


const handleDelete = async() => {
  onDelete(tile);
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
  <div>
    <Grid container direction="row" flexWrap="wrap">
     {Object.values(tile).map((tile, index) => (
      <Grid item key={index}>
        <Card sx={{ maxWidth: 500 }}>
        <CardContent sx={{ bgcolor:'#cfe8fc' }}>
          <Typography variant="body2" color="text.secondary">
            {tile}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={handleDelete}>Delete</Button>
          <Button size="medium" onClick={handleUpdate}>Update</Button>
        </CardActions>
        </Card>
      </Grid>
       ))}
    </Grid>
  </div>
);
};
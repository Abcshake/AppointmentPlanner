import React from "react";
import { useEffect  } from "react";
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from "@mui/material/Paper";
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


return (
  <div>
    <Grid container 
      direction="rows"
      columns={{ xs: 4, sm: 4, md: 4 }}>
      <Grid item container direction="column" >
        <Grid item justifyContent="center">
          <Card  xs={4}>
            {Object.values(tile).map((tile) => (
            <Typography variant="body2" key={tile.id}> 
              {tile}
            </Typography>
            ))}
          </Card>
         </Grid> 
      </Grid>
        <CardActions>
          <Button size="medium" onClick={handleDelete}>Delete</Button>
          <Button size="medium" onClick={handleUpdate}>Update</Button>
        </CardActions>
    </Grid>
  </div>
);
};
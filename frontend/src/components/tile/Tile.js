import React from "react";
import { useEffect  } from "react";
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material";
import { Theme } from "../../Theme";

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
    <Grid container direction="column">
    <Container  sx={{gap: 2}}>
    <ThemeProvider theme={Theme}>
        <Card sx={{ backgroundColor: "primary.main" }}>
        {Object.values(tile).map((tile) => (
          <Typography variant="body2" >
          {tile}
        </Typography>
      ))}
        </Card>
  <CardActions sx={{ backgroundColor: "primary.other" }}>
    <Button size="medium" onClick={handleDelete}>Delete</Button>
    <Button size="medium" onClick={handleUpdate}>Update</Button>
  </CardActions>
  </ThemeProvider>
  </Container>
</Grid>

  </div>
);
};
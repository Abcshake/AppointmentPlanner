import React from "react";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material";
import { Theme } from "../../Theme";
export const ConditionalButtons = (props) => {

const {setTemp, setChange, handleUpdateContact, change, contact} = props;
    return (
    <div>
        <ThemeProvider theme={Theme}>
        { change ? (
        <CardActions sx={{ backgroundColor: "primary.other" }}>
            <><Button size="medium"
            onClick={() => {
                setTemp({ ...contact });
                setChange(false);
            } }
            >
                    Cancel
                </Button>
                <Button size="medium"
                    onClick={handleUpdateContact}>Save</Button></>
        </CardActions>
                    ) : null}
        </ThemeProvider>
    </div>
    );
};


       
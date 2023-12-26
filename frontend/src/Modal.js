// Modal.js
import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CustomModal = () => {
const [isOpen, SetIsOpen] = useState(true);

const handleClose = () => {
    SetIsOpen(false);
}
  return (
    <Modal
      open={isOpen} 
      contentLabel="Example Modal"
    >
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to the Appointment App!
          </Typography>
          <Player
                autoplay
                loop
                src="https://lottie.host/a48545f2-c308-4d76-812e-ac61139cef55/uwlTeVYW9i.json"
                style={{ height: '300px', width: '300px' }}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
          <Button onClick={handleClose}>Continue</Button>
      </Box>  
    </Modal>
  );
};

export default CustomModal;
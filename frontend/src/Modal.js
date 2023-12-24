// Modal.js
import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      isOpen={isOpen} 
      contentLabel="Example Modal"
    >
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to the Appointment App!
          </Typography>
          <Button onClick={handleClose}>Continue</Button>
      </Box>  
    </Modal>
  );
};

export default CustomModal;

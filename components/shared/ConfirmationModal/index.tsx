import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface ConfirmationModalInterface {
  open: boolean;
  handleClose: () => void;
  text: string;
  action: any;
  item: string;
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  maxWidth: '400px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#141927',
  boxShadow: 24,
  border: '3px #36af8e',
  borderRadius: '10px',
  p: 4,
};

export default function ConfirmationModal({
  open,
  handleClose,
  text,
  action,
}: ConfirmationModalInterface) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Typography
              sx={{
                color: '#f5f5f5',
                whiteSpace: 'normal',
                position: 'relative',
                fontSize: '15px',
              }}
              id='modal-modal-title'
              variant='h6'
            >
              {text}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                handleClose();
                action();
              }}
              sx={{ color: '#f5f5f5' }}
            >
              <Typography>Da</Typography>
            </Button>
            <Button onClick={handleClose} sx={{ color: '#f5f5f5' }}>
              <Typography>Nu</Typography>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

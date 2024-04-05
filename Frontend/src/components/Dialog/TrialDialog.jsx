/** @format */

import React from 'react';
import Button from '@mui/material/Button';
import DialogStyled from './DialogStyles'; // Import DialogStyled from DialogStyles.js
import DialogContent from '@mui/material/DialogContent';

const TrialDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState('md'); // Default maxWidth

  const handleClickOpen = () => {
    setOpen(true);
    setMaxWidth('lg'); // Change maxWidth to 'md' (medium) when dialog is opened
  };

  const handleClose = () => {
    setOpen(false);
    setMaxWidth('md'); // Reset maxWidth to 'sm' (small) when dialog is closed
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ backgroundColor: 'red' }}
      >
        FREE TRIAL PERIOD
      </Button>
      <DialogStyled open={open} onClose={handleClose} maxWidth={maxWidth}>
        <DialogContent>
          At Hajamie Judo , we understand that starting martial arts can be a
          big step. <br />
          We offer a free month to all new students. <br />
          This is a great way to see if judo is right for you. <br />
          We have spare Judo Gi's so no need for a large investment at the
          start.
        </DialogContent>
      </DialogStyled>
    </div>
  );
};

export default TrialDialog;

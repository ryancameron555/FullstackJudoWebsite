/** @format */

import React from 'react';
import { Typography, Button } from '@mui/material';
import { HeroSection } from '../themes/styles/default';
import TrialDialog from './Dialog/TrialDialog';

const Hero = () => {
  return (
    <HeroSection>
      <Typography
        variant="h2"
        gutterBottom
        style={{ fontFamily: 'Lumanosimo, Arial, sans-serif' }}
      >
        Welcome to Hajamie Judo
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Not just a sport, but a way of life
      </Typography>
      <TrialDialog />
    </HeroSection>
  );
};

export default Hero;

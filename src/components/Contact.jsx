import React from 'react';
import { Box, Typography } from '@mui/material';
import ButtonComponent from './Button'; 
import { styled } from "@mui/system";

const ContactSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Typography variant="h4" component="h2" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body1" align="center" sx={{ color: 'text.secondary', maxWidth: 600 }}>
        I'm always open to new opportunities, collaborations, or simply connecting with like-minded professionals!
        Feel free to reach out if you’d like to discuss projects, share ideas, or ask questions. Let's create something
        amazing together!
      </Typography>

      <ButtonComponent
        href="https://www.linkedin.com/in/samidha-manjrekar-3a519a283/"
        text="Connect on LinkedIn"
      />
    </ContactSection>
  );
}
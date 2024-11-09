import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <footer className="footer container mx-auto py-8 text-center">
      <h3 className="text-lg pb-2">~ Samidha Manjrekar ~</h3>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
        <a href="https://github.com/SamidhaManjrekar" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ color: 'inherit', cursor: 'pointer' }} />
        </a>
        <a href="https://www.linkedin.com/in/samidha-manjrekar-3a519a283/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ color: 'inherit', cursor: 'pointer' }} />
        </a>
        <a href="mailto:smanjrekar135@gmail.com">
          <EmailIcon sx={{ color: 'inherit', cursor: 'pointer' }} />
        </a>
      </Box>
    </footer>
  );
}
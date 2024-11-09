import React from 'react';
import { AppBar, Box, Toolbar, Button, styled } from '@mui/material';
import ButtonComponent from './Button'; 

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4), 
  alignItems: 'center', 
  justifyContent: 'center',  
  marginLeft: 'auto',    
  [theme.breakpoints.down('sm')]: {
    display: 'none', 
  }
}));

const ResumeWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(4), // Adds space between the nav links and resume button
}));

export default function Header() {
  return (
    <HeaderContainer position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} /> 
        <NavLinks>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#work">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </NavLinks>
        <ResumeWrapper>
          <ButtonComponent
            href="/src/assets/resume.pdf" 
            text="Resume"
          />
        </ResumeWrapper>
      </Toolbar>
    </HeaderContainer>
  );
}
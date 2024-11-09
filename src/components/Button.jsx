import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: 10, 
  backgroundColor: theme.palette.primary.main, 
  color: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {  
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[2],
  },
}));

const ButtonComponent = ({ href, text, ...props }) => {
  return (
    <StyledButton
      href={href}
      rel="noopener noreferrer"
      variant="contained"
      {...props} 
    >
      {text}
    </StyledButton>
  );
};

export default ButtonComponent;
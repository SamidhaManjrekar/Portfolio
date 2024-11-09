import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { styled } from "@mui/system";

const EducationSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center', 
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
}));

const SchoolDetails = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: 'center', 
}));

const Institution = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.text.primary,
}));

const Degree = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.text.secondary,
}));

const Education = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <EducationSection>
        <Typography variant="h4" component="h3" gutterBottom>
          Education
        </Typography>
        <Divider sx={{ my: 2 }} />
        
        <SchoolDetails>
          <Institution>Symbiosis Institute of Technology  |   Pune, Maharashtra</Institution>
          <Degree>
            Bachelor of Technology in Computer Science with Minor in AIML
            <br />
            Cumulative GPA: 8.21/10 (Till Semester 4)
          </Degree>
        </SchoolDetails>

        <SchoolDetails>
          <Institution>Sunrise English Private School   |   Abu Dhabi, UAE</Institution>
          <Degree>
            XII - 91% & X - 92.6%
          </Degree>
        </SchoolDetails>
        
      </EducationSection>
    </Container>
  );
};

export default Education;
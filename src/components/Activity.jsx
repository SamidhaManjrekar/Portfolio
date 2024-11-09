import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 2),
  },
}));

const ActivityCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(3),
  transition: "transform 0.3s ease",
  maxWidth: "600px",
  width: "100%",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

const ActivitySection = () => {
  return (
    <Section>
      <Title variant="h4">Positions of Responsibility</Title>

      <ActivityCard elevation={0}>
        <Typography variant="h6" color="text.primary" fontWeight={600}>
          ACM Student Chapter
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Media Head
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Boosted social media engagement through strategic content planning and
          data-driven analysis, effectively leveraging platforms such as
          LinkedIn, Instagram, and Gmail to reach and engage a wider audience.
        </Typography>
      </ActivityCard>

      <ActivityCard elevation={0}>
        <Typography variant="h6" color="text.primary" fontWeight={600}>
          Internationalization Cell
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Coordinator
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Coordinated and organized global awareness initiatives and cultural
          exchange programs aimed at fostering international collaboration and
          broadening the global perspective within the institution.
        </Typography>
      </ActivityCard>
    </Section>
  );
};

export default ActivitySection;

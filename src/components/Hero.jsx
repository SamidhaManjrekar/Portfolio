import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ButtonComponent from "./Button";
const myImage = new URL("../assets/IMG_8431.jpeg", import.meta.url).href;

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(4),
  gap: theme.spacing(3),
  marginTop: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

const HeroImage = styled("img")(({ theme }) => ({
  width: 128,
  height: 128,
  borderRadius: "50%",
  border: `4px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(3),
}));

export default function Hero() {
  return (
    <HeroSection>
      <HeroImage src={myImage} alt="Samidha's profile picture" />
      <Typography variant="body1" color="text.primary" fontWeight={600}>
        Hello! I'm Samidha
      </Typography>
      <Typography
        variant="h3"
        color="text.secondary"
        fontWeight={700}
        sx={{ textTransform: "uppercase", maxWidth: "15ch" }}
      >
        Full-Stack Developer
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        sx={{ maxWidth: "80ch" }}
      >
        I'm a third-year computer science student with a focus on
        <strong> artificial intelligence</strong> and
        <strong> machine learning</strong>, currently studying at Symbiosis
        Institute of Technology. I’m passionate about building engaging and
        user-friendly web applications that integrate both
        <strong> front-end</strong> and <strong> back-end</strong> skills.
      </Typography>
      <ButtonComponent href="#contact" text="Reach Out" />
    </HeroSection>
  );
}
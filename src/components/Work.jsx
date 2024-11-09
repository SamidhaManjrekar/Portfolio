import React from "react";
import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";

export default function Work() {
  const projects = [
    {
      title: "Pharmacy Management System",
      subtitle: "JAVA Swing, MySQL",
      description:
        "An online platform designed to streamline pharmacy operations, supporting inventory management, prescription processing, billing, and detailed reporting. This platform offers role-based access for admins and pharmacists, allowing for efficient workflow management and user control.",
      githubLink: "https://github.com/SamidhaManjrekar/Pharmacy_Management_System",
    },
    {
      title: "WellNest",
      subtitle: "Spring Boot, React.js, Redux, MySQL, Postman",
      description:
        "A full-stack mental health platform designed to provide a supportive online community where users can connect, share, and engage in meaningful discussions. This platform allows users to post, comment, like, and interact within dedicated chatrooms. Built with a focus on secure, stateless session management, responsive UI, and efficient back-end functionality.",
      githubLink: "https://github.com/srishti-parulekar/WellNest",
    },
    {
      title: "Movie Recommendation System",
      subtitle: "Python, Flask, HTML, CSS, JS",
      description:
        "A movie recommendation system built using machine learning algorithms to suggest movies based on user preferences. The app provides personalized movie suggestions based on previous user activity, improving the user experience by recommending content that matches their tastes.",
      githubLink: "https://github.com/SamidhaManjrekar/movie-recommendation-system",
    },
    {
      title: "Globe Trekker",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "Globe Trekker is a travel website that inspires and guides travelers with expert insights and detailed destination information. Whether you're planning an adventure, cultural immersion, or luxury escape, Globe Trekker offers everything you need to make your journey unforgettable.",
      websiteLink: "https://github.com/SamidhaManjrekar/SCT_WD_1",
    },
    {
      title: "PaperLingo",
      subtitle: "MERN Stack, React.js, Redux, Node.js, Express, MongoDB",
      description:
        "PaperLingo is a paper trading platform that allows users to practice stock trading with virtual points. It includes features like trading stocks, checking portfolio status, viewing transaction history, and earning points by completing quizzes. It uses real-time market data and provides a risk-free environment for learning stock trading.",
      githubLink: "https://github.com/priyankag12/mern-project",
    },
  ];

  return (
    <section
      id="work"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "4rem 0",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" component="h2" align="center" sx={{ mb: 4 }}>
          Projects
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            padding:3,
            color: "text.secondary",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          Here are some of the projects I've worked on!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "transparent", 
                  padding: 3,
                  height: "100%",  
                  border: "2px solid #e11d48",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.subtitle}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, flexGrow: 1 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="outlined"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary.main",
                    borderColor: "primary.main",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  GitHub
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
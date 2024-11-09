import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const AboutSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(6),
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(2),
  },
}));

const SkillList = styled(List)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const SkillListsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const profileImage = new URL("../assets/IMG_8431.jpeg", import.meta.url).href;

export default function About() {
  return (
    <Container id="about" maxWidth="lg">
      <AboutSection>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ContentWrapper>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
              >
                About
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                With a strong foundation in both front-end and back-end
                technologies, I specialize in building robust web applications
                from scratch. I love solving complex problems and am committed
                to continuous learning in this rapidly evolving field.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                My projects range from interactive user interfaces to secure and
                efficient server-side logic. I’m always eager to explore new
                tools and technologies to expand my skill set and improve my
                development process.
              </Typography>
              <Divider sx={{ my: 4 }} />
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
              >
                Skills
              </Typography>
              <SkillListsWrapper>
                <SkillList>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    Technical Skills
                  </Typography>
                  {["Core Java", "HTML/CSS", "MySQL"].map((skill) => (
                    <ListItem key={skill} disablePadding>
                      <ListItemText primary={skill} sx={{ color: "text.secondary" }} />
                    </ListItem>
                  ))}
                </SkillList>

                <SkillList>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    Frameworks and Libraries
                  </Typography>
                  {["Spring Boot", "React"].map((skill) => (
                    <ListItem key={skill} disablePadding>
                      <ListItemText primary={skill} sx={{ color: "text.secondary" }} />
                    </ListItem>
                  ))}
                </SkillList>

                <SkillList>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    Soft Skills
                  </Typography>
                  {[
                    "Problem-Solving",
                    "Teamwork",
                    "Communication",
                    "Time Management",
                    "Adaptability",
                    "Agile Methodologies",
                  ].map((skill) => (
                    <ListItem key={skill} disablePadding>
                      <ListItemText primary={skill} sx={{ color: "text.secondary" }} />
                    </ListItem>
                  ))}
                </SkillList>

                <SkillList>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    Languages
                  </Typography>
                  {["English", "Hindi"].map((skill) => (
                    <ListItem key={skill} disablePadding>
                      <ListItemText primary={skill} sx={{ color: "text.secondary" }} />
                    </ListItem>
                  ))}
                </SkillList>
              </SkillListsWrapper>
            </ContentWrapper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={profileImage}
                alt="Profile Picture"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px",
                  objectFit: "cover",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </AboutSection>
    </Container>
  );
}
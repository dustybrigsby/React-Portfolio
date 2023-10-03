import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import {
  Box,
  Grid,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import projects from "./projects";

function App() {
  const [currentSection, setCurrentSection] = useState("Portfolio");

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        className="App"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <CssBaseline enableColorScheme />
        <Header
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        <Container
          maxWidth="md"
          sx={{
            py: 8,
          }}
        >
          {currentSection === "About Me" && (
            <About />
          )}

          {currentSection === "Portfolio" && (
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </Grid>
          )}

          {currentSection === "Contact" && <Contact />}

          {currentSection === "Resume" && (
            <section>
              <a href="path_to_resume.pdf">Download Resume</a>
              <ul>{/* List of proficiencies */}</ul>
            </section>
          )}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

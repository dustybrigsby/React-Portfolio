import { Container, Typography, Box } from "@mui/material";
import profileImage from "../assets/images/profile.jpg";

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" marginBottom="70px">
        <Box
          component="img"
          src={profileImage}
          alt="Web developer Dusty Brigsby smiling."
          minWidth="200px"
          sx={{
            width: "50%",
            alignSelf: "center",
            justifySelf: "center",
          }}
        />
      </Box>
      <Typography>
        Dusty Brigsby, a proud native of Fargo, ND, has worn many hats
        throughout his life. Starting with an honorable stint in the Navy as an
        Electrician, Dusty then transitioned to the world of art, earning a
        degree in Art and Graphic Design from Portland State University. When
        he's not lost in a captivating science fiction or fantasy novel, you
        might find him engrossed in a tabletop role-playing game or tackling a
        DIY home project. Currently, he plays a pivotal role as an Assistive
        Technology Practitioner for Portland Public Schools, leveraging his
        detail-oriented nature and team-player spirit. Those who know Dusty
        appreciate his witty sense of humor and his insatiable thirst for
        knowledge, evident in his current journey of mastering React app
        development through the University of Oregon's Coding Bootcamp on EdX.
      </Typography>
    </Container>
  );
};

export default About;

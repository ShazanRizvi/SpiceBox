import React from "react";
import { Container, Box, CardMedia, Typography } from "@mui/material";
import Hero from "../../assets/Hero.jpg";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import {IconButton} from "@mui/material";

const Contact = () => {

  return (
    <Box
      fontFamily="Montserrat"
      m="20px"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="170px"
      gap="30px"
      maxHeight="100vh"
      overflow="auto"
    >
      <Box
        display="grid"
        gridColumn="span 12"
        gridRow="span 2"
        boxShadow=" 15px 15px 10px #DCDCDC"
      >
        <CardMedia image={Hero}>
          <Box m="20px">
            <Box pt="50px">
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Spicebox
              </Typography>
            </Box>
            <Box pt="30px">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  color: "white",
                  width: "800px",
                }}
              >
                The solution to all your hunger needs management. Explore over
                more than 200+ recipes just by searching here!
              </Typography>
            </Box>
          </Box>
        </CardMedia>
      </Box>
      <Box
        display="grid"
        gridColumn="span 12"
        gridRow="span 2"
        boxShadow=" 15px 15px 10px #DCDCDC"
      >
        <Box display="flex" justifyContent="center">
          <Typography variant="h3" fontWeight="600" fontFamily="Montserrat">
            CONTACT US
          </Typography>
        </Box>
        <Box>
          <Box mb="10px">
            <Typography variant="h9" fontWeight="500" fontFamily="Montserrat">
              We would love to hear your feedback and suggestions about our
              recipe search and generator application! If you have any
              questions, comments, or concerns, please don't hesitate to reach
              out to us using the contact information below.
            </Typography>
          </Box>
          <Box mb="10px">
            <Typography variant="h9" fontWeight="500" fontFamily="Montserrat">
              We are always looking for ways to improve our app and make it more
              user-friendly and useful for our community of food enthusiasts.
              Whether you have a suggestion for a new feature, a recipe you'd
              like us to add, or just want to say hello, we would love to hear
              from you!
            </Typography>
          </Box>
          <Box mb="10px" mt="10px" display="flex" justifyContent="center">
            <Typography variant="h9" fontWeight="500" fontFamily="Montserrat">
              Thank you for using our app, and happy cooking!
            </Typography>
          </Box>
          {/* Social media Links */}
          <Box display="flex" justifyContent="center">
            <IconButton
              href="mailto:shazanrizvi80@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon sx={{ m: "20px", fontSize: 40 }} />
            </IconButton>

            <IconButton
              href="https://github.com/ShazanRizvi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ m: "20px", fontSize: 40 }} />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/pexelbreaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ m: "20px", fontSize: 40 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

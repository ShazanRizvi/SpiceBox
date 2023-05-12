import React from "react";
import { Container, Box, CardMedia, Typography } from "@mui/material";
import Hero from "../../assets/Hero.jpg";

const About = () => {
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
      <Box display="grid" gridColumn="span 12" gridRow="span 2">
        <Box display="flex" justifyContent="center">
          <Typography variant="h3" fontWeight="600" fontFamily="Montserrat">
            ABOUT US
          </Typography>
        </Box>
        <Box mt="10px">
          <Box mb="10px">
            <Typography variant="h9" fontWeight="500" fontFamily="Montserrat">
              Welcome to our recipe search and generator application! I am a a
              food enthusiast who love to explore new recipes and experiment
              with different ingredients in the kitchen. My passion for cooking
              and sharing delicious meals inspired me to create this app, which
              makes it easy for you to search for and discover new recipes to
              try.
            </Typography>
          </Box>
          <Box mb="10px">
            <Typography variant="h9" fontWeight="500" fontFamily="Montserrat">
              With my app, you can easily search for recipes based on specific
              names or ingredients. Whether you're looking for vegan,
              gluten-free, or low-carb options, I've got you covered! My app
              also allows you to generate a random recipe at the click of a
              button, which is perfect for those times when you're feeling
              adventurous and want to try something new. We understand that
              cooking can be daunting for some people, especially if you're new
              to the kitchen or don't have a lot of experience with different
              ingredients.
            </Typography>
          </Box>
          <Box mb="10px">
            <Typography variant="h9" fontWeight="500" fontFamily="Montserrat">
              That's why we've designed our app to be user-friendly and easy to
              navigate, with clear instructions and helpful tips to guide you
              through each recipe. At our core, we believe that food brings
              people together and creates a sense of community. I hope that my
              app will inspire you to try new recipes and share them with your
              loved ones, whether you're cooking for yourself or hosting a
              dinner party.
            </Typography>
          </Box>
          <Box mb="10px" mt="10px" display="flex" justifyContent="center">
            <Typography variant="h8" fontWeight="600" fontFamily="Montserrat">
              Thank you for using our app, and happy cooking!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

import React from 'react'
import { Container,Box,CardMedia, Typography } from '@mui/material'
 import Hero from "../../assets/Hero.jpg"
import RandomMeal from '../RandomMealGen/RandomMeal';

const LandingPage = () => {
     
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
      >
        <Box mt="20px">
          <RandomMeal />
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage

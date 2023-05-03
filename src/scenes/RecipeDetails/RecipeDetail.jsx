import React, { useContext, useEffect } from "react";
import recipeContext from "../../context/recipeContext";
import { useParams } from "react-router-dom";
import { Container, Box, CardMedia, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";


const RecipeDetail = () => {
  const { getRecipeByID, singleRecipe } = useContext(recipeContext);
  let { id } = useParams();
  useEffect(() => {
    getRecipeByID(id);
  }, []);
  const GradientOverlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
  });

  return (
    <>
      <Box position="relative">
        <CardMedia
          sx={{
            height: "300px",
            width: "100%",
            objectFit: "cover",
            margin: "auto",
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          }}
          component="img"
          src={singleRecipe.image}
          alt="recipe image"
        ></CardMedia>
        <GradientOverlay />
      </Box>

      <Box
        fontFamily="Montserrat"
        m="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="170px"
        gap="20px"
        maxHeight="100vh"
        overflow="auto"
      >
        <Box display="grid" gridColumn="span 8" overflow="auto">
          recipe name and recipe instructions
          <Box>
            <Typography variant="h2" fontFamily="Montserrat">
              This is recipe label
            </Typography>
            <Typography>Save, Share buttons</Typography>
          </Box>
          <Box>
               <Typography>
                    Instructions
               </Typography>
          </Box>
        </Box>
        <Box
          display="grid"
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
        >
          Recipe Ingredients
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetail;

import React, { useContext } from "react";
import { Box } from "@mui/material";
import Search from "../../components/search/Search";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import recipeContext from "../../context/recipeContext";

const RecipeBoard = () => {
  const { recipe } = useContext(recipeContext);
  return (
    <Box>
      <Search />
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
        {recipe.map((recipe) => (
          <Box
            display="grid"
            gridColumn="span 4"
            gridRow="span 2"
            overflow="auto"
          >
            <RecipeCard
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              servings={recipe.recipe.servings}
              instructions={recipe.recipe.instructions}
              image={recipe.recipe.image}
              healthLabels={recipe.recipe.dietLabels}
              source={recipe.recipe.source}
              id={recipe.recipe.uri.split('_').pop()}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecipeBoard;

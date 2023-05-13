import React, { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Chip,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import recipeContext from "../../context/recipeContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RandomMeal = () => {
  const { GenerateRandomRecipe, generatedRecipe } = useContext(recipeContext);

  const handleGeneration = () => {
    GenerateRandomRecipe();
    console.log(generatedRecipe);
  };

  return (
    <Box>
      <Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="600"
            fontFamily="Montserrat"
            textAlign="center"
          >
            Random Meal generator
          </Typography>
        </Box>
        <Box m="0px 40px 0px 40px">
          <Typography
            variant="h6"
            fontWeight="400"
            fontFamily="Montserrat"
            m="0px"
          >
            This is a random recipe or a meal generator which generates random
            meals when you click the button below each time. Give it a try by
            clicking the button below.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" pt="20px">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleGeneration}
          >
            Generate!
          </Button>
        </Box>
      </Box>
      {generatedRecipe.length === 0 ? (
        <Box
          display="flex"
          alignItems="center"
          height="400px"
          justifyContent="center"
        >
          <Typography
            sx={{
              color: "#c0c0c0",
            }}
            variant="h8"
            fontWeight="600"
            fontFamily="Montserrat"
          >
            Please hit generate button to bring up a new random recipe
          </Typography>
        </Box>
      ) : (
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
          {/* Column 1: Recipe Detail */}
          <Box
            display="grid"
            gridColumn="span 7"
            gridRow="span 2"
            height="fit-content"
          >
            <Typography variant="h4" fontWeight="600" fontFamily="Montserrat">
              {generatedRecipe.title}
            </Typography>
            <Typography variant="h9" fontWeight="400" fontFamily="Montserrat">
              {generatedRecipe.sourceName}
            </Typography>
            <Box display="flex" pt="20px">
              <Chip
                sx={{
                  mr: "10px",
                }}
                label={`${generatedRecipe.readyInMinutes} minutes`}
                variant="outlined"
                color="secondary"
              ></Chip>
              <Chip
                m="10px"
                label={`${generatedRecipe.servings} servings`}
                variant="outlined"
                color="secondary"
              ></Chip>
            </Box>
            <Box mt="20px">
              {/* Instructions */}
              <Typography
                variant="h7"
                fontWeight="600"
                fontFamily="Montserrat"
                mb="20px"
                ml="10px"
              >
                Instructions
              </Typography>

              {generatedRecipe &&
                generatedRecipe.analyzedInstructions &&
                generatedRecipe.analyzedInstructions &&
                generatedRecipe.analyzedInstructions.map((item) => (
                  <Box>
                    {item &&
                      item.steps &&
                      item.steps.map((step) => (
                        <Box
                          fontWeight="500"
                          boxShadow="8px 8px 15px #D3D3D3"
                          sx={{
                            p: "10px",
                            height: "fit-content",
                            m: "5px",
                          }}
                        >
                          {step.step}
                        </Box>
                      ))}
                  </Box>
                ))}
            </Box>
          </Box>
          {/* Column 2: Recipe Other info */}
          <Box display="grid" gridColumn="span 5" gridRow="span 2">
            <CardMedia
              sx={{
                width: "500px",
                height: "300px",
              }}
              image={generatedRecipe.image}
            />
            <Box>
              {generatedRecipe &&
                generatedRecipe.extendedIngredients &&
                generatedRecipe.extendedIngredients.map((item) => (
                  <Box>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Box display="flex">
                          <Typography
                            variant="h9"
                            fontWeight="500"
                            fontFamily="Montserrat"
                          >
                            {item.original}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="h9"
                          fontWeight="400"
                          fontFamily="Montserrat"
                        >
                          <Box display="flex" justifyContent="space-between">
                            <Typography
                              variant="h9"
                              fontWeight="400"
                              fontFamily="Montserrat"
                            >
                              Measure
                            </Typography>
                            <Typography
                              variant="h9"
                              fontWeight="400"
                              fontFamily="Montserrat"
                            >
                              {item.measures.us.amount}{" "}
                              {item.measures.us.unitShort}
                            </Typography>
                            <Typography
                              variant="h9"
                              fontWeight="400"
                              fontFamily="Montserrat"
                            >
                              {item.measures.metric.amount}{" "}
                              {item.measures.metric.unitLong}
                            </Typography>
                          </Box>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RandomMeal;

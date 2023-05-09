import React, { useContext, useEffect } from "react";
import recipeContext from "../../context/recipeContext";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Card,
  CardContent,
  Paper,
  CircularProgress,
} from "@mui/material";
import "./RecipeDetails.css";
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
        gap="20px"
        maxHeight="100vh"
        overflow="hidden"
      >
        <Box display="grid" gridColumn="span 7" overflow="auto">
          <Box overflow="auto">
            <Box>
              <Typography variant="h3" fontFamily="Montserrat" fontWeight="600">
                {singleRecipe.label}
              </Typography>
            </Box>

            {/* Recipe health Tags */}

            <Box display="flex" overflow="auto">
              {singleRecipe &&
                singleRecipe.healthLabels &&
                singleRecipe.healthLabels.map((item) => (
                  <Chip
                    sx={{ width: "140px", m: "5px" }}
                    label={item}
                    variant="outlined"
                    color="secondary"
                  />
                ))}
            </Box>
            {/* Recipe ingredient cards */}

            <Box display="flex" mt="30px" overflow="auto">
              {singleRecipe &&
                singleRecipe &&
                singleRecipe.ingredients &&
                singleRecipe.ingredients.map((item) => (
                  <Paper oveflow="auto">
                    <Card
                      sx={{
                        display: "flex",
                        width: "500px",
                        m: "30px",
                        boxShadow: "10px 10px 10px #D3D3D3",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          component="div"
                          variant="h6"
                          fontWeight="600"
                        >
                          {item.food}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          width="300px"
                        >
                          {item.text}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          width="200px"
                          pt="5px"
                        >
                          {item.quantity} {item.measure}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "right",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>

                      <CardMedia
                        component="img"
                        sx={{ width: 200 }}
                        image={item.image}
                        alt="Image Unavailable"
                      />
                    </Card>
                  </Paper>
                ))}
            </Box>
          </Box>

          {/* Calories table */}
          <Box display="flex" mt="30px" overflow="auto">
            {singleRecipe &&
              singleRecipe &&
              singleRecipe.digest &&
              singleRecipe.digest.map((item) => (
                <Paper overflow="auto">
                  <Card
                    sx={{
                      display: "flex",
                      width: "500px",
                      m: "30px",
                      boxShadow: "10px 10px 10px #D3D3D3",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h6" fontWeight="600">
                        {item.label}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        width="300px"
                      >
                        Total: {Math.floor(item.total)} {item.unit}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        width="200px"
                        pt="5px"
                      >
                        Daily: {Math.floor(item.daily)} {item.unit}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "right",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                    <Box p="20px" m="30px">
                      <CircularProgress
                        size="4rem"
                        color="secondary"
                        thickness="5.0"
                        variant="determinate"
                        value={item.total}
                      />
                    </Box>
                  </Card>
                </Paper>
              ))}
          </Box>
        </Box>

        {/* Column 2 */}
        <Box
          display="grid"
          gridColumn="span 5"
          gridRow="span 1"
          overflow="auto"
          height="60%"
          p="30px"
        >
          <Box
            display="grid"
            gridRow="span 4"
            overflow="scroll"
            height="fit-content"
          >
            <Box display="grid" overflow="auto">
              {singleRecipe &&
                singleRecipe.ingredientLines &&
                singleRecipe.ingredientLines.map((item) => (
                  <Box
                    fontWeight="500"
                    boxShadow="8px 8px 15px #D3D3D3"
                    sx={{
                      p: "10px",
                      height: "40px",
                      m: "5px",
                      backgroundColor: "#CCCCFF",
                    }}
                  >
                    {item}
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetail;

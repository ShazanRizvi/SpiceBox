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
  Modal,
  TextField,
} from "@mui/material";
import "./RecipeDetails.css";
import { styled } from "@mui/material/styles";
import IosShareIcon from "@mui/icons-material/IosShare";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const RecipeDetail = () => {
  const { getRecipeByID, singleRecipe } = useContext(recipeContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleInfoIconClick = () => {
    window.location.href = `${singleRecipe.url}`;
  };

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
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h3" fontFamily="Montserrat" fontWeight="600">
                {singleRecipe.label}
              </Typography>
              <Box width="100px">
                <InfoOutlinedIcon
                  onClick={handleInfoIconClick}
                  sx={{ p: "13px 10px 8px 0", height: "100%" }}
                />
                <IosShareIcon
                  onClick={handleOpen}
                  sx={{ pb: "10px", height: "100%" }}
                />
              </Box>
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
          <Box display="flex" overflow="auto">
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
          height="80%"
          p="20px"
        >
          <Box
            display="grid"
            gridRow="span 4"
            overflow="hidden"
            height="fit-content"
          >
            {/* Basic Details of the recipe */}
            <Box
              display="grid"
              overflow="hidden"
              p="20px"
              boxShadow="-20px 10px 10px #D3D3D3"
              backgroundColor="white"
            >
              {singleRecipe &&
                singleRecipe.cuisineType &&
                singleRecipe.cuisineType.map((item) => (
                  <Box
                    fontWeight="500"
                    sx={{
                      p: "10px",
                      height: "fit-content",
                      m: "5px",
                    }}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography
                      fontFamily="Montserrat"
                      fontWeight="600"
                      pb="3px"
                    >
                      Cuisine Type
                    </Typography>
                    {item}
                  </Box>
                ))}
              {singleRecipe &&
                singleRecipe.mealType &&
                singleRecipe.mealType.map((item) => (
                  <Box
                    fontWeight="500"
                    sx={{
                      p: "10px",
                      height: "fit-content",
                      m: "5px",
                    }}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography
                      fontFamily="Montserrat"
                      fontWeight="600"
                      pb="3px"
                    >
                      Meal Type
                    </Typography>
                    {item}
                  </Box>
                ))}
              {singleRecipe &&
                singleRecipe.dishType &&
                singleRecipe.dishType.map((item) => (
                  <Box
                    fontWeight="500"
                    sx={{
                      p: "10px",
                      height: "fit-content",
                      m: "5px",
                    }}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography
                      fontFamily="Montserrat"
                      fontWeight="600"
                      pb="3px"
                    >
                      Dish Type
                    </Typography>
                    {item}
                  </Box>
                ))}
            </Box>

            <Box display="grid" overflow="auto" mt="30px">
              {singleRecipe &&
                singleRecipe.ingredientLines &&
                singleRecipe.ingredientLines.map((item) => (
                  <Box
                    fontWeight="500"
                    boxShadow="8px 8px 15px #D3D3D3"
                    sx={{
                      p: "10px",
                      height: "fit-content",
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
      {/* Modal for link copy */}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontFamily="Montserrat"
            >
              Share this Recipe
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth="100%"
              size="small"
              value={singleRecipe.shareAs}
            />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default RecipeDetail;

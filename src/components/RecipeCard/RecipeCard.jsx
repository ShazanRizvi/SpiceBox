import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {Link} from "react-router-dom"

const RecipeCard = ({
  id,
  title,
  ingredients,
  healthLabels,
  source,
  servings,
  instructions,
  image,
}) => {
  return (
    <Card sx={{ maxWidth: 330, boxShadow: "10px 10px 10px #D3D3D3" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={image}
          height="190"
          alt="recipe image"
        />
        <CardContent>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            {source}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/singlerecipe/${id}`}>
          <Button size="small" position="fixed" color="primary">
            View Recipe
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;

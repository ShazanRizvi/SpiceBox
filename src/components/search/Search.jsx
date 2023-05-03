import React,{ useContext,useState } from "react";
import { Box, Input, TextField, Button } from "@mui/material";
import "./Search.css";
import recipeContext from "../../context/recipeContext";
import RecipeCard from "../RecipeCard/RecipeCard";


const Search = () => {
  const{recipe,searchQuery,setSearchQuery}=useContext(recipeContext);
  const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    };

      const updateQuery = (e) => {
        e.preventDefault();
        setSearchQuery(searchTerm);
        console.log(recipe)
      };
  return (
    <>
      <Box m="20px" display="flex">
        <TextField
          fullWidth
          id="search"
          label="Search for your favorite recipes"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleOnChange}
        />
        <Box ml="5px">
          <Button
            sx={{
              borderRadius: 0,
              height: 46,
              color: "black",
              borderColor: "black",
              ":hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            size="medium"
            variant="outlined"
            onClick={updateQuery}
          >
            Search
          </Button>
        </Box>
      </Box>
    
    </>
  );
};

export default Search;

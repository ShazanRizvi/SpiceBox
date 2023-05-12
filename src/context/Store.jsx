import React, { useState, useEffect } from "react";
import recipeContext from "./recipeContext";
import axios from "axios";

const Store = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState([]);
  const [loading, setLoading]=useState(true);

  //Api call for getting recipe for search
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.edamam.com/api/recipes/v2?type=public&app_id=ff7ab32d&app_key=7cd190b46c91432d1f43f5b08e2a4f5f&q=${searchQuery}`,
    };
    axios
      .request(options)
      .then(function (response) {
        setRecipe(response.data.hits);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchQuery]);

  //Api call for the signle recipe

  const getRecipeByID = async (id) => {
    const options = {
      method: "GET",
      url: `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=ff7ab32d&app_key=7cd190b46c91432d1f43f5b08e2a4f5f`,
    };
    await axios
      .request(options)
      .then(function (response) {
        setSingleRecipe(response.data.recipe);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //Random Recipe Generator API

  const GenerateRandomRecipe = () => {
    const options = {
      method: "GET",
      url: `https://api.spoonacular.com/recipes/random`,
      params: {
        apiKey: "4ea3d31f78b14d4eae83b68c5e2ed98f",
        number: "1",
      },
      header: {
        Accept: "application/json",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setGeneratedRecipe(response.data.recipes[0]);
        
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <recipeContext.Provider
      value={{
        recipe,
        searchQuery,
        setSearchQuery,
        getRecipeByID,
        singleRecipe,
        GenerateRandomRecipe,
        generatedRecipe,
      }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export default Store;

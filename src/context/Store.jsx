import React, { useState, useEffect } from "react";
import recipeContext from "./recipeContext";
import axios from "axios";

const Store = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState({});
  const[searchQuery,setSearchQuery]= useState("")

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

const getRecipeByID=async(id)=>{
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

}
  
  return (
    <recipeContext.Provider
      value={{ recipe,searchQuery,setSearchQuery,getRecipeByID,singleRecipe }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export default Store;

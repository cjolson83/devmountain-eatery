import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate, Navigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className={styles.recipe_card}>
      <img
        src={recipe.image_url}
        alt="food_image"
      />
      <h3>{recipe.recipe_name}</h3>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;

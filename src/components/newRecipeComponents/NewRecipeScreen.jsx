import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios"

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios
    .post(`https://recipes.devmountain.com/recipes`, values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section className={styles.recipepage}>
      <h2>Tell us about your Recipe!</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.recipeform}>
              <div className={styles.input_container}>
                <input
                  id="recipeName"
                  type="text"
                  onChange={handleChange}
                  value={values.recipeName}
                  placeholder="Name"
                />
                <input
                  id="imageURL"
                  type="text"
                  onChange={handleChange}
                  value={values.imageURL}
                  placeholder="Image URL"
                />
              </div>
              <div className={styles.radio_container}>
                <input
                  type="radio"
                  name="type"
                  id="cook"
                  value="cook"
                  onChange={handleChange}
                />
                <label htmlFor="radio">Cook</label>
                <br></br>
                <input
                  type="radio"
                  name="type"
                  id="bake"
                  value="bake"
                  onChange={handleChange}
                />
                <label htmlFor="radio">Bake</label>
                <br></br>
                <input
                  type="radio"
                  name="type"
                  id="drink"
                  value="drink"
                  onChange={handleChange}
                />
                <label htmlFor="radio">Drink</label>
              </div>
              <div className={styles.input_container}>
                <input
                  id="prepTime"
                  type="text"
                  onChange={handleChange}
                  value={values.prepTime}
                  placeholder="Prep Time"
                />
                <input
                  id="cookTime"
                  type="text"
                  onChange={handleChange}
                  value={values.cookTime}
                  placeholder="Cook Time"
                />
                <input
                  id="serves"
                  type="text"
                  onChange={handleChange}
                  value={values.serves}
                  placeholder="Serves"
                />
              </div>
              <div className={styles.input_container}>
                <div className={styles.ingredient_inputs}>
                  <input
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <ul>{ingredientDisplay}</ul>
              </div>

              <button
                type="button"
                className="orange-btn"
                onClick={addIngredient}
              >
                Add Another
              </button>
              <textarea
                id="instructions"
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="blue-btn">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

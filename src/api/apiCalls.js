const greenVeganCarrot = {
    fewDessert: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=dessert&fillIngredients=true`,
    allDessert: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=40&tags=dessert&fillIngredients=true`,
    searchCall: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegan&addRecipeInformation=true&fillIngredients=true&`, 
  }
  
  export default greenVeganCarrot;
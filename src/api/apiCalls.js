const greenVeganCarrot = {
    fewDessert: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=dessert`,
    allDessert: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=40&tags=dessert`,
    //searchCall: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegan&query=${recipe}` 
  }
  
  export default greenVeganCarrot;
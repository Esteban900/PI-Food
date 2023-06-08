const { Recipe, Diet } = require ("../db");


const createRecipe =  async (name, image, summary, healthScore, steps, diets,createInBd) =>{

const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
    diets,
    createInBd
});
 const dietBD = await Diet.findAll({
    where: { name: diets}
 })
 newRecipe.addDiet(dietBD);
 return "Receta creada con exito";
};

module.exports = { createRecipe};
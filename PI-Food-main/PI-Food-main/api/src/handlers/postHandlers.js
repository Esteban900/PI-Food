const { createRecipe } = require ("../controllers/postController");

const createRecipeHandler = async (req,res) => {
    const { name, image, summary, healthScore, steps, diets,createInBd } = req.body;
    
   try {
    if(!name || !image || !summary || !healthScore || !steps || !diets || !diets.length) return res.status(400).json("Falta informacion");
        const newRecipe = await createRecipe(name, image, summary, healthScore, steps, diets,createInBd);
    return res.status(200).json( newRecipe);
   } catch (error) {
   return res.status(400).json({ error: error.message })
   }
};

module.exports = {createRecipeHandler};


const { Recipe, Diet } = require ("../db");
const  axios  = require ("axios");
const { getAllFoods } = require ("./infoController");


/*
Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
Debe poder buscarla independientemente de mayúsculas o minúsculas.
Si no existe la receta, debe mostrar un mensaje adecuado.
Debe buscar tanto las de la API como las de la base de datos.
*/
//BUSQUEDA POR NAME

const getSearchByName = async (name) => {
  
    console.log(name);
    const allFoods = await getAllFoods();

    const foodName = allFoods.filter( elem => elem.name.toLowerCase().includes(name.toLowerCase()));

    
    return (foodName.length)? foodName : `La reseta ${name} no existe`;

}



//BUSQUEDA POR ID

const getRecipeByID = async (id,sourse) => {
    if(sourse ==="api"){
   
       const apiData = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=28154e31ea914d1abfcc876c57f5d174`);
            const apiInfo = apiData.data;
          

        const recipe = {
            name: apiInfo.title,
            image: apiInfo.image,
            summary: apiInfo.summary.replace(/<\/?b>/g,'').replace(/<\/?a>/g,''),
            healthScore: apiInfo.healthScore,
          
            steps: apiInfo.analyzedInstructions[0]?.steps?.map(st => {
                return {
                    number: st.number,
                    step:st.step,
                }
            }),
             diets:apiInfo.diets.length > 0 ? apiInfo.diets : "esta receta no tiene dieta",
          
        }
       
        return recipe;

    } else {
        const recipeBd = await Recipe.findByPk(id);
        return recipeBd;
    }
};


module.exports = {getRecipeByID, getSearchByName};
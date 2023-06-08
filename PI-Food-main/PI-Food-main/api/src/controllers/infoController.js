const { Recipe, Diet } = require ("../db"); 

const axios = require ("axios");

//LLAMADO A API

    const getApiInfo = async () => {

   
            const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=28154e31ea914d1abfcc876c57f5d174&addRecipeInformation=true&number=10`);
            
            const apiData = apiUrl.data.results;
                  
            console.log("cantidad ",apiData.length);
      
        const apiInfoDetail = await Promise.all( apiData.map(async (el) => {
            return {
                id:el.id,
                name: el.title,
                image: el.image,
                summary: el.summary.replace(/<\/?b>/g,'').replace(/<\/?a>/g,''),
                healthScore: el.healthScore,
                steps: el.analyzedInstructions[0]?.steps?.map(st => {
                    return {
                        number: st.number,
                        step:st.step,
                    }
                }),
                    
             diets:el.diets.length > 0 ? el.diets : "Esta receta no tiene dieta",
                vegetarian: el.vegetarian,
                vegan: el.vegan,
                glutenFree: el.glutenFree,
                
            };
        })
        );

        //console.log(apiInfoDetail);
        return apiInfoDetail;
   }  //FIN LLAMADO API



//LLAMADO A BDD

const getDbInfo = async () => {
 
    const dataBd = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    })
    let response = await dataBd?.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.name,
            summary: recipe.summary,
            score: recipe.score,
            healthScore: recipe.healthScore,
            image: recipe.image,
            steps: recipe.steps,
            diets: recipe.diets?.map(diet => diet.name),
            createInBd: recipe.createInBd,
        }
    });
    return response;
}

 //FIN LLAMADO BDD



//UNION DE API-BDD

const getAllFoods = async () => {

    const bddAll = await getDbInfo();
    const apiAll = await getApiInfo();

    return [...bddAll, ...apiAll];
} // FIN UNION API-BDD





module.exports = { getAllFoods, getApiInfo };
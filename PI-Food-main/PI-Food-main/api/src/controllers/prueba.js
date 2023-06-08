// //https://api.spoonacular.com/recipes/${id}/information?apiKey=4bbe1e3f28604659bcf36f3c4b81cb43` RECIPECONTROLLERS

// `https://api.spoonacular.com/recipes/complexSearch?apiKey=4bbe1e3f28604659bcf36f3c4b81cb43&addRecipeInformation=true`); INFOCONTROLLERS
// const getNameHandler = async (req,res) => {
//     const { name } = req.query;
    
//     try {
//         if(name) {
//             const resultName = await getSearchByName(name);
//             return resultName;
//         } else {
//             throw("no existe una reseta con ese nombre")
//         }

//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
    
// };


// const diets = diestsApi.data.map(el => el.diets);
// const dietsEach = diets.map(el => {
//     dietsEach.forEach( el=> {
//         diets.findOrCreate({
//             where: { name:el}
//         })
//     })
// })
//     const allDiets = await diets.findAll();

// const dietData = await getApiInfo();
//     const dietApi = dietData.map((el) => el.diets);
//    const dietsPromises = dietApi.map( el => {
//        return Diet.findOrCreate({
//             where: {name: el}
//         })
//     })
//     await Promise.all(dietsPromises);

//     const allDiets = await Diet.findAll();
//     return allDiets;
// }


// const dietData = await getApiInfo();
// const dietApi = await Promise.all( dietData.map( async(el) =>{
//     const dietList = el.diets;
//     const dietsCargar = await Promise.all( dietList.map( el =>{
//        return Diet.findOrCreate({
//             where: {name: el}
//         })
//     }))

// }));


// for ( const el of dietData) { //me intera sobre cada el de la variable dietData
        
//     const dietList = el.diets;
   
//     const newDietList = [...dietList, "vegetarian"];
// //console.log(newDietList);
    
//     if( el.vegetarian === "true") {dietList= [...dietList, "vegetarian"]};// mydietInfo.add("vegetarian");
//    console.log(dietList);
//    //  if(el.vegan ==="true") dietList.push(vegan);
//    //  if(el.glutenFree === "true") dietList.push(glutenFree);
    
//    for ( const elem of dietList) {

    
//        await Diet.findOrCreate({
//            where: {name: elem}
//        })
//    }   
    
//    } 

//    const dietData = await getApiInfo();
  
//     for ( const el of dietData) { 
       
//         const dietList = el.diets;
       
//          const mydietInfo = [];

// if( el.vegetarian === "true"){ mydietInfo= [...dietList, "vegetarian"]};
//     }
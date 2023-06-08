const { Diet } = require ("../db");
const { getApiInfo } = require("./infoController")


/*
Obtiene un arreglo con todos los tipos de dietas existentes.
En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación.
Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.

*/


const getDiet =  async () => {
  
    const dietData = await getApiInfo();
    
     for ( const el of dietData) { //me intera sobre cada el de la variable dietData
          if(String( el.diets) !== "Esta receta no tiene dieta"){
        
         let dietList = el.diets;
       

if( String(el.vegetarian )=== "true"){
     dietList = [...dietList,"vegetarian"] ;
};
if( String(el.vegan )=== "true"){
     dietList = [...dietList,"vegan"] ;
};
if( String(el.glutenFree )=== "true"){
     dietList = [...dietList,"gluten free"] ;
};
       
        for ( const elem of dietList) {

               await Diet.findOrCreate({
                    where: {name: elem}
               })
          }
        }          
     } 
         
    const allDiets = await Diet.findAll();
   
    return allDiets;
}

module.exports = { getDiet };
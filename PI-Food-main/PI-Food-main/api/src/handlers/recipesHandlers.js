const { getRecipeByID, getSearchByName } = require ("../controllers/recipesController");

const { getAllFoods } = require ("../controllers/infoController");

/*Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
La receta es recibida por parámetro (ID).
Tiene que incluir los datos de los tipos de dietas asociados a la receta.
Debe funcionar tanto para las recetas de la API como para las de la base de datos.*/

const getRecipeIdHandler = async (req,res) =>{
    const { id } = req.params;
    
    const sourse = isNaN(id) ? "bdd" : "api";
console.log("id", typeof(id));
    try {
        console.log(id,sourse);
        const recipeByid =  await getRecipeByID(id, sourse);
        res.status(200).json(recipeByid);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};

/*
Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
Debe poder buscarla independientemente de mayúsculas o minúsculas.
Si no existe la receta, debe mostrar un mensaje adecuado.
Debe buscar tanto las de la API como las de la base de datos.
*/

const getNameHandler = async (req,res) => {
    const { name } = req.query;
    const result = (name)? await getSearchByName(name) : await getAllFoods();
    
    try {
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    
};

module.exports = { getNameHandler, getRecipeIdHandler}
import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL ="GET_RECIPE_DETAIL";
export const GET_NAME_RECIPE ="GET_NAME_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const POST_CREATE_RECIPES = "POST_CREATE_RECIPES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_CREATED = "FILTER_CREATED";
export const GET_STATE_ID = "GET_STATE_ID";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const FILTER_BY_ORDER = "FILTER_BY_ORDER";
export const FILTER_BY_HEALTHSCORE = "FILTER_BY_HEALTHSCORE";

export const searchId = (payload) => {
    return {
        type: GET_STATE_ID,
        payload: payload
    }
}

export const getFilterByDiets = (payload) => {
    return {
        type: FILTER_BY_DIETS,
        payload: payload
    }
}

export const filterCreated= (payload) => {
    return {
      type: FILTER_CREATED,
     payload:payload}
 }

export const getFilterByOrder = (payload) => {
    return {
        type: FILTER_BY_ORDER,
        payload: payload
    }
}
export const orderByHealthScore = (payload) => {
    return {
        type: FILTER_BY_HEALTHSCORE,
        payload: payload
    }
}


export const getRecipes = () =>{
// return function(dispatch){
// // fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=4bbe1e3f28604659bcf36f3c4b81cb43&addRecipeInformation=true")
// // .then((response) => response.json)
// // .then((data) => dispatch({type: GET_RECIPES, payload:data}))

// }
return async function(dispatch){
    var json = await axios.get("http://localhost:3001/recipes");
    return dispatch({type: GET_RECIPES, payload: json.data})
}
};
//detail
export const getRecipeDetail = (id) => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
        const recipeId = apiData.data;
    return dispatch({type: GET_RECIPE_DETAIL, payload:recipeId})
    }

};

//name
export const getNameRecipe = (name) => {
    console.log(name);
return async function(dispatch){
    const apiDataName = await axios.get(`http://localhost:3001/recipes?name=${name}`);
    return({type: GET_NAME_RECIPE, payload: apiDataName.data})
}
};

export const searchBarName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload: payload
    }
}


//diets
export const getDiets=() => {
    return async function (dispatch) {
      var info = await axios("http://localhost:3001/diets")
      return dispatch({
          type: GET_DIETS,
          payload: info.data
        });
    };
  }

export const postRecipes = (payload) => {
    console.log(payload);
    return async function (dispatch){
        try {
            console.log(payload);
            const response = await axios.post("http://localhost:3001/recipes", payload);
            console.log(response);
        return  response;
    
        } catch (error) {
            console.log(error);
        }      
};
}

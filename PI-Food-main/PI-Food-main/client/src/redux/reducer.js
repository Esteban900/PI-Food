import { all } from "axios";
import { GET_RECIPES,FILTER_BY_NAME, GET_RECIPE_DETAIL, GET_NAME_RECIPE,  POST_CREATE_RECIPES, GET_DIETS, GET_STATE_ID,FILTER_BY_DIETS, FILTER_BY_ORDER, FILTER_BY_HEALTHSCORE,FILTER_CREATED} from "./actions";


const initialState = {
    recipes: [],
    recipeAll:[],
    recipeDetails:[],
    diets:[]
  
}


const rootReducer = (state= initialState, action) => {

    switch(action.type) {

        case GET_RECIPES:
            return {...state,
                 recipes:action.payload,
                recipeAll: action.payload
                }

        case POST_CREATE_RECIPES:
            return{...state,
                    }
                
        case GET_DIETS:
            return {
                 ...state,
                  diets: action.payload
                    }

        case GET_RECIPE_DETAIL:
            return {...state, recipeDetails: action.payload}

        case GET_NAME_RECIPE:
            const addRecipe = state.recipeAll;
            return {...state,
                 recipes: action.payload,
                 recipeAll: addRecipe
                }

        case FILTER_BY_NAME:
            const filtSearch = state.recipeAll;
            const filtOnState = filtSearch.filter((recipe) => {
                let name = recipe.name.toLowerCase();
                return name.includes(action.payload);
            })
            return {
                ...state,
                recipes: filtOnState
            }

            case FILTER_CREATED:
            const allRecipecreated = state.recipeAll;
            console.log("all", allRecipecreated);
            const createdFilter = action.payload === "Created" ? allRecipecreated.filter(el => el.createInBd===true) : allRecipecreated.filter(el => !el.createInBd===true);   
            return {
                ...state,
                recipes: action.payload ==="All" ? allRecipecreated : createdFilter
            }
        
        // case GET_STATE_ID:
        //             const filtId = state.recipeAll
        //             const Idfind = filtId.find((recipe) => {
        //                 if(typeof action.payload === "number") {
        //                     if(recipe.idApi === action.payload) return recipe
        //                 } else {
        //                     if(recipe.id === action.payload) return recipe
        //                 }
        //                 return null;
        //             })
        //             return {
        //                 ...state,
        //                 detail: Idfind
        //             }
        
        case FILTER_BY_HEALTHSCORE:
            let sortedRecipes;
            
            if(action.payload === "Ascending"){
                sortedRecipes = [...state.recipeAll].sort((a,b) => a.healthScore -b.healthScore );   
            } else {
                sortedRecipes= [...state.recipeAll].sort((a,b) => b.healthScore -a.healthScore ); 
            }
                     return{
                             ...state,
                             recipes: sortedRecipes
                         } 
          
        case FILTER_BY_ORDER:
           
            let recipesByOrder;
             if (action.payload === 'Ascending') {
                  recipesByOrder = [...state.recipeAll].sort((a, b) => {
               if (a.name > b.name) return 1;
               else return -1;
             });
                 } else {
               recipesByOrder = [...state.recipeAll].sort((a, b) => {
            if (a.name < b.name) return 1;
               else return -1;
             });
            }
             return {
             ...state,
              recipes: recipesByOrder
             };
    

       case FILTER_BY_DIETS:
        const recipes_All = state.recipeAll

            const filtByDiets = action.payload === 'Filter by type' ? 
            state.recipeAll : recipes_All.filter(recipe => {
                console.log(recipe.diets.length)
                if (recipe.diets.length > 0) {
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                }
                
                if ((action.payload === 'vegetarian') && (recipe.hasOwnProperty('vegetarian')) && (recipe.vegetarian === true)) return recipe;
                
                if ((action.payload === 'dairyFree') && (recipe.hasOwnProperty('dairyFree')) && (recipe.dairyFree === true)) return recipe;
                return null;
                })
            return{
                ...state,
                recipes: filtByDiets
            } 

        
        default:
            return {...state};

    }
};

export default rootReducer;
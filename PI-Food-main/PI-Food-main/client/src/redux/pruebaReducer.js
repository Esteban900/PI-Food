// case FILTER:
        //     const {diets,origin} = action.payload

        //     let recipeByDB = state.recipeAll.filter( recipe => typeof recipe.id === "string");
        //     let recipeByApi = state.recipeAll.filter ( recipe => typeof recipe.id ==="number");

        //     if(diets.length) {
        //         diets.forEach(diet => {
        //             recipeByDB = recipeByDB.filter ( rp => rp.diets.map (name => Object.values(name)[0]).includes(diet))
        //         });
        //         diets.forEach(diet => {
        //             recipeByApi = recipeByApi.filter( rp => rp.diets.includes(diet))
        //         })
        //     }
        //     switch(origin) {
        //         case "Created":
        //             return{...state, recipes:[...recipeByDB]}
        //         case "Not Created":
        //             return { ...state, recipes:[...recipeByApi]}
        //         default:
        //             return{
        //                 ...state,
        //                 recipes:[...recipeByApi]
        //             }
        //     }

        // case ORDER: 
        //     const {by, mode } = action.payload

        //     if(by==="HealthScore"){
        //         return{
        //             ...state,
        //             recipe: [...state.recipes.sort((a,b) =>{
        //                 switch(mode){
        //                     case "Ascending":
        //                     return a.healthScore-b.healthScore;
        //                     case "Descending":
        //                         return b.healthScore-a.healthScore;
        //                         default:
        //                             return 0;
        //                 }
        //             }) ]
        //         }
        //     } else if(by==="Alphabetically"){
        //         return{
        //             ...state,
        //             recipes:[...state.recipes].sort((a,b) =>{
        //                 if(mode === "Ascending"){
        //                     if(a.title < b.title) return -1;
        //                     if(a.title > b.title) return 1;
        //                     return 0;
        //                 }
        //                 if( mode === "Descending") {
        //                     if(a.title < b.title) return 1;
        //                     if( a.title > b.title) return -1;
        //                     return 0;
        //                 }
        //                 return 0;
        //             })
        //         }
        //     } else {
        //         return {
        //             ...state, recipes:[...state.recipeAll]
        //         }
        //     }
         

        // case ORDER_BY_ALPHABETICALLY:
        //     let byArr = action.payload ==="Ascending" ?
        //     state.recipes.sort((a,b) => {
        //         if(a.name > b.name) {
        //             return 1;
        //         }
        //         if( b.name > a.name) {
        //             return -1;
        //         }
        //         return 0;
        //     }) :
        //     state.recipes.sort((a,b)=> {
        //         if(a.name > b.name) {
        //             return -1;
        //         }
        //         if (b.name > a.name) {
        //             return 1;
        //         }
        //         return 0;
        //     })
        //     return {
        //         ...state, recipes: byArr
        //     }
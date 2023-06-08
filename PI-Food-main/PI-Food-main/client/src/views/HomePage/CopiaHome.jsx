// import CardsContainer from "../../components/CardsContainer/CardsContainer";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecipes, getDiets } from "../../redux/actions";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import FilterOptions from "../../components/FilterOption/FilterOption";

// const Home = () => {

//     const dispatch = useDispatch();
//     const recipeAll = useSelector((state) => state.recipeAll);
//     const dietsAll = useSelector((state) => state.diets)



//     useEffect(()=>{
//         dispatch(getRecipes());
//     },[dispatch])

//     useEffect(()=> {
//         dispatch(getDiets())
//     },[])
    
//    // const recipes = useSelector(state => state.recipes);

//     // const handlerFilterCreated = (e) => {
//     //     dispatch(filterCreated(e.target.value))
//     // }
//     return(
       
//         <div>
//            <body>
// <br></br>
// <br></br>
// <br></br>
//             <SearchBar/>
//         <FilterOptions dietsAll= {dietsAll}/>
//         <div>
          
//             <CardsContainer></CardsContainer>
//         </div>
//             </body>   
       
//         </div>
//     )
// };

// export default Home;


// setOrder={setOrder} setCurrentPage={setCurrentPage}
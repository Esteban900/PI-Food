import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterOptions from "../../components/FilterOption/FilterOption";
//import Pagination from "../../components/Paginado/Paginado";

const Home = () => {

    const dispatch = useDispatch();
    //const recipeAll = useSelector((state) => state.recipeAll);
    const dietsAll = useSelector((state) => state.diets)

    
    

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch])

    useEffect(()=> {
        dispatch(getDiets())
    },[dispatch])
    
   
    return(
       
        <div>
           
<br></br>
<br></br>
<br></br>
            <SearchBar/>
            
        <div>
        <FilterOptions dietsAll= {dietsAll}/>
       
         
            <CardsContainer></CardsContainer>
        </div>
             
       
        
           
        

        </div>
    )
};

export default Home;
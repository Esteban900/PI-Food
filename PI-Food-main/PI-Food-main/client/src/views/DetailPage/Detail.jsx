import React from "react";
import { useEffect } from "react";
import { getRecipeDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
//import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"




const Detail = () => {

   // const {id} = useParams();
const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
dispatch(getRecipeDetail(params.id));
    },[dispatch,params.id]);

const recipeDetails = useSelector(state => state.recipeDetails)
    return(
        <div className={style.Data}>
            <div>

            </div>
            <br></br>
            <br></br>
            <h2>{recipeDetails.id}</h2>
       <h1 className={style.Title}>{recipeDetails.name}</h1>
       
      
        <div>
       <h3 className={style.Title}> Summary: </h3>
       <p className={style.Summary}>{recipeDetails.summary}</p>
        </div>

        <div>
            <h3 className={style.Title}>Score: {recipeDetails.healthScore}</h3>
        </div>

        <div>
            <h3 className={style.Title}>Instructions: </h3>
            <ol>{Array.isArray(recipeDetails.steps) ? recipeDetails.steps.map(e=> {
                return(
                    <li className={style.Instruction}>{e.step}</li>
                )
            }) : <li>{recipeDetails.steps}</li> }</ol>
        </div>

        <div>
        <img src={recipeDetails.image} alt="Pic not found" className={style.image}/>
       </div>

       <div>
        <h2 className={style.TitleDiet}>Diets:</h2>
       
        <ul>{Array.isArray(recipeDetails.diets) ? recipeDetails.diets.map((diet,index)=> {
                return(
                    <li className={style.Diets} key={index}>{diet}</li>
                )
            }) : <li>{recipeDetails.diet}</li> }</ul>

       </div>

{/* <Link to="/home"><button>IR A HOME</button></Link> */}

        </div>
    )
};

export default Detail;
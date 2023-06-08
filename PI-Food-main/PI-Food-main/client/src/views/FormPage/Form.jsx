
import { React, useState, useEffect } from "react";
import { postRecipes, getDiets } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";

const validate = (input) => {
    let errors = {};
    if(!input.name) {
        errors.name = "se requiere name";
    } else if (!input.summary){
        errors.summary = "Se requiere summary"
    } else if (input.healthScore < 1 || input.healthScore > 100){
        errors.healthScore = "necesita un score entre 1 y100"
    } else if (!input.steps.length){
        errors.steps = "se requiere steps"
    }else if (!input.diets.length){
        errors.diets = "se requiere diets"
    }

    return errors;
}


const Form = () => {

    const dispatch= useDispatch();
    
    const diets = useSelector((state) => state.diets);
    //const allState = useSelector((state) => state.recipeAll)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
name: "",
summary: "",
healthScore: 0,
steps: "",
image: "https://www.curn.edu.co/images/ZARINA_2.jpg",
diets:[]
    });

    useEffect(() => {
        dispatch( getDiets())
    },[]);
    

const handlerChange= (e) => {
    setInput((previousInput)=>({
        ...previousInput,
        [e.target.name]: e.target.value
    }));
    setErrors((previousErrors)=>({
     ...previousErrors,
        [e.target.name]: ""
    
    }));
}   



const handlerSelect = (e) => {
    setInput((previousInput)=>({
        ...previousInput,
        diets: [...previousInput.diets, e.target.value]
    }))
}

const handlerSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(input);
    if(Object.keys(formErrors).length === 0) {
    dispatch(postRecipes(input))
    alert("Receta Creada!")
    setInput({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
        image:"",
        diets:[]
    });
} else {
    setErrors(formErrors);
}
}
//handler para eliminar los click, me setea el estado de todo lo que no clickie
const handlerDelete = (el) => {
setInput((previousInput) => ({
    ...previousInput,
    diets: previousInput.diets.filter(diets => diets !== el)
}))
}



    return(
       <div className={style.addRecipe}>
        <h1 className={style.msg}>Creat your own recipe!</h1>
        <form onSubmit={handlerSubmit}>
            <div className={style.nameInput}>
                <label className={style.msgs}>Name:</label>
                <input className={style.inputs} type="text" value={input.name} name="name" onChange={(e) => handlerChange(e)}/>
                {errors.name && (
                    <p className={style.errors}>{errors.name}</p>
                )}
            </div>
            <div className={style.nameInput}>
                <label className={style.msgs}>Summary:</label>
                <textarea type="text" value={input.summary} name="summary" onChange={(e) => handlerChange(e)}/>
                {errors.summary && (
                    <p className={style.errors}>{errors.summary}</p>
                )}
            </div>
            <div className={style.nameInput}>
                <label className={style.msgs}>HealthScore:</label>
                <input type="text" value={input.healthScore} name="healthScore" onChange={(e) => handlerChange(e)}/>
                {errors.healthScore && (
                    <p className={style.errors}>{errors.healthScore}</p>
                )}
            </div>
            <div className={style.nameInput}>
                <label className={style.msgs}>Steps:</label>
                <input type="text" value={input.steps} name="steps" onChange={(e) => handlerChange(e)}/> 
                {errors.steps && (
                    <p className={style.errors}>{errors.steps}</p>
                )}
            </div>
            <div className={style.nameInput}>
                <label className={style.msgs}>Image:</label>
                <input type="text" value={input.image} name="image" onChange={(e) => handlerChange(e)}/>
            </div>


            <div className={style.checkSelect}>   
                <label className={style.msgs}>Diet Types: </label> 
            <br></br>   
           <select onChange={(e) => handlerSelect(e)}>
            {diets.map((di) => {
              return ( 
              <option key={di.name} value={di.name}>{di.name}</option>)
            })}
            {errors.diets && (
                    <p className={style.errors}>{errors.diets}</p>
                )}
           </select>
           </div>
           <div className={style.divDiets}>
            <ul><li>{input.diets.join(", ")}</li></ul>  {/*agarro y renderizo cada cosa que marco en el select */}
           </div>
           <br></br>
           {input.diets.map( el => 
            <div className={style.divOcc}>
                <ul>{el}  <button className={style.buttonX} onClick={()=> handlerDelete(el)}>x</button></ul>
               
            </div>
            )}
           <button className={style.submitButton} type="submit">Crear Receta</button>
        </form>

       
       </div>

    )
};

export default Form;
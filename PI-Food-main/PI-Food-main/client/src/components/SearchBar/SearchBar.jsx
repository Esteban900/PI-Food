import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipe, searchBarName } from "../../redux/actions";
import style from "./SearchBar.module.css"


const SearchBar = () => {

    const dispatch = useDispatch();
const [name, setName] = useState("");
   
//guardo en mi estado local el input
const handlerInput = (event) => {
    event.preventDefault(); 
setName(event.target.value);
dispatch(searchBarName(event.target.value)) //guardo en mi estado local name,
}

//para el boton
const handlerSubmit= (event) => {
    event.preventDefault();
    dispatch(getNameRecipe(name)); //llamo a mi back y le paso el name que tengo guardado en mi estado local
    setName("");
}

return(
<div>
    <input type="text" 
    placeholder="Buscar..."
    onChange={(e) => handlerInput(e)}
     className={style.input} />
<button type="submit" className={style.searchButton}
 onClick={ ev => handlerSubmit(ev)}
>BUSCAR</button>
</div>
)
};

export default SearchBar;
import React, { useState, useEffect } from "react";
import { getFilterByDiets, getFilterByOrder, orderByHealthScore,filterCreated } from "../../redux/actions";
import { useDispatch } from "react-redux";




const FilterOptions = ({dietsAll}) => {


const dispatch=useDispatch();


const handlerFilterByDiets = (event) => {
    dispatch(getFilterByDiets(event.target.value))
    // setCurrentPage(1)
    // setOrder(`${event.target.value}`)

}


const handlerFilterByOrder =(event) => {
    event.preventDefault()
    dispatch(getFilterByOrder(event.target.value))
//     setCurrentPage(1)
//     setOrder(`${event.target.value}`)
 }

const handlerOrderByHealthScore = (event) => {
    event.preventDefault()
    dispatch(orderByHealthScore(event.target.value))
//     setCurrentPage(1)
//     setOrder(`${event.target.value}`)
 }

const handlerFilterById = (event) => {
    event.preventDefault()
    dispatch(filterCreated(event.target.value))

}


    return(
        <>
        <>
            <select defaultValue='Filter by Id' onChange={evt => handlerFilterById(evt)}>
            <option >Filter by Id</option>
                     <option key= 'All' value = 'All'>All Recipes</option>
                     <option key= 'Created' value = 'Created'>Recipes created in database</option>
                     <option key= 'apiId' value = 'apiId'>Api recipes</option>
            </select>  
        </>
       
       
        <>
            <select defaultValue='Filter by type' onChange={evt => handlerFilterByDiets(evt)}>
                
                <option>Filter by type</option>
                {dietsAll?.map((diet) => <option key={diet.name} value={diet.name}>{diet.name}</option>)}
            </select>  
        </>

        <>
        
            <select defaultValue='Filter by healthScore' onChange={evt => handlerOrderByHealthScore(evt)}>
                     <option >Filter by healthScore</option>
                     <option key= 'asc' value = 'Ascending'>Ascending</option>
                     <option key= 'des' value = 'Descending'>Descending</option>
            </select>
        </>
        <>
            <select defaultValue='Filter by Name' onChange={evt => handlerFilterByOrder(evt)}>
                <option >Filter by Name</option>
                <option key= 'asc' value = 'Ascending'>Ascending</option>
                <option key= 'des' value = 'Descending'>Descending</option>
            </select>
        </>
</>
    )
};

export default FilterOptions;
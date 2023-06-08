// import React, { useState, useEffect } from "react";
// import { getFilterByDiets, getFilterByOrder, orderByHealthScore } from "../../redux/actions";
// import { useDispatch } from "react-redux";
// import axios from "axios";



// const FilterOptions = () => {


// const dispatch=useDispatch();

// const [diets, setDiets] = useState([])

// const [show, setShow] = useState({
//     diets: false,
// })

// const [filters, setFilters] = useState({
//     diets: [],
//     origin:"Show All"
// })

// const [orders, setOrders] = useState ({
//     by:"Default",
//     mode: "None"
// })

// const showOptions= (e) => {
//     const id=e.target.id

//     if(show[id]===false && diets.length)  {
//         setShow({...show,[id]:true})
//     } else {
//         setShow({...show,[id]:false})
//     }
// }


// const handlerFilters = (e) => {
//     const {name, value, checked} = e.target;
//     switch(name){
//         case "diets":
//             checked?
//             setFilters({
//                 ...filters,
//                 diets:[...filters.diets, value]
//             }) :
//             setFilters({
//                 ...filters,
//                 diets:[...filters.diets.filter(diet => diet!==value)]
//             })
//             break;
//             case "origin":
//                 setFilters({
//                     ...filters, origin:value
//                 })
//                 break;
//                 default:
//                     setFilters({...filters})
//     }
// }

// const handlerOrder = (e) => {
//     const {name, value} = e.target;
//     setOrders({ ...orders, [name]:value})
// }


// //useEffects
// useEffect(()=>{
//     async function fetchDiets(){
//         const {data} = await axios.get("http://localhost:3001/diets");
//         let dietNames = data.map(diet => diet.name)
//         dietNames.pop()
//         setDiets(dietNames)
//     }
//     fetchDiets()
// },[])

// useEffect(()=> {
//     dispatch(filter(filters))
// },[dispatch,filters])

// useEffect(()=> {
//     dispatch(order(orders))
// },[dispatch,orders])



// // const handlerFilterCreated = (e) => {
// //     dispatch(filterCreated(e.target.value))
// // }

// // const handlerSort = (e) => {
// //     e.preventDefault();
// //     dispatch(orderByAlphabetically(e.target.value))
// //     setOrden(`Ordenado ${e.target.value}`)
// // }
//     return(
// <div>
// {/* filter */}
//     <div>

//     <h3> Filter</h3>
       
//         <div>
//                  <div> 
//                          <div>
//                              <label id="diets" onClick={(e)=>showOptions(e)}>By diets</label>
//                         </div>
         
//                         <div>
//                            <select name="origin" onChange={e => handlerFilters(e)}>
//                            <option value="Show all">Show all</option>
//                            <option value="Created">Created</option>
//                           <option value="Not Created">Not Created</option>
//                             </select>
//                         </div>
//                 </div>
//                 <div>
//                     {show.diets && diets.map((diet, i) => {
//                         return <div key={i}>
//                                     <input type="checkbox" name="diets" id={diet} value={diet} onChange={(e) => handlerFilters(e)}/>
//                                     <label for={diet}>{diet}</label>

//                                </div>
//                     })}
//                 </div>

//         </div>
//     </div>

// {/* order */}
// <br></br>
// <div>
//     <h3>Order BY</h3>
//          <div> 
//             <div>
//                 <select name="by" onChange={(e) => handlerOrder(e)}>
//                 <option value="By">By</option>
//                 <option value="HealthScore">HealthScore</option>
//                 <option value="Alphabetically">Alphabetically</option>
//                 </select>
//             </div>

//          </div>
//          <div> 
//             <div>
//                 <select name="mode" onChange={(e)=>handlerOrder(e)}>
//                 <option value="Mode">Mode</option>
//                 <option value="Ascending">Ascending</option>
//                 <option value="Descending">Descending</option>
//                 </select>
//             </div>

//          </div>

// </div>



// </div>
//     )
// };

// export default FilterOptions;
import React from "react";

export default function Pagination({recipesPage, recipeAll, Page}) {
    
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(recipeAll/recipesPage); i++) {
        pageNumbers.push(i)
        console.log(pageNumbers);
    }
      
     
    return(
        
        <div>
          
            <nav >
               
                <ul >
                    {pageNumbers?.map(number =>(
                        <button key={number}
                            onClick={() => Page(number)}>{number}
                        </button>
                    ))}
                </ul>
    
            </nav>
           

        </div>
    )
};


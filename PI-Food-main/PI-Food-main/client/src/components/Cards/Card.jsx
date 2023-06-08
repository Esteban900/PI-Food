import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css";


const Card = (props) => {
    
    return(
        <div key={props.id} className={style.Card} >
            <p className={style.title}> id: {props.id}</p>

            <Link to ={`/detail/${props.id}`} className={style.link}>
            <p className={style.title}>{props.name}</p>
            </Link>

            {/* <p>{props.healthScore}</p> */}

            <img src={props.image} alt= "img not found" className={style.cardImage}/>
            
            <p className={style.title}>{props.diets?.join(', ')}</p>
        </div>
    )
};

export default Card;
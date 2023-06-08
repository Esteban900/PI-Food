import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Landing.module.css";


const Landing = () => {
    const history = useHistory();
    return(
        <div className={styles.Landing}>
            <h1 className={styles.h1}>Henry Food</h1>
           <button className={styles.link} onClick={() => {history.push("/home")}}>INGRESAR</button>
        </div>
    )
}
export default Landing;
//import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./NavBar.module.css";
import { Link} from "react-router-dom";
const NavBar = () => {
return(
    <div className={style.mainContainer}>
        <Link to="/home" className={style.link}>Home</Link>
        <Link to="/create" className={style.link}>Form</Link>
    </div>
)
};

export default NavBar;
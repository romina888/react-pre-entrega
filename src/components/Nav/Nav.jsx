import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CardContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} = useCartContext();

    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/deporte"}>Deportes</Link>
                </li>
                <li>
                    <Link to={"/category/accion"}>Accion</Link>
                </li>
                <li>
                    <Link to={"/category/aventura"}>Aventura</Link>
                </li>
                <li>
                    <Link>Carrito</Link>
                    {getTotalItems()> 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    )
    
}
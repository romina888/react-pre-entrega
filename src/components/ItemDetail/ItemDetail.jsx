import { useCartContext } from "../../context/CardContext/useCartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext();
    return (
        <div className="product-detail">
            <Item {...detail}>
                <button onClick={() => {
                    addItem(detail);                
                }}>Agregar al carrito</button>
            </Item>
        </div>
    );
};
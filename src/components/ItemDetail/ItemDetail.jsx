import { useCartContext } from "../../context/CardContext/UseCartContext";
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
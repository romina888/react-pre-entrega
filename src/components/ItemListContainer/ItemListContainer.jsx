import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Hubo un problema al buscar producos");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            <h1>Ofertas de la Semana</h1>
            <ItemList list={products}/>
        </section>
    );
}
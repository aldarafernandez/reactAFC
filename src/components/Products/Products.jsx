import { NavLink } from "react-router-dom";
import "./Products.css";
import { useState, useEffect } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [zapatos, setZapatos] = useState(false);
    const [bolsos, setBolsos] = useState(false);
    const [joyas, setJoyas] = useState(false);
    const [relojes, setRelojes] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/all").
            then(response => response.json()).
            then(data => {
                setAllProducts(data);
            });
    }, []);

        useEffect(() => {
            let filteredProducts = allProducts.filter(product =>
                (zapatos && product.category === "ZAPATOS") ||
                (bolsos && product.category === "BOLSOS") ||
                (joyas && product.category === "JOYAS") ||
                (relojes && product.category === "RELOJES")
            );
            if(zapatos || bolsos || joyas || relojes){
                setProducts(filteredProducts);
            }else{
                setProducts(allProducts);
            }
        }, [zapatos, bolsos, joyas, relojes, allProducts]);
    

    return <main className="container mt-5 mb-5">
        <input type="checkbox" className="btn-check" id="zapatos" autocomplete="off" onChange={() => setZapatos(!zapatos)} />
        <label className="btn btn-outline-dark me-1" for="zapatos">Zapatos</label>

        <input type="checkbox" className="btn-check" id="bolsos" autocomplete="off" onChange={() => setBolsos(!bolsos)} />
        <label className="btn btn-outline-dark me-1" for="bolsos">Bolsos</label>

        <input type="checkbox" className="btn-check" id="joyas" autocomplete="off" onChange={() => setJoyas(!joyas)} />
        <label className="btn btn-outline-dark me-1" for="joyas">Joyas</label>

        <input type="checkbox" className="btn-check" id="relojes" autocomplete="off" onChange={() => setRelojes(!relojes)} />
        <label className="btn btn-outline-dark me-1" for="relojes">Relojes</label>

        <div className="mt-5 d-flex flex-wrap mb-5">{products.map(product =>
            <div className="col-4" key={product.id}>
                <div className="card">
                    <NavLink to={`/product/${product.id}`}>
                        <img src={product.image} className="card-img-top product-img" alt={product.name} />
                    </NavLink>
                    <div className="card-body d-flex justify-content-between">
                        <NavLink to={`/product/${product.id}`}>
                            <h2 className="card-title font-title-products">{product.name}</h2>
                        </NavLink>
                        <p className="card-text text-end pe-3">{product.price} €</p>
                    </div>
                </div>
            </div>)}
        </div></main>;

}

export default Products;
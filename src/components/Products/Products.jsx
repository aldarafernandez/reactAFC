import { NavLink } from "react-router-dom";
import "./Products.css";
import { useState, useEffect } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/all").
            then(response => response.json()).
            then(data => setProducts(data));
    })

    return <div className="container d-flex flex-wrap justify-content-center">{products.map(product =>
            <div className="card col-5">
                <NavLink to={`/product/${product.id}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                </NavLink>
                <div class="card-body d-flex justify-content-between">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text text-end pe-3">{product.price}</p>
                </div>
            </div>)}
        </div>;

}

export default Products;
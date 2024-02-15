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

    return <div className="container mt-5 d-flex flex-wrap mb-5">{products.map(product =>
        <div className="col-4 mb-5" key={product.id}>
            <div className="card">
                <NavLink to={`/product/${product.id}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                </NavLink>
                <div className="card-body d-flex justify-content-between">
                    <NavLink to={`/product/${product.id}`}>
                        <h5 className="card-title">{product.name}</h5>
                    </NavLink>
                    <p className="card-text text-end pe-3">{product.price}</p>
                </div>
            </div>
        </div>)}
    </div>;

}

export default Products;
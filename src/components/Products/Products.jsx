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

    return <div className="container"><div className="row"> {products.map( product => 
                <div className="col-6"><NavLink to={`/product/${product.id}`}><img src={ product.image } className="card-img-top" alt= {product.name} /></NavLink></div>)}</div></div>;

}

export default Products;
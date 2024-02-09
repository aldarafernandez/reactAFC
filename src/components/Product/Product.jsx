import { useParams } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";

const Product = () => {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/product/${id}`).
            then(response => response.json()).
            then(data => setProduct(data));
    }, [id])

    return <div className="d-flex justify-content-center mt-5"><div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={product.image} className="me-5" alt={product.name} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-end fs-1">{product.name}</h5>
                    <p className="card-text text-end mt-5">{product.description}</p>
                    <p className="card-text text-end mt-5"><small className="text-body-secondary border-bottom">{product.price}</small></p>
                </div>
            </div>
        </div>
    </div>
    </div>

}

export default Product;
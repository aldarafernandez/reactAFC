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

    return <div className="d-flex justify-content-center mt-5">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-12">
                    <img src={product.image} className="me-5 mb-5 imgDetail" alt={product.name} />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-12 mb-5">
                    <div className="card-body">
                        <h5 className="card-title text-start fs-1">{product.name}</h5>
                        <p className="card-text text-start">{product.description}</p>
                        <p className="card-text text-end"><small className="text-body-secondary border-bottom">{product.price}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Product;
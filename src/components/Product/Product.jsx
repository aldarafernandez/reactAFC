import { NavLink, useParams } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../Provider/authProvider";


const Product = () => {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    const { username, token } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:8080/api/product/${id}`).
            then(response => response.json()).
            then(data => setProduct(data));
    }, [id])

    const handleClick = (event) => {

        event.preventDefault();

        //fetch(`http://localhost:8080/api/user/${username}/add/${id}`, {
        //  headers: {
        //    "Authorization": `Bearer ${token}`,
        //   },
        //})

        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        const existProduct = cart.find(prod => prod.id === product.id);

        if (existProduct) {
            existProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));

    }

    
    const appendAlert = (message, type) => {
        const alert = document.getElementById('alert')
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '</div>'
        ].join('')

        alert.append(wrapper)

        setTimeout(() => {
            wrapper.remove();
        }, 1000);
    }

    useEffect(() => {
        const alertTrigger = document.getElementById('alertBtn')
        if (alertTrigger) {
            const listener = () => {
                appendAlert('Producto añadido al carrito.', 'success')
            }
            alertTrigger.addEventListener('click', listener)
    
            return () => {
                alertTrigger.removeEventListener('click', listener)
            }
        }
    }, [])

    return <div className="container mt-5">
        <div className="card mb-3 d-flex flex-row justify-content-start">
            <div className="g-0">
                <div className="col-md-12">
                    <img src={product.image} className="me-5 mb-5 imgDetail" alt={product.name} />
                </div>
            </div>
            <div className="g-0">
                <div className="col-md-12 mb-5">
                    <div className="card-body d-flex flex-column justify-content-between info">
                        <div>
                            <h2 className="card-title text-start fs-2 name">{product.name}</h2>
                            <p className="card-text text-start description mt-5 fs-6">{product.description}</p>
                        </div>
                        <div className="d-flex justify-content-end flex-column">
                            <p className="card-text text-end text-body-secondary">{product.price}€</p>
                            {token ?
                                <>
                                    <div id="alert"></div>
                                    <button type="button" className="btn btn-dark" id="alertBtn" onClick={handleClick}>Añadir al carrito</button>
                                </>
                                : <NavLink to="/login" className="text-white"><button type="button" className="btn btn-dark w-100">Añadir al carrito</button></NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Product;
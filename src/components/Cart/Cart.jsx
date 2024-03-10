import { useEffect, useState } from "react";
import { useAuth } from "../../Provider/authProvider";
import "./Cart.css";

const Cart = () => {

    const [userCart, setUserCart] = useState([]);

    const [total, setTotal] = useState();

    const [productRemove, setProductRemove] = useState();

    const totalProducts = () => {

        const total = userCart.reduce((sum, product) => sum + product.price * product.quantity, 0);
        setTotal(total.toFixed(2));

    }

    useEffect(() => {

        const cart = JSON.parse(sessionStorage.getItem("cart") || []);
        setUserCart(cart);

    }, []);

    useEffect( () => {

        totalProducts();

    }, [userCart])

    const increaseQuantity = (product) => {

        let updatedCart = userCart.map(item => item === product ? {...item, quantity: item.quantity + 1} : item);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
        setUserCart(updatedCart);

        totalProducts();
    }

    const decreaseQuantity = (product) => {

        let updatedCart = userCart.map(item => item === product ? {...item, quantity: item.quantity - 1} : item);
        updatedCart = updatedCart.filter(item => item.quantity > 0);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
        setUserCart(updatedCart)

        totalProducts();
    }

    const remove = (product) => {

        let updatedCart = userCart.filter(item => item !== product);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
        setUserCart(updatedCart);

        totalProducts();
    }


    if (userCart.length === 0) {
        return <p className="container text-center mt-5">No hay productos en el carrito</p>
    } else {
        return <>
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center mb-5">
                {userCart.map((product, index) => {
                    return <div key={index} className="card mb-3 cartProduct">
                        <div className="g-0 d-flex flex-row align-items-start ">
                            <div className="col-md-4">
                                <img src={product.image} className="img-fluid" alt={product.description} />
                            </div>
                            <div className="col-md-8 d-flex flex-row align-items-start justify-content-start">
                                <div className="card-body">
                                    <h3 className="card-title fs-5">{product.name}</h3>
                                    <p className="card-text">{product.price}€</p>
                                    <div className="d-flex flex-row align-items-center">
                                        <button type="button" onClick={() => decreaseQuantity(product)} className="btn">-</button>
                                        <div className="d-flex align-items-center">
                                            <p className="card-text"><small class="text-body-secondary">{product.quantity}</small></p>
                                        </div>
                                        <button type="button" onClick={() => increaseQuantity(product)} className="btn">+</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#modal" onClick={() => setProductRemove(product)} className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                <p className="total container mt-5 text-end mb-5">Total {total}€</p>
            </div>

            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title fs-5" id="modal">Aviso</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ¿Está seguro de que quiere eliminar el producto?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-dark" onClick={() => remove(productRemove)} data-bs-dismiss="modal">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    }
}

export default Cart;
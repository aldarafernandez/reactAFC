import { useEffect, useState } from "react";
import { useAuth } from "../../Provider/authProvider";
import "./Cart.css";

const Cart = () => {

    const { username, token } = useAuth();

    const [userCart, setUserCart] = useState([]);

    const [total, setTotal] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/api/${username}/cart`, {
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
            .then(response => response.json)
            .then(data => setUserCart(data.cart.cartProducts))
    }, []);

    if (userCart.length === 0) {
        return <p className="container text-center mt-5">No hay productos en el carrito</p>
    } else {
        return <>
            <div className="container mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCart.map(cartProduct => {
                            let nameProduct = cartProduct.product.name;
                            let cuantity = cartProduct.cuantity;
                            let totalProduct = cartProduct.product.price * cuantity;

                            setTotal(total + totalProduct);

                            return <tr>
                                <td>{nameProduct}</td>
                                <td>{cuantity}</td>
                                <td>{totalProduct}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
                <p className="text-end">Total {total}</p>
            </div>
        </>
    }
}

export default Cart;
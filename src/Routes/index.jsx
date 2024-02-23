import { createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/authProvider"
import Cart from "../components/Cart";
import Home from "../components/Home";
import Login from "../components/Login";
import Product from "../components/Product/Product";
import Products from "../components/Products";
import Register from "../components/Register";
import { RouterProvider } from "react-router";


const Routes = () => {

    const {token} = useAuth();

    const routesForPublic = [
        {
            path: "/",
            element: <Navigate to="/home" />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/products",
            element: <Products />,
        },
        {
            path: "/product/:id",
            element: <Product />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "*",
            element: <Navigate to="/home" />,
        },
    ];

    const routesForAuthenticatedOnly = [
        {
            path: "/cart",
            element: <Cart />,
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...Cart(token ? routesForAuthenticatedOnly : [])
    ]);

    return <RouterProvider router={router} />
}

export default Routes;
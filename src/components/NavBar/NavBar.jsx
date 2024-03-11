import { useAuth } from "../../Provider/authProvider";
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const { token, logout } = useAuth();


    return <nav className="navbar navbar-expand-lg d-flex flex-row border-bottom">
        <div className="container-fluid d-flex justify-content-between">
            <h1><NavLink to="/home">LuxuryBazaar</NavLink></h1>
            <ul className="d-flex align-items-center ">
                <li><NavLink to="/products">Products</NavLink></li>
                <li>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button className="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>
                </li>
                {!token ? (<>
                    <li><NavLink to="/register">Registrarse</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>)
                    : (<>
                        <li><NavLink to="/cart">Carrito</NavLink></li>
                        <li><NavLink to="/logout" onClick={logout}>Cerrar Sesión</NavLink></li>
                    </>)
                }
            </ul>
        </div>
    </nav>
}

export default NavBar;
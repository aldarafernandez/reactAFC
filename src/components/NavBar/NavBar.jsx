import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => <nav className="navbar navbar-expand-lg d-flex flex-row">

    <div className="container-fluid d-flex justify-content-end">
        <ul className="d-flex align-items-center ">
        <li><NavLink to={"/products"}>Products</NavLink></li>
            <li>
                <form class="d-flex" role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </li>
            <li><NavLink to={"/register"}>Registrarse</NavLink></li>
            <li><NavLink to={"/cart"}>Carrito</NavLink></li>
        </ul>
    </div>

</nav>

export default NavBar;
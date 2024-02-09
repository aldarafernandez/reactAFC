import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => <nav className="navbar navbar-expand-lg d-flex flex-row">

    <div className="container-fluid d-flex justify-content-between">
        <h1><NavLink to={"/home"}>Home</NavLink></h1>
        <ul className="d-flex align-items-center ">
            <li><NavLink to={"/products"}>Products</NavLink></li>
            <li>
                <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </li>
            <li><NavLink to={"/register"}>Registrarse</NavLink></li>
        </ul>
    </div>

</nav>

export default NavBar;
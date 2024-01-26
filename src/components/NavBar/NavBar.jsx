import "./NavBar.css";

const NavBar = () => <nav className="navbar navbar-expand-lg d-flex flex-row">

    <div className="container-fluid d-flex justify-content-end">
        <ul className="d-flex align-items-center ">
            <li className="nav-item">Productos</li>
            <li>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </li>
            <li>Iniciar sesión</li>
            <li>Carrito</li>
        </ul>
    </div>

</nav>

export default NavBar;
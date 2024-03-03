import { useAuth } from "../../Provider/authProvider";
import "./Login.css";
import { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';


const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { login } = useAuth();

    const handleSubmit = (event) => {

        event.preventDefault();
        login(username, password);
        if (localStorage.getItem("token")) {
            <Navigate to={"/home"} />
        }
    }

    return <form className="container d-flex flex-column justify-content-center align-items-center mb-5 login" onSubmit={handleSubmit}>
        <h2 className="align-self-start mb-5">Login</h2>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" value={username} className="form-control" placeholder="Nombre de ususario" aria-label="Username"
                onChange={
                    (e) => setUsername(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="password" value={password} className="form-control" placeholder="Contraseña" aria-label="Sizing example input"
                onChange={
                    (e) => setPassword(e.target.value)
                } />
        </div>

        <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-outline-dark me-2 registerbtn"><NavLink to="/register">Registrarse</NavLink></button>
            <button class="btn btn-dark submitbtn" type="submit">Enviar</button>
        </div>

    </form>
}

export default Login;
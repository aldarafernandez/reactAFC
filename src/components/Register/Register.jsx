import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/authProvider";
import "./Register.css";
import { useState } from 'react';

const Register = () => {

    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const { register, login } = useAuth();

    const handleSubmit = (event) => {

        event.preventDefault();
        register(username, name, surname, email, password);
        login(username, password);
        navigate("/home");
    }

    return <form className="container d-flex flex-column justify-content-center align-items-center register mt-5 mb-5" onSubmit={handleSubmit}>
        <h2 className="align-self-start mb-5">Registro</h2>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" name="username" placeholder="Nombre de ususario" aria-label="Username"
                onChange={
                    (e) => setUsername(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="text" aria-label="First name" placeholder="Nombre" className="form-control" name="name"
                onChange={
                    (e) => setName(e.target.value)
                }
            />
            <input type="text" aria-label="Last name" placeholder="Apellidos" className="form-control" name="surname"
                onChange={
                    (e) => setSurname(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="email" className="form-control" placeholder="Email" aria-label="Sizing example input" name="email"
                onChange={
                    (e) => setEmail(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="password" className="form-control" placeholder="Contraseña" aria-label="Sizing example input" name="password"
                onChange={
                    (e) => setPassword(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="password" className="form-control" placeholder="Repetir Contraseña" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-dark" type="submit">Enviar</button>
        </div>

    </form>
}

export default Register;
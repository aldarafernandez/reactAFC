import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/authProvider";
import "./Register.css";
import { useEffect, useState } from 'react';

const Register = () => {

    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordError, setPasswordError] = useState(false);
    const [birthDate, setBirthDate] = useState();
    const [birthDateError, setBirthDateError] = useState(false);

    const navigate = useNavigate();

    const { register } = useAuth();

    const checkAge = (birthDate) => {

        const today = new Date();
        const date = new Date(birthDate);

        const age = today.getFullYear() - date.getFullYear();

        if (age < 18) {
            
            setBirthDateError(true);
            return true;

        }else{

            setBirthDateError(false);
            return false;

        }

    }

    useEffect(() => {

        checkAge(birthDate);
        
    }, [birthDate]);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (password !== confirmPassword) {

            setPasswordError(true);
            return;
        }

        if (checkAge(birthDate)) {
            
            return;
        }

        await register(username, name, surname, email, password);
        navigate("/home");
    }

    return <form className="container d-flex flex-column justify-content-center align-items-center register mt-5 mb-5" onSubmit={handleSubmit}>

        <h2 className="align-self-start mb-5">Registro</h2>

        <div className="input-group mb-4">
            <span className="input-group-text">@</span>
            <input type="text" required className="form-control" name="username" placeholder="Nombre de ususario" aria-label="Nombre de usuario"
                onChange={
                    (e) => setUsername(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4 row">
            <input type="text" required aria-label="First name" placeholder="Nombre" className="col" name="name"
                onChange={
                    (e) => setName(e.target.value)
                }
            />
            <input type="text" required aria-label="Last name" placeholder="Apellidos" className="col" name="surname"
                onChange={
                    (e) => setSurname(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4 d-flex align-items-center">
            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input type="date" required className={`form-control ms-1 ${birthDateError ? "is-invalid" : ""}`} placeholder="Fecha de nacimiento" aria-label="Fecha de nacimiento" name="birthDate"
                onChange={
                    (e) => {
                        setBirthDate(e.target.value);
                        if (!checkAge(e.target.value)) {
                            setBirthDateError(true);
                        } else {
                            setBirthDateError(false);
                        }
                    }
                }
            />
        </div>

        {birthDateError && <div className="text-danger">Debes tener más de 18 años para registrarte.</div>}

        <div className="input-group mb-4">
            <input type="email" required className="form-control" placeholder="Email" aria-label="Email" name="email"
                onChange={
                    (e) => setEmail(e.target.value)
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="password" required className={`form-control ${passwordError ? "is-invalid" : ""}`} placeholder="Contraseña" aria-label="Contraseña" name="password"
                onChange={
                    (e) => {
                        setPassword(e.target.value)
                        if (e.target.value !== confirmPassword) {
                            setPasswordError(true);
                        } else {
                            setPasswordError(false);
                        }
                    }
                }
            />
        </div>

        <div className="input-group mb-4">
            <input type="password" required className={`form-control ${passwordError ? "is-invalid" : ""}`} placeholder="Repetir Contraseña" aria-label="Repetir contraseña"
                onChange={
                    (e) => {
                        setConfirmPassword(e.target.value)
                        if (e.target.value !== password) {
                            setcPasswordError(true);
                        } else {
                            setPasswordError(false);
                        }
                    }
                }
            />
        </div>

        {passwordError && <div className="text-danger">Las contraseñas deben coincidir.</div>}

        <div class="col-12 d-flex justify-content-end">
            <button className="btn btn-dark" type="submit">Enviar</button>
        </div>

    </form>
}

export default Register;
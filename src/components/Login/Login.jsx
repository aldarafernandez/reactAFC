import "./Login.css";

const Login = () => {

    return <form className="container d-flex flex-column justify-content-center align-items-center mb-5 login">
        <h2 className="align-self-start mb-5">Login</h2>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Nombre de ususario" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-4">
            <input type="password" className="form-control" placeholder="Contraseña" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-outline-dark me-2 registerbtn" type="submit">Registrarse</button>
            <button class="btn btn-dark submitbtn" type="submit">Enviar</button>   
        </div>

    </form>
}

export default Login;
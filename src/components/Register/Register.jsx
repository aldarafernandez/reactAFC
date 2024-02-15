import "./Register.css";

const Register = () => {

    return <form className="container d-flex flex-column justify-content-center align-items-center register mt-5 mb-5">
        <h2 className="align-self-start mb-5">Registro</h2>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Nombre de ususario" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-4">
            <span className="input-group-text">Nombre</span>
            <input type="text" aria-label="First name" placeholder="Nombre" className="form-control" />
            <input type="text" aria-label="Last name" placeholder="Apellidos" className="form-control" />
        </div>

        <div className="input-group mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
            <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div className="input-group mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Contraseña</span>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div className="input-group mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Repetir contraseña</span>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-dark" type="submit">Enviar</button>
        </div>

    </form>
}

export default Register;
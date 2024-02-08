import "./Register.css";

const Register = () => {

    return <form className="container">

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" className="form-control" />
            <input type="text" aria-label="Last name" className="form-control" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
            <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Contraseña</span>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Repetir contraseña</span>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>


    </form>
}

export default Register;
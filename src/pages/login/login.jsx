import "./login.css"
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";

function Login() {
    return <div className="row">

        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
            <form className="form-login">
                <img src={logo} className="logo mb-4"/>
                <h5 className="mb-5">Gerencie seus agendamentos de forma simples.</h5>
                <h5 className="mb-4 text-secondary">Acesse sua conta</h5>

                <div className="mt-4">
                    <input type="email" placeholder="E-mail" className="form-control"/>
                </div>

                <div className="mt-2">
                    <input type="password" placeholder="Senha" className="form-control"/>
                </div>

                <div className="mt-3 mb-5">
                    <button className="btn btn-success w-100">Entrar</button>
                </div>

                <div>
                    <span className="me-1">Não tenho uma conta.</span>
                    <a href="#">Criar agora</a>
                </div>

            </form>
        </div>

        <div className="col-sm-7 d-flex">
            <img src={fundo} className="background-login"/>
        </div>

    </div>
}


export default Login
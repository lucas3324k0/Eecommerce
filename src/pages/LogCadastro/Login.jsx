import { Link } from "react-router-dom";
import logo from "../../assets/logo/image.png";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [cadastro, setCadastro] = useState(false);

  return (
    <div className="containerLogin">
      <form onSubmit={"s"}>
        {cadastro === true ? (
          <>
            <div className="Logo-div">
              <img src={logo} style={{ width: "100px" }} />
            </div>
            <label>
              <input type="text" placeholder="Nome" />
            </label>

            <label title="">
              <input type="text" placeholder="Email" />
            </label>

            <label>
              <input type="text" placeholder="Senha" />
            </label>

            <label>
              <input type="text" placeholder="Digite sua senha novamente" />
            </label>
          </>
        ) : (
          <>
            {" "}
            <div className="Logo-div">
              <img src={logo} style={{ width: "100px" }} />
            </div>
            <label title="">
              <input type="text" placeholder="Email" />
            </label>
            <label>
              <input type="text" placeholder="Senha" />
            </label>
            <div className="cadastro">
              <Link className="ModificarSenha">Esqueceu a senha?</Link>
            </div>
          </>
        )}
        <div className="SubmitBtn">
          {!cadastro ? (
            <>
              <input className="login" type="submit" value={"Entrar"} />
              <input
                className="cadastrar"
                type="submit"
                onClick={() => setCadastro(true)}
                value={"Cadastrar"}
              />
            </>
          ) : (
            <input
              className="cadastrarUser"
              type="submit"
              onClick={() => setCadastro(true)}
              value={"Cadastrar"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

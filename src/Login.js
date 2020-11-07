import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="login__logo">
          <img
            src="https://s2.logaster.com/static/v3/img/products/logo.png"
            alt=""
          />
        </span>
      </Link>

      <div className="login__container">
        <h1>Войти как</h1>

        <form>
          <h4>
            E-mail
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </h4>

          <h4>
            Password
            <input
              type="passwod"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </h4>

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          Something that you can suggest here <Link to="/">Back</Link>
        </p>

        <button onClick={register} className="login__registerButton">
          Create profile
        </button>
      </div>
    </div>
  );
}

export default Login;

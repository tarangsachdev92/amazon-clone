import { auth } from './firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pmcvariety.files.wordpress.com/2018/01/amazon-logo.jpg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_SignInButton" onClick={singIn}>
            Sign In
          </button>
        </form>
        <p>
          By singing-in you agree to amazon's condition of use & sale.Please See
          our Privacy Policy notice, our Cookies Notice and our Intrest-Based
          Ads Notice
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

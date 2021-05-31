import React, { useState, useContext } from "react";
import AuthService from "../../services/auth";
import { Redirect } from "react-router-dom";
import { setUserSession } from "../../helpers/util";
import { store } from '../../store/store';

const Login = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const loginUser = (e) => {
    // Prevent browser from refreshing
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    AuthService.login(user).then(response => {
      // assign global context
      dispatch({type : 'LOGIN_USER', payload : {isAuthenticated : true}})

      // save token in session
      setUserSession(response.data);

      // redirect to home page
      setRedirect(true );

    }).catch(e => { console.log(e) });
  }

  // Redirect to home page
  if (redirect) {
    return (<Redirect to={"/"} />);
  } else {
    return (
      <section className="text-center login">
        <main className="form-signin">
          <form onSubmit={loginUser}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={onChangeEmail}
              />
              {/*<label htmlFor="floatingInput">Email address</label>*/}
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
              {/*<label htmlFor="floatingPassword">Password</label>*/}
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
      </section>
    );
  }
}

export default Login;
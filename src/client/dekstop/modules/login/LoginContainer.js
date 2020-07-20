import React, { useState } from "react";
import styles from "../login/LoginContainer.module.css";
import axios from "axios";
import PropTypes from "prop-types";

const LoginContainer = (props) => {
  const [username, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const handleLogin = (evt) => {
    evt.preventDefault();
    const body = { username: username, password: userPassword };

    axios
      .post("http://localhost:5000/auth/", body)
      .then((res) => {
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <div></div>
        <h1>Login</h1>
        <p>Please fill in this form to sing in to your account.</p>
        <div class="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label> */}
        </div>

        <div className="container">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
        <div className="container-signup">
          <p>
            "You don't have an account? <a href="/register">Sign up</a>.
          </p>
        </div>
      </form>
      spoko 6te se opravq posle css-a
    </div>
  );
};

LoginContainer.propTypes = {};

export default LoginContainer;

import React, { useState } from "react";
import styles from "../login/LoginContainer.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className={styles.background}>
      <form className={styles.form}>
        <div></div>
        <h1>Login</h1>
        <p>Please fill in this form to sing in to your account.</p>
        <div className="container">
          <div className={styles.inputHolder}>
            <label>Username</label>
            <input
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>
          <div className={styles.inputHolder}>
            <label>Password</label>
            <input
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>

          <button className={styles.button} type="submit" onClick={handleLogin}>
            Login
          </button>
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label> */}
        </div>

        <div className="container">
          <span className="psw">
            Forgot <Link to={"#"}>password?</Link>
          </span>
        </div>
        <div className="container-signup">
          <p>
            "You don't have an account? <Link to={"/register"}>Sign up</Link>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;

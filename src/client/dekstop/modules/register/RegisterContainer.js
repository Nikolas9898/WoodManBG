import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./RegisterContainer.module.css";
import UserProfile from "../../layout/header/components/components/UserProfile/UserProfile";

const RegisterContainer = (props) => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = {
      username: username,
      email: userEmail,
      password: userPassword,
      isAdmin: false,
    };
    axios
      .post("http://localhost:5000/user/register", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  return (
    <div className={styles.background}>
      <form className={styles.form}>
        <div>
          <h1>Register</h1>

          <div className={styles.inputHolder}>
            <label>Username</label>
            <input
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="enter thy username"
              name="username"
              required
            />
          </div>
          <div className={styles.inputHolder}>
            <label>Email</label>
            <input
              className={styles.input}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              placeholder="enter thy email"
              name="email"
              required
            />
          </div>
          <div className={styles.inputHolder}>
            <label>Password</label>
            <input
              className={styles.input}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="text"
              placeholder="enter thy password"
              name="password"
              required
            />
          </div>
          <div className={styles.inputHolder}>
            <label>Repeat Password</label>
            <input
              className={styles.input}
              type="text"
              placeholder="enter thy password again"
              name="rePassword"
              required
            />
          </div>
          {/* <p>
            Thou Actions Imply Thou Acceptance Of Ourth Terms And Services{" "}
            <a href="#">Terms & Privacy</a>.
          </p> */}
          <button onClick={handleSubmit} className={styles.button}>
            Register
          </button>
          <div className="container-signin">
            <p>
              Already have an account? <Link to={"/login"}>signin</Link>.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

RegisterContainer.propTypes = {};

export default RegisterContainer;

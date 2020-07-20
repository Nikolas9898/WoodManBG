import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./RegisterContainer.module.css";
import UserProfile from "../../layout/header/components/components/UserProfile/UserProfile";

const RegisterContainer = (props) => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = { username: username, password: userPassword, isAdmin: false };
    axios.post("http://localhost:5000/user/register", body);
  };

  return (
    <div>
      <form className={styles}>
        <div>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <label>
            <b>Username</b>
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="enter thy username"
            name="username"
            id="username"
            required
          />

          <label>
            <b>password</b>
          </label>
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="text"
            placeholder="enter thy password"
            name="password"
            id="password"
            required
          />

          <label>
            <b>re-password</b>
          </label>
          <input
            type="text"
            placeholder="enter thy password again"
            name="rePassword"
            id="rePassword"
            required
          />

          <p>
            Thou Actions Imply Thou Acceptance Of Ourth Terms And Services{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button onClick={handleSubmit} class="registerbtn">
            Register
          </button>
          <div className="container-signin">
            <p>
              Already have an account? <Link to={"/login"}>signin</Link>.
            </p>
          </div>
        </div>
      </form>
      spoko 6te se opravq posle css-a
    </div>
  );
};

RegisterContainer.propTypes = {};

export default RegisterContainer;

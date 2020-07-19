import React, { useState } from "react";
import styles from "../register/RegisterContainer.module.css";
import axios from "axios";
import UserProfile from "../../layout/header/components/components/UserProfile/UserProfile";

const RegisterContainer = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassWord] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = { username: userName, password: userPassWord, isAdmin: false };
    axios.post("http://localhost:5000/user/register", body);
  };

  return (
    <div>
      <form>
        <div className={styles}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <label>
            <b>email</b>
          </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="enter thy email"
            name="email"
            id="email"
            required
          />

          <label>
            <b>password</b>
          </label>
          <input
            value={userPassWord}
            onChange={(e) => setUserPassWord(e.target.value)}
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
            Thou Actions Imply Thou Aceeptance Of Ourth Terms And Services{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button onClick={handleSubmit} class="registerbtn">
            Register
          </button>
        </div>
        <div class="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

RegisterContainer.propTypes = {};

export default RegisterContainer;

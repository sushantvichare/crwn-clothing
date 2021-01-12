import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userData, setData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({ ...userData, [name]: value });
  };

  return (
   
      <div className="sign-up">
        <h2 className="title">New to CRWN,create account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="button" onClick={handleSubmit}>
            SIGN UP
          </CustomButton>
        </form>
      </div>
   
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

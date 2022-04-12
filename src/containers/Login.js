import React from "react";
import DynamicForms from "../components/dynamicFormsSection/DynamicForms";
import Logo from "../assets/images/logo.png";

function Login() {
  const loginForm = {
    msgType: "login",
    formArea: {
      buttonName: "Login",
      formStructure: {
        userName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Enter User Name",
            autoComplete: "off",
            label: 'userName',
            pattern: "^([a-zA-Z0-9]+[_-])*[a-zA-Z0-9]+.[a-zA-Z0-9]+$",
          },
          value: "",
          valid: true,
          touched: false,
          validation: {
            required: true,
          },
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Enter Password",
            autoComplete: "off",
            label: 'password',
          },
          value: "",
          valid: true,
          touched: false,
          validation: {
            required: true,
          },
        },
      },
      formValid: false,
    },
  };

  return (
    <div className="Main-wrapper LoginBox">
      <img
        src={Logo}
        alt="LOGO"
        style={{ width: "20%" }}
        className="MainLogo"
      />
      <div className="col-lg-12 mainContentSection">
        <h2 className="page-header">cATF</h2>
        <DynamicForms {...loginForm} />
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import login from "../../assets/Images/login.svg";
import brand from "../../assets/Images/brand.png";

import { CgLogIn } from "react-icons/cg";

import { Formik, Form, Field } from "formik";

const Login = () => {
  const navigate = useNavigate();

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[0-9a-zA-Z]{0,10}$/i.test(value)) {
      error = "Invalid password";
    }
    return error;
};

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card border-dark h-100">
              <div className="card-body">
                <h3 className="text-dark">Login</h3>
                <hr
                  style={{
                    color: "#000",
                    borderTop: "2px solid",
                    opacity: "1",
                }}
                />
                <h5 className="card-title text-center mt-5">
                  Welcome to
                  <img
                    src={brand}
                    width={150}
                    alt="brand"
                    className="img-fluid"
                    />
                </h5>
                <p className="text-center text-muted mt-3 mb-5">
                  Enter your credentials and start journey with us.
                </p>
                <Formik
                  initialValues={{
                      email: "",
                      password: "",
                    }}
                    onSubmit={(values) => {
                        // same shape as initial values
                    console.log(values);
                    //     let error;
                    //     if (!value) {
                    //       error = "Required";
                    //     } else if (!/^[0-9a-zA-Z]{0,10}$/i.test(value)) {
                    //       error = "Invalid password";
                    //     }
                    //     return error;
                  }}
                >
                  {({ errors, touched, isValidating }) => (
                    <Form>
                      <div className="mb-4">
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                        {/* <div
                          id="emailHelp"
                          className="form-text text-dark fw-bold"
                        >
                          We'll never share your email with anyone else.
                        </div> */}
                      </div>
                      <div className="mb-3">
                        <Field                 
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          validate={validatePassword}
                        />
                      {errors.password && touched.password && <div>{errors.password}</div>}
                      </div>
                      <p
                        onClick={() => navigate("/resetPassword")}
                        id="forgetPassword"
                        className={`${styles.forgotPassword} text-end text-dark mb-3 fw-bold`}
                        style={{ cursor: "pointer" }}
                      >
                        Forgot Password ?
                      </p>
                      <div className="mb-5 col-3 d-grid mx-auto">
                        <button type="submit" className="btn btn-dark">
                          <CgLogIn className="me-1" />
                          Login
                        </button>
                      </div>
                      <p className="text-center">
                        New User ?{" "}
                        <span
                          onClick={() => navigate("/register")}
                          className="ms-1 text-dark fw-bold text-decoration-underline"
                          style={{ cursor: "pointer" }}
                        >
                          Create Account
                        </span>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className={`${styles.right} col-md-6 m-auto`}>
            <img
              className={`${styles.img} img-fluid mt-4`}
              src={login}
              alt="login"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

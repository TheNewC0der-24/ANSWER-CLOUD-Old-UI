import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import { Formik, Form, Field } from "formik";

const Forms = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [accessCode, setAccessCode] = useState([]);
  // const [access, setAccess] = useState(0);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    accesscode: "",
  };

  const validateName = (value) => {
    setName(value)
    let error;
    if (!value) {
      error = "*This field is Required";
    }
    return error;
  };

  const validateEmail = (value) => {
    setEmail(value)
    let error;
    if (!value) {
      error = "*This field is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "*Invalid email address";
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = "*This field is Required";
    } else if (!/^[0-9]{10}$/i.test(value)) {
      error = "*Invalid Number";
    }
    return error;
  };

  const validateAccessCode = (value) => {
    setAccessCode(value)
    let error;
    // if (!value) {
    //   error = "*This field is Required";
    // }
    {
      add.slice(0, 1).map((item) => (
        <>
          {!(`${item.createdby}` == value) && (
            error = "*Access Code doesn't match."
          )}
        </>
      ))
    }
    return error;
  };

  useEffect(() => {
    axios.get("response.json").then((res) => {
      // console.log(res.data.results);
      // setData(res.data.results);
      setAdd(res.data.results);
    });
  });
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(1);
  // const [displays, setDisplays] = useState({ display: "none" });
  // const [opacity, setOpacity] = useState({ opacity: '1' })

  // var timer;

  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setSeconds(seconds - 1);

  //     if (seconds === 0) {
  //       setMinutes(minutes - 1);
  //       setSeconds(59);
  //     }

  //     if (seconds === 0 && minutes === 0) {
  //       setMinutes(0);
  //       setSeconds(0);
  //       setDisplays({
  //         display: "block",
  //         position: "absolute",
  //         top: "40%",
  //         left: "30%",
  //         right: '30%',
  //         zIndex: '1',
  //       });
  //       setOpacity({
  //         opacity: '0.3'
  //       })
  //       setInterval(() => {
  //         navigate('/');
  //       }, 2000);
  //     }
  //   }, 1000);
  //   return () => clearInterval(timer);
  // });

  const handleSubmit = () => {
    // e.preventDefault();
    console.log('ayush');
    setDisplay(!display);
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('AccessCode', accessCode);
  };

  const handleStartTest = (e) => {
    e.preventDefault();
    navigate('/welcome');
  };

  return (
    <>
      <style jsx="true">
        {`
          .button {
            border-radius: 0;
          }
        `}
      </style>
      {add.slice(0, 1).map((item) => (
        <>
          {`${item.createdby}` < 3 ? (
            ""
          ) : (
            <div className="alert alert-danger" role="alert">
              Interaction Form is restricted
            </div>
          )}
        </>
      ))}
      <div className="container">
        <div className="d-grid col-md-8 mx-auto my-5">
          <div className="card h-100 border-dark">
            <div
              className="card-header bg-dark text-white"
              style={{ borderBottom: "2px solid #000", borderRadius: "0" }}
            >
              <h3 className="text-center">Interaction Title</h3>
            </div>
            <div className="card-body">
              <label className="form-label fw-bold">Description :</label>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                explicabo modi nemo ab inventore minus in quidem nobis illo.
                Quos?
              </p>
              <hr />
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="mb-3">
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 3 ? (
                            <Field
                              type="text"
                              className={`form-control ${errors.name && touched.name
                                ? "border-danger"
                                : ""
                                }`}
                              id="name"
                              name="name"
                              value={name}
                              // onChange={(e)=> setName(e.target.value)}
                              placeholder="What is your name ?"
                              validate={validateName}
                            />
                          ) : (
                            <Field
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="What is your name ?"
                              disabled
                            />
                          )}
                        </>
                      ))}
                      {errors.name && touched.name && (
                        <div className="form-text text-danger">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 3 ? (
                            <Field
                              type="email"
                              className={`form-control ${errors.email && touched.email
                                ? "border-danger"
                                : ""
                                }`}
                              id="email"
                              name="email"
                              value={email}
                              // onChange={(e)=> setEmail(e.target.value)}
                              placeholder="What is your email ?"
                              validate={validateEmail}
                            />) : (
                            <Field
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="What is your email ?"
                              disabled
                            />
                          )}
                        </>
                      ))}
                      {errors.email && touched.email && (
                        <div className="form-text text-danger">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 3 ? (
                            <Field
                              type="number"
                              className={`form-control ${errors.phone && touched.phone
                                ? "border-danger"
                                : ""
                                }`}
                              id="contactNumber"
                              name="phone"
                              placeholder="Enter Phone Number"
                              validate={validatePhone}
                            />) : (
                            <Field
                              type="number"
                              className="form-control"
                              id="contactNumber"
                              placeholder="Enter Phone Number"
                              disabled
                            />
                          )}
                        </>
                      ))}
                      {errors.phone && touched.phone && (
                        <div className="form-text text-danger">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 3 ? (
                            <Field
                              type="number"
                              className={`form-control ${errors.accesscode && touched.accesscode
                                ? "border-danger"
                                : ""
                                }`}
                              id="accessCode"
                              name="accesscode"
                              value={accessCode}
                              // onChange={(e)=> setAccessCode(e.target.value)}
                              placeholder="Please enter your access code"
                              validate={validateAccessCode}
                            />) : (
                            <Field
                              type="number"
                              className="form-control"
                              id="accessCode"
                              placeholder="Please enter your access code"
                              disabled
                            />
                          )}
                        </>
                      ))}
                      {errors.accesscode && touched.accesscode && (
                        <div className="form-text text-danger">
                          {errors.accesscode}
                        </div>
                      )}
                    </div>
                    {add.slice(0, 1).map((item) => (
                      <>
                        {`${item.createdby}` < 3 ? (
                          <button
                            // onSubmit={onSubmit}
                            type="submit"
                            className="btn btn-dark button mb-2"
                          >
                            Validate To Start
                          </button>) : (
                          <button
                            // onClick={handleDisplay}
                            className="btn btn-dark button mb-2"
                            disabled
                          >
                            Validate To Start
                          </button>
                        )}
                      </>
                    ))}
                    <hr style={{ color: "#000", borderTop: "2px solid", opacity: "1" }} />
                    <div className={`${display ? "" : "d-none"}`}>
                      <ul className="list-group">
                        <h5 className="list-group-item bg-dark text-white fw-bold" aria-current="true">System Instructions :</h5>
                        <li className="list-group-item">Please make sure you are in the center of the camera.</li>
                        <li className="list-group-item">Make sure you have good lighting.</li>
                        <li className="list-group-item">Use Professional dress when recording.</li>
                        <li className="list-group-item">Avoid glaze and light directly to the recording camera.</li>
                        <li className="list-group-item">Not ready for video yet? Toggle video off to record responses as audio.</li>
                        <li className="list-group-item">You will have a preview of the video before you finalize.</li>
                        <li className="list-group-item">Limit your answers to two minutes, timer will guide you. ⏲️</li>
                        <li className="list-group-item">And lastly smile more, smile often. Good luck! 😊</li>
                      </ul>
                      <button onClick={handleStartTest} className="btn btn-dark float-end mt-3">Start Test</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Form = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const [add, setAdd] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [accessCode, setAccessCode] = useState([]);

  useEffect(() => {
    axios.get("response.json").then((res) => {
      console.log(res.data.results);
      // setData(res.data.results);
      setAdd(res.data.results);
    });
  });

  const handleDisplay = (e) => {
    e.preventDefault();
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
              <form>
                <div className="mb-3">
                  {add.slice(0, 1).map((item) => (
                    <>
                      {`${item.createdby}` < 3 ? (
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="What is your name ?"
                        />) : (
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="What is your name ?"
                          disabled
                        />
                      )}
                    </>
                  ))}
                </div>
                <div className="mb-3">
                  {add.slice(0, 1).map((item) => (
                    <>
                      {`${item.createdby}` < 3 ? (
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="What is your email ?"
                        />) : (
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="What is your email ?"
                          disabled
                        />
                      )}
                    </>
                  ))}
                </div>
                <div className="mb-3">
                  {add.slice(0, 1).map((item) => (
                    <>
                      {`${item.createdby}` < 3 ? (
                        <input
                          type="number"
                          className="form-control"
                          id="contactNumber"
                          placeholder="Enter Phone Number"
                        />) : (
                        <input
                          type="number"
                          className="form-control"
                          id="contactNumber"
                          placeholder="Enter Phone Number"
                          disabled
                        />
                      )}
                    </>
                  ))}
                </div>
                <div className="mb-3">
                  {add.slice(0, 1).map((item) => (
                    <>
                      {`${item.createdby}` < 3 ? (
                        <input
                          type="number"
                          className="form-control"
                          id="accessCode"
                          value={accessCode}
                          onChange={(e) => setAccessCode(e.target.value)}
                          placeholder="Please enter your access code"
                        />) : (
                        <input
                          type="number"
                          className="form-control"
                          id="accessCode"
                          placeholder="Please enter your access code"
                          disabled
                        />
                      )}
                    </>
                  ))}
                </div>
                {add.slice(0, 1).map((item) => (
                  <>
                    {`${item.createdby}` < 3 ? (
                      <button
                        onClick={handleDisplay}
                        className="btn btn-dark button mb-2"
                      >
                        Validate To Start
                      </button>) : (
                      <button
                        onClick={handleDisplay}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

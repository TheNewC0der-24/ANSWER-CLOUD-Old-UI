import React, { useState, useEffect } from "react";
import styles from "./InternalBot.module.css";

import internalbot from "../../assets/Images/internalbot.svg";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import Quesans from "../Modal/QuesAns";
import Skills from "../Modal/Skills";

const Create = () => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [name, setName] = useState(false);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("SELECT...");
  const [create, setCreate] = useState([]);
  //   const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);

  const handleCertificate = () => {
    setCertificate(!certificate);
    setDisabled(!disabled);
  };

  const handleName = () => {
    setName(!name);
    setDisabled(!disabled);
  };

  const handleClick = (e) => {
    e.preventDefault();
    {
      add
        .slice(0, 1)
        .map((item) => (
          <>
            {`${item.access_code}` == "access_code"
              ? navigate("/thankyou")
              : navigate("/externalbot")}
          </>
        ));
    }

    axios
      .post(
        "response.json",
        {
          institute_name: create.institute_name,
          job_title: create.job_title,
          test_code: create.test_code,
          track: create.track,
          email_One: create.email_One,
          timer: create.timer,
          report_sent: create.report_sent,
          general_feedback: create.general_feedback,
          interaction_mode: create.interaction_mode,
          generate_certificate: create.generate_certificate,
          generate_certificate_text: create.generate_certificate_text,
          mentor_name: create.mentor_name,
          mentor_name_textL: create.mentor_name_text,
          job_instruction: create.job_instruction,
          job_description: create.job_description,
          access_code: create.access_code,
          expiry_date: create.expiry_date,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
    setCount(e.target.value.length);
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("response.json").then((res) => {
      console.log(res.data.results);
      // setData(res.data.results);
      setAdd(res.data.results);
    });
  });

  return (
    <>
      <style jsx="true">
        {`
          .button {
            border-radius: 0;
          }
        `}
      </style>
      <div>
        {add.slice(0, 1).map((item) => (
          <>
            {`${item.createdby}` < 2 ? (
              ""
            ) : (
              <div className="alert alert-danger" role="alert">
                Page is restricted
              </div>
            )}
          </>
        ))}
      </div>
      <div className="container d-flex justify-content-between my-3">
        <h3>Internal Bot</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className={`${styles.navigate} text-dark text-decoration-none`}
              >
                aCloud
              </Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Internal Bot
            </li>
          </ol>
        </nav>
      </div>

      <div className="row my-4 mx-auto">
        <div className="col-md-4">
          <img
            className="img-fluid m-auto shadow"
            src={internalbot}
            alt="internalbot"
          />
        </div>
        <div className="col-md-8  m-auto">
          <div className="card shadow border-0">
            <div className="card-body">
              <form>
                {/* {data.slice(0,1).map(create=>(
                <> */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="detail" className="form-label fw-bold">
                        Company/Institute Name*
                      </label>
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 2 ? (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter company/institute name"
                              onChange={handleOnChange}
                              name="institute_name"
                              value={create.institute_name}
                              id="companyName"
                            />
                          ) : (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter company/institute name"
                              onChange={handleOnChange}
                              name="institute_name"
                              value={create.institute_name}
                              id="companyName"
                              disabled
                            />
                          )}
                        </>
                      ))}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Enter company/institute name"
                        onChange={handleOnChange}
                        name="institute_name"
                        value={create.institute_name}
                        id="companyName"
                        /> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="interaction"
                        className="form-label fw-bold"
                      >
                        Interaction Title*
                      </label>
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 2 ? (
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Interaction title"
                            onChange={handleOnChange}
                            name="job_title"
                            value={create.job_title}
                            id="interaction"
                                />
                          ) : (
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Interaction title"
                            onChange={handleOnChange}
                            name="job_title"
                            value={create.job_title}
                            id="interaction"
                                  disabled
                            />
                          )}
                        </>
                      ))}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Interaction title"
                        onChange={handleOnChange}
                        name="job_title"
                        value={create.job_title}
                        id="interaction"
                      /> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="positionCode"
                        className="form-label fw-bold"
                      >
                        Test ID
                      </label>
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 2 ? (
                            <input
                            type="number"
                        className="form-control"
                        placeholder="Enter 6-digit code"
                        onChange={handleOnChange}
                        name="test_code"
                        value={create.test_code}
                        id="positionCode"
                                />
                          ) : (
                            <input
                            type="number"
                        className="form-control"
                        placeholder="Enter 6-digit code"
                        onChange={handleOnChange}
                        name="test_code"
                        value={create.test_code}
                        id="positionCode"
                                  disabled
                            />
                          )}
                        </>
                      ))}
                      {/* <input
                        type="number"
                        className="form-control"
                        placeholder="Enter 6-digit code"
                        onChange={handleOnChange}
                        name="test_code"
                        value={create.test_code}
                        id="positionCode"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="track" className="form-label fw-bold">
                        Track/Domain :
                      </label>
                      {add.slice(0, 1).map((item) => (
                        <>
                          {`${item.createdby}` < 2 ? (
                            <select
                            className="form-select"
                            onChange={handleOnChange}
                            name="track"
                            value={create.track}
                            id="track"
                            aria-label="Default select example"
                          >
                            <option value="Select...">Select...</option>
                            <option value="Sales">Sales</option>
                            <option value="Service">Service</option>
                            <option value="HR">HR</option>
                            <option value="New Grad.">New Grad.</option>
                            <option value="None / Others">None / Others</option>
                          </select>
                          ) : (
                            <select
                        className="form-select"
                        onChange={handleOnChange}
                        name="track"
                        value={create.track}
                        id="track"
                        aria-label="Default select example"
                        disabled
                      >
                        <option value="Select...">Select...</option>
                        <option value="Sales">Sales</option>
                        <option value="Service">Service</option>
                        <option value="HR">HR</option>
                        <option value="New Grad.">New Grad.</option>
                        <option value="None / Others">None / Others</option>
                      </select>
                          )}
                        </>
                      ))}
                      {/* <select
                        className="form-select"
                        onChange={handleOnChange}
                        name="track"
                        value={create.track}
                        id="track"
                        aria-label="Default select example"
                      >
                        <option value="Select...">Select...</option>
                        <option value="Sales">Sales</option>
                        <option value="Service">Service</option>
                        <option value="HR">HR</option>
                        <option value="New Grad.">New Grad.</option>
                        <option value="None / Others">None / Others</option>
                      </select> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between mb-3">
                      <label htmlFor="question" className="form-label fw-bold">
                        Skills:
                        <span className="badge badge bg-secondary">
                          skill name
                        </span>
                      </label>
                      <button
                        type="button"
                        className="btn btn-outline-secondary button"
                        data-bs-toggle="modal"
                        data-bs-target="#skillModal"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="accessCode"
                        className="form-label fw-bold"
                      >
                        Access Code
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter 6-digit access code"
                        onChange={handleOnChange}
                        name="access_code"
                        value={create.access_code}
                        id="accessCode"
                        aria-describedby="accessHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="expiryDate"
                        className="form-label fw-bold"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={handleOnChange}
                        name="expiry_date"
                        value={create.expiry_date}
                        id="expiryDate"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="emailOne" className="form-label fw-bold">
                        Report sent to Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        onChange={handleOnChange}
                        name="email_One"
                        value={create.emailOne}
                        id="email_One"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="timer" className="form-label fw-bold">
                        Timer
                      </label>
                      <select
                        className="form-select"
                        onChange={handleOnChange}
                        name="timer"
                        value={create.timer}
                        id="timer"
                        aria-label="Default select example"
                      >
                        <option value="Select">Select...</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="20 minutes">20 minutes</option>
                        <option value="30 minutes">30 minutes</option>
                        <option value="45 minutes">45 minutes</option>
                        <option value="60 minutes">60 minutes</option>
                        <option value="None">None</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        Generate Certificate
                      </label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            disabled={certificate ? false : true}
                            onClick={handleCertificate}
                            className="form-check-input"
                            type="radio"
                            onChange={handleOnChange}
                            name="generate_certificate"
                            value="No"
                            id="no"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="no">
                            No
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            disabled={certificate ? true : false}
                            onClick={handleCertificate}
                            className="form-check-input"
                            type="radio"
                            onChange={handleOnChange}
                            name="generate_certificate"
                            value="Yes"
                            id="yes"
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Yes
                          </label>
                          {certificate && (
                            <input
                              type="text"
                              className="form-control mt-2 mb-3"
                              onChange={handleOnChange}
                              name="generate_certificate_text"
                              value={create.generate_certificate_text}
                              id="certificate"
                              placeholder="Certificate Name"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        Mentor Name(in Report)
                      </label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            disabled={name ? false : true}
                            onClick={handleName}
                            className="form-check-input"
                            type="radio"
                            onChange={handleOnChange}
                            name="mentor_name"
                            value="No"
                            id="noName"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="noName">
                            No
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            disabled={name ? true : false}
                            onClick={handleName}
                            className="form-check-input"
                            type="radio"
                            onChange={handleOnChange}
                            name="mentor_name"
                            value="Yes"
                            id="yesName"
                          />
                          <label className="form-check-label" htmlFor="yesName">
                            Yes
                          </label>
                          {name && (
                            <input
                              type="text"
                              className="form-control mt-2 mb-3"
                              onChange={handleOnChange}
                              name="mentor_name_text"
                              value={create.mentor_name_text}
                              id="mentorname"
                              placeholder="Mentor Name"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        Report Sent to Candidate
                      </label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            onChange={handleOnChange}
                            name="report_sent"
                            value="No"
                            id="notSend"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="notSend">
                            No
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            onChange={handleOnChange}
                            name="report_sent"
                            value="Yes"
                            id="yesSend"
                          />
                          <label className="form-check-label" htmlFor="yesSend">
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="description"
                        className="form-label fw-bold"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        rows="5"
                        onChange={handleOnChange}
                        name="job_description"
                        value={create.job_description}
                        id="description"
                        placeholder="Your description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="generalFeedback"
                          className="form-label fw-bold"
                        >
                          Add Insights
                        </label>
                        <label
                          htmlFor="generalFeedback"
                          className="form-label fw-bold"
                        >
                          {count}/615
                        </label>
                      </div>
                      <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        name="general_feedback"
                        value={create.general_feedback}
                        id="generalFeedback"
                        minLength="50"
                        maxLength="615"
                        placeholder={`Example: Every human interaction is an opportunity to learn. Its also an opportunity to demonstrate your skills and expertise in a specific context and capacity.We view every professional interaction as a high-stakes game - whether you are likely to save money, generate revenue, make a process more efficient or improve your performance.These virtual interactions act as practice sessions where you can test drive real-world interactions.Experts in the world may differ on what skills matter – but they all have a common point of view.Practice is the key to improvement – and specific feedback makes improvement faster.`}
                        rows="5"
                      />
                      <div className="form-text text-danger">
                        * Minimum 50 characters are required to post the
                        insights
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 m-auto">
                    <div className="mb-3">
                      <label htmlFor="mode" className="form-label fw-bold">
                        Interaction Mode
                      </label>
                      <select
                        className="form-select"
                        onChange={handleOnChange}
                        name="interaction_mode"
                        value={create.interaction_mode}
                        id="mode"
                        aria-label="Default select example"
                      >
                        <option value="Select">Select...</option>
                        <option value="Audio">Audio</option>
                        {add.slice(0, 1).map((item) => (
                          <>
                            {!(`${item.access_code}` == "aaccess_code") && (
                              <option value="Video">Video</option>
                            )}
                          </>
                        ))}
                        <option value="MCQ">MCQ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 m-auto">
                    <div className="d-flex justify-content-between mb-3">
                      <label htmlFor="question" className="form-label fw-bold">
                        Total Question:{" "}
                        <span className="badge badge bg-secondary">No.</span>
                      </label>
                      <button
                        type="button"
                        className="btn btn-outline-secondary button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                {/* </>
              ))} */}
              </form>
              <hr />
              <div className="d-grid col-3 ms-auto">
                <button
                  onClick={handleClick}
                  type="submit"
                  className="btn btn-dark button"
                >
                  Submit and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Quesans value={value} />
      <Skills />
    </>
  );
};

export default Create;

// import React, { useState, useEffect } from "react";
// import styles from "./InternalBot.module.css";

// import internalbot from "../../assets/Images/internalbot.svg";

// import { Link, useNavigate } from "react-router-dom";

// import axios from "axios";

// import Quesans from "../Modal/QuesAns";
// import Skills from "../Modal/Skills";

// const Create = () => {
//   const navigate = useNavigate();

//   const [disabled, setDisabled] = useState(false);
//   const [certificate, setCertificate] = useState(false);
//   const [name, setName] = useState(false);
//   const [create, setCreate] = useState([]);
//   const[data, setData] = useState([]);

//   const handleCertificate = () => {
//     setCertificate(!certificate);
//     setDisabled(!disabled);
//   };

//   const handleName = () => {
//     setName(!name);
//     setDisabled(!disabled);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     navigate("/externalbot");
//     axios
//       .post(
//         "response.json",
//         {
//           institute_name: create.institute_name,
//           job_title: create.job_title,
//           test_code: create.test_code,
//           track: create.track,
//           interaction_mode: create.interaction_mode,
//           generate_certificate: create.generate_certificate,
//           generate_certificate_text: create.generate_certificate_text,
//           mentor_name: create.mentor_name,
//           mentor_name_textL: create.mentor_name_text,
//           job_instruction: create.job_instruction,
//           job_description: create.job_description,
//           access_code: create.access_code,
//           expiry_date: create.expiry_date,
//         },
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//       });
//     };

//     const handleOnChange = (e) => {
//       setCreate({ ...create, [e.target.name]: e.target.value });
//     };

//     useEffect(() => {
//       axios.get('response.json')
//         .then(res => {
//           console.log(res.data.results);
//           setData(res.data.results);
//         })
//     });

//   return (
//     <>
//       <style jsx="true">
//         {`
//           .button {
//             border-radius: 0;
//           }
//         `}
//       </style>
//       <div className="container d-flex justify-content-between my-3">
//         <h3>Internal Bot</h3>
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item">
//               <Link
//                 to="/"
//                 className={`${styles.navigate} text-dark text-decoration-none`}
//               >
//                 aCloud
//               </Link>
//             </li>
//             <li className="breadcrumb-item" aria-current="page">
//               Internal Bot
//             </li>
//           </ol>
//         </nav>
//       </div>

//       <div className="row my-4 mx-auto">
//         <div className="col-md-4">
//           <img
//             className="img-fluid m-auto"
//             src={internalbot}
//             alt="internalbot"
//           />
//         </div>
//         <div className="col-md-8 m-auto">
//           <div className="card border-0">
//             {/* <h3 className={`${styles.cardHeader} card-header text-center mb-3 bg-dark text-white`}>
//                             Create Internal Bot
//                         </h3> */}
//             <div className="card-body">
//               <form>
//                 {data.slice(0,1).map(create=>(
//                   <>
//               <div className="row">
//                   <div className="col-md-4">
//                     <div className="mb-3">
//                       <label
//                         htmlFor="institute_name"
//                         className="form-label fw-bold"
//                         >
//                         Company/Institute Name*
//                       </label>
//                       <input
//                         type="text"
//                         onChange={handleOnChange}
//                         name="institute_name"
//                         value={create.institute_name}
//                         className="form-control"
//                         placeholder="Enter company/institute name"
//                         id="institute_name"
//                         />
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="mb-3">
//                       <label htmlFor="job_title" className="form-label fw-bold">
//                         Interaction Title*
//                       </label>
//                       <input
//                         type="text"
//                         onChange={handleOnChange}
//                         name="job_title"
//                         value={create.job_title}
//                         className="form-control"
//                         placeholder="Enter Interaction title"
//                         id="job_title"
//                         />
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="mb-3">
//                       <label htmlFor="test_code" className="form-label fw-bold">
//                         Test ID
//                       </label>
//                       <input
//                         type="number"
//                         onChange={handleOnChange}
//                         name="test_code"
//                         value={create.test_code}
//                         className="form-control"
//                         placeholder="Enter 6-digit code"
//                         id="test_code"
//                         />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label htmlFor="track" className="form-label fw-bold">
//                         Track/Domain :
//                       </label>
//                       <select
//                         className="form-select"
//                         id="track"
//                         onChange={handleOnChange}
//                         name="track"
//                         value={create.track}
//                         aria-label="Default select example"
//                         >
//                         <option value="Select...">Select...</option>
//                         <option value="Sales">Sales</option>
//                         <option value="Service">Service</option>
//                         <option value="HR">HR</option>
//                         <option value="New Grad.">New Grad.</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label htmlFor="interaction_mode" className="form-label fw-bold">
//                         Interaction Mode
//                       </label>
//                       <select
//                         className="form-select"
//                         id="interaction_mode"
//                         onChange={handleOnChange}
//                         name="interaction_mode"
//                         value={create.interaction_mode}
//                         aria-label="Default select example"
//                         >
//                         <option value="Select">Select...</option>
//                         <option value="Audio">Audio</option>
//                         <option value="Video">Video</option>
//                         <option value="MCQ">MCQ</option>
//                         <option value="Image">Image</option>
//                         <option value="Text">Text</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label
//                         htmlFor="access_code"
//                         className="form-label fw-bold"
//                         >
//                         Access Code
//                       </label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Enter 6-digit access code"
//                         id="access_code"
//                         onChange={handleOnChange}
//                         name="access_code"
//                         value={create.access_code}
//                         aria-describedby="accessHelp"
//                         />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label
//                         htmlFor="expiry_date"
//                         className="form-label fw-bold"
//                         >
//                         Expiry Date
//                       </label>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="expiry_date"
//                         onChange={handleOnChange}
//                         name="expiry_date"
//                         value={create.expiry_date}
//                         />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label fw-bold">
//                         Generate Certificate
//                       </label>
//                       <div className="d-flex gap-3">
//                         <div className="form-check">
//                         <input
//                         disabled={certificate ? false : true}
//                         onClick={handleCertificate}
//                         className="form-check-input"
//                         type="radio"
//                         id="no"
//                         defaultChecked={create.is_active ? false : true}
//                         onChange={handleOnChange}
//                         name="generate_certificate"
//                         value="no"
//                         />
//                           <label className="form-check-label" htmlFor="no">
//                             No
//                           </label>
//                         </div>
//                         <div className="form-check">
//                         <input
//                         disabled={certificate ? true : false}
//                         onClick={handleCertificate}
//                         className="form-check-input"
//                         type="radio"
//                         id="yes"
//                         defaultChecked={create.is_active ? true : false}
//                         onChange={handleOnChange}
//                         name="generate_certificate"
//                         value="yes"
//                         />
//                           <label className="form-check-label" htmlFor="yes">
//                             Yes
//                           </label>
//                           {certificate && (
//                             <input
//                             type="text"
//                             className="form-control mt-2 mb-3"
//                             id="generate_certificate_text"
//                             placeholder="Certificate Name"
//                             onChange={handleOnChange}
//                             name="generate_certificate_text"
//                             value={create.generate_certificate_text}
//                             />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label fw-bold">
//                         Mentor Name(in Report)
//                       </label>
//                       <div className="d-flex gap-3">
//                         <div className="form-check">
//                           <input
//                             disabled={name ? false : true}
//                             onClick={handleName}
//                             className="form-check-input"
//                             type="radio"
//                             id="noName"
//                             defaultChecked
//                             onChange={handleOnChange}
//                             name="mentor_name"
//                             value="no"
//                             />
//                           <label className="form-check-label" htmlFor="noName">
//                             No
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             disabled={name ? true : false}
//                             onClick={handleName}
//                             className="form-check-input"
//                             type="radio"
//                             id="yesName"
//                             onChange={handleOnChange}
//                             name="mentor_name"
//                             value="yes"
//                             />
//                           <label className="form-check-label" htmlFor="yesName">
//                             Yes
//                           </label>
//                           {name && (
//                             <input
//                             type="text"
//                             className="form-control mt-2 mb-3"
//                             id="mentorname"
//                             placeholder="Mentor Name"
//                             onChange={handleOnChange}
//                             name="mentor_name_text"
//                             value={create.mentor_name_text}
//                             />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label
//                         htmlFor="job_instruction"
//                         className="form-label fw-bold"
//                         >
//                         Instruction
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Your instruction"
//                         id="job_instruction"
//                         onChange={handleOnChange}
//                         name="job_instruction"
//                         value={create.job_instruction}
//                         />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label
//                         htmlFor="job_description"
//                         className="form-label fw-bold"
//                       >
//                         Description
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Your description"
//                         id="job_description"
//                         onChange={handleOnChange}
//                         name="job_description"
//                         value={create.job_description}
//                         />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6 m-auto">
//                     <div className="d-flex justify-content-between mb-3">
//                       <label htmlFor="question" className="form-label fw-bold">
//                         Skills:{" "}
//                         <span className="badge badge bg-secondary">
//                           skill name
//                         </span>
//                       </label>
//                       <button
//                         type="button"
//                         className="btn btn-outline-secondary button"
//                         data-bs-toggle="modal"
//                         data-bs-target="#exampleModal1"
//                         >
//                         Add
//                       </button>
//                     </div>
//                   </div>
//                   <div className="col-md-6 m-auto">
//                     <div className="d-flex justify-content-between mb-3">
//                       <label htmlFor="question" className="form-label fw-bold">
//                         Total Question:{" "}
//                         <span className="badge badge bg-secondary">No.</span>
//                       </label>
//                       <button
//                         type="button"
//                         className="btn btn-outline-secondary button"
//                         data-bs-toggle="modal"
//                         data-bs-target="#exampleModal"
//                         >
//                         Add
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 </>
//               ))}
//               </form>
//               <hr />
//               <div className="d-grid col-3 ms-auto">
//                 <button
//                   onClick={handleClick}
//                   type="submit"
//                   className="btn btn-dark button"
//                 >
//                   Submit and Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//       <Quesans />
//       <Skills />
//     </>
//   );
// };

// export default Create;

import React, { useState } from "react";
import styles from "./ExternalBot.module.css";
import { Link, useNavigate } from "react-router-dom";

import { FaTelegram, FaWhatsapp, FaSlack, FaWpforms } from "react-icons/fa";

import { Formik, Form, Field } from "formik";

const Notification = () => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/internalbot");
  };

  const onSubmit = () => {
    navigate("/thankyou");
  };

  const initialValues = {
    whoinitiate: "",
    phone: "",
    email: "",
    user: "",
    welcome: "",
    instruction: "",
    completion: "",
    bot: "",
  };

  const validateWhoInitiate = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value === "Select...") {
      error = "*Choose correct option";
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "*Invalid email address";
    }
    return error;
  };

  const validateUser = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value === "Select...") {
      error = "*Choose correct option";
    }
    return error;
  };

  const validateWelcome = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateInstruction = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateCompletion = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateBot = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  // const [isNeeded, setIsNeeded] = useState(false);
  // const [disabled, setDisabled] = useState(false);

  // const handleNeeded = () => {
  //     setIsNeeded(!isNeeded);
  //     setDisabled(!disabled);
  // }

  return (
    <>
      <style jsx="true">
        {`
          .button {
            border-radius: 0;
          }
        `}
      </style>
      <div className="container d-flex justify-content-between my-3">
        <h3>External Bot</h3>
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
              External Bot
            </li>
          </ol>
        </nav>
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div className="container my-4 mx-auto">
              <div>
                <div className="card border-0 shadow mb-3">
                  {/* <h3 className={`${styles.heading} card-header bg-dark text-white text-center`}>External Bot</h3> */}
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="whoInitiate"
                              className="form-label fw-bold"
                            >
                              Who can Initiate ?
                            </label>
                            <Field as="select" 
                                className={`form-select ${errors.whoinitiate && touched.whoinitiate ? "border-danger" : ""}`}
                                id="whoInitiate"
                                name="whoinitiate"
                                validate={validateWhoInitiate}>
                              <option value="Select">Select...</option>
                              <option value="Bot">Bot</option>
                              <option value="User">User</option>
                            </Field>
                            {
                                errors.whoinitiate && touched.whoinitiate &&
                                <div className="form-text text-danger">
                                    {errors.whoinitiate}
                                </div>
                            }
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label
                              htmlFor="phoneNo"
                              className="form-label  fw-bold"
                              >
                              Phone Number List
                            </label>
                            <Field
                              className={`form-control ${errors.phone && touched.phone ? "border-danger" : ""}`}
                              type="file"
                              id="formFile"
                              name="phone"
                              validate={validatePhone}
                              />
                            {
                              errors.phone && touched.phone &&
                                <div className="form-text text-danger">
                                    {errors.phone}
                                </div>
                            }
                          </div>
                          <button className="btn btn-outline-dark button mb-3 me-2">
                            View List
                          </button>
                          <button className="btn btn-dark button mb-3">
                            Upload
                          </button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="email"
                              className="form-label fw-bold"
                            >
                              Collect Email
                            </label>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="collectEmail"
                                id="yes"
                              />
                              <label className="form-check-label" htmlFor="yes">
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="collectEmail"
                                id="no"
                                defaultChecked
                              />
                              <label className="form-check-label" htmlFor="no">
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="collectResume"
                              className="form-label fw-bold"
                            >
                              Collect Resume
                            </label>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="CollectResume"
                                value="Yes"
                                id="yesResume"
                                />
                              <label
                                className="form-check-label"
                                htmlFor="yesResume"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="CollectResume"
                                id="noResume"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="noResume"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="feedbackMessage"
                              className="form-label fw-bold"
                            >
                              Candidate Feedback Message
                            </label>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="CandidateFeedback"
                                id="yesFeedbackMessage"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="yesFeedbackMessage"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="CandidateFeedback"
                                id="noFeedbackMessage"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="noFeedbackMessage"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="channel"
                              className="form-label fw-bold"
                            >
                              Channel
                            </label>
                            <div className="form-check">
                              <Field
                                disabled
                                className="form-check-Field"
                                type="checkbox"
                                id="telegram"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="telegram"
                              >
                                <FaTelegram
                                  className="me-1"
                                  style={{ color: "#0088cc" }}
                                />
                                Telegram
                              </label>
                            </div>
                            <div className="form-check">
                              <Field
                                disabled
                                className="form-check-Field"
                                type="checkbox"
                                id="whatsapp"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="whatsapp"
                              >
                                <FaWhatsapp
                                  className="me-1"
                                  style={{ color: "#25d366" }}
                                />
                                Whatsapp
                              </label>
                            </div>
                            <div className="form-check">
                              <Field
                                disabled
                                className="form-check-Field"
                                type="checkbox"
                                id="slack"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="slack"
                              >
                                <FaSlack
                                  className="me-1"
                                  style={{ color: "#E01E5A" }}
                                />
                                Slack
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <Field
                                className="form-check-Field"
                                type="checkbox"
                                defaultChecked
                                id="form"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form"
                              >
                                <FaWpforms className="me-1" />
                                Form
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="candidateID"
                              className="form-label fw-bold"
                            >
                              Collect Candidate ID
                            </label>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="CollectID"
                                id="yesId"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="yesId"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <Field
                                className="form-check-Field"
                                type="radio"
                                name="CollectID"
                                id="noId"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="noId"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5">
                    <div className="card border-0 shadow">
                      <h3
                        className={`${styles.heading} card-header bg-dark text-white text-center`}
                      >
                        Interaction Notification
                      </h3>
                      <div className="card-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="email"
                              className="form-label fw-bold"
                            >
                              Report sent to Extra Email
                            </label>
                            <Field
                              type="email"
                              className={`form-control ${errors.email && touched.email ? "border-danger" : ""}`}
                              id="email"
                              name="email"
                              validate={validateEmail}
                            />
                            {
                                errors.email && touched.email &&
                                <div className="form-text text-danger">
                                    {errors.email}
                                </div>
                            }
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label fw-bold"
                              htmlFor="report"
                              >
                              Report sent to User
                            </label>
                            <Field as="select"
                              className={`form-select ${errors.user && touched.user ? "border-danger" : ""}`}
                              id="report"
                              name="user"
                              aria-label="Default select example"
                              validate={validateUser}
                            >
                              <option value="Select">Select...</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </Field>
                            {
                                errors.user && touched.user &&
                                <div className="form-text text-danger">
                                    {errors.user}
                                </div>
                            }
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className={`${styles.right} card border-0 shadow`}>
                      <h3
                        className={`${styles.heading} card-header bg-dark text-white text-center`}
                      >
                        Bot Message
                      </h3>
                      <div className="card-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="welcome"
                              className="form-label fw-bold"
                            >
                              Interaction Welcome Message
                            </label>
                            <Field as="textarea"
                              className={`form-control ${errors.welcome && touched.welcome ? "border-danger" : ""} interaction`}
                              id="welcome"
                              name="welcome"
                              rows="1"
                              validate={validateWelcome}
                            />
                            {
                              errors.welcome && touched.welcome &&
                                <div className="form-text text-danger">
                                    {errors.welcome}
                                </div>
                            }
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="instruction"
                              className="form-label fw-bold"
                            >
                              Interaction Instruction message
                            </label>
                            <Field as="textarea"
                              className={`form-control ${errors.instruction && touched.instruction ? "border-danger" : ""} interaction`}
                              id="instruction"
                              name="instruction"
                              rows="1"
                              validate={validateInstruction}
                            />
                            {
                                errors.instruction && touched.instruction &&
                                <div className="form-text text-danger">
                                    {errors.instruction}
                                </div>
                            }
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="completion"
                              className="form-label fw-bold"
                            >
                              Interaction Completion Message
                            </label>
                            <Field as="textarea"
                              className={`form-control ${errors.completion && touched.completion ? "border-danger" : ""} interaction`}
                              id="completion"
                              name="completion"
                              rows="1"
                              validate={validateCompletion}
                            />
                            {
                                errors.completion && touched.completion &&
                                <div className="form-text text-danger">
                                    {errors.completion}
                                </div>
                            }
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="dark"
                              className="form-label fw-bold"
                            >
                              Bot Message
                            </label>
                            <Field as="textarea"
                              className={`form-control ${errors.bot && touched.bot ? "border-danger" : ""} interaction`}
                              id="dark"
                              name="bot"
                              rows="1"
                              validate={validateBot}
                            />
                            {
                                errors.bot && touched.bot &&
                                <div className="form-text text-danger">
                                    {errors.bot}
                                </div>
                            }
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end me-auto gap-3">
                <button
                  onClick={handleBack}
                  className="btn btn-outline-secondary button"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-dark button"
                  onSubmit={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Notification;

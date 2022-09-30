import React, { useState } from "react";
import styles from "./Profile.module.css";
import Profilepic from "./Profilepic";
import { FaUser, FaPenSquare } from "react-icons/fa";

import { countries } from "../../assets/Countries/countries";

import { Formik, Form, Field } from "formik";

const Profile = () => {
  const [style, setStyle] = useState({ display: "none" });
  const mouseEnter = () => {
    setStyle({
      display: "block",
      width: "15%",
      height: "15%",
      position: "absolute",
      left: "60%",
      top: "25%",
      cursor: "pointer",
    });
  };
  const mouseLeave = () => {
    setStyle({
      display: "none",
    });
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    cname: "",
    country: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    instagram: "",
  };

  const validateFirstName = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateLastName = (value) => {
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

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = "*This field is Required";
    } else if (!/^[0-9]{10}$/i.test(value)) {
      error = "*Invalid Phone Number";
    }
    return error;
  };

  const validateCname = (value) => {
    let error;
    if (!value) {
      error = "*This field is Required";
    }
    return error;
  };

  const validateCountry = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value === "Select Country") {
      error = "*Choose correct option";
    }
    return error;
  };

  const validateLinkedIn = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateFacebook = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateTwitter = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
  };

  const validateInstagram = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    return error;
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
      <div className="mt-5 container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <h5>Upload Profile Picture :</h5>
              </div>
              <div className="card-body d-flex justify-content-center">
                {/* <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Upload Profile Picture</label>
                                    <input className={`form-control ${
                                errors.firstname && touched.firstname
                                  ? "border-danger"
                                  : ""
                              }`} type="file" id="formFile" />
                                  </div> */}
                {/* <button  className='btn btn-dark button'>Upload</button> */}
                <FaUser
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className="h-50 w-50 m-auto p-3 bg-light"
                />
                <FaPenSquare
                  style={style}
                  onMouseEnter={mouseEnter}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Personal Details :</h5>
                  <div className="text-end">
                    <button className="btn btn-secondary button">Edit</button>
                    <p className="text-danger">Click Edit to update details*</p>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  // onSubmit={onSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.firstname && touched.firstname
                                  ? "border-danger"
                                  : ""
                              }`}
                              id="fName"
                              name="firstname"
                              placeholder="First Name"
                              validate={validateFirstName}
                            />
                            {errors.firstname && touched.firstname && (
                              <div className="form-text text-danger">
                                {errors.firstname}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.lastname && touched.lastname
                                ? "border-danger"
                                : ""
                              }`}
                              id="lName"
                              name="lastname"
                              placeholder="Last Name"
                              validate={validateLastName}
                            />
                            {errors.lastname && touched.lastname && (
                              <div className="form-text text-danger">
                                {errors.lastname}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Field
                              type="email"
                              className={`form-control ${
                                errors.email && touched.email
                                  ? "border-danger"
                                  : ""
                              }`}
                              id="emailAddress"
                              name="email"
                              placeholder="Email address"
                              validate={validateEmail}
                            />
                            {errors.email && touched.email && (
                              <div className="form-text text-danger">
                                {errors.email}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Field
                              type="number"
                              className={`form-control ${
                                errors.phone && touched.phone
                                ? "border-danger"
                                : ""
                              }`}
                              id="contactNumber"
                              name="phone"
                              placeholder="Phone Number"
                              validate={validatePhone}
                            />
                            {errors.phone && touched.phone && (
                              <div className="form-text text-danger">
                                {errors.phone}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.cname && touched.cname
                                ? "border-danger"
                                : ""
                              }`}
                              id="companyName"
                              name="cname"
                              placeholder="Company Name"
                              validate={validateCname}
                            />
                            {errors.cname && touched.cname && (
                              <div className="form-text text-danger">
                                {errors.cname}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Field as="select"
                              className={`form-select ${
                                errors.country && touched.country
                                ? "border-danger"
                                : ""
                              }`}
                              aria-label="Default select example"
                              name="country"
                              validate={validateCountry}
                              >
                              <option value="Select Country">
                                Select Country
                              </option>
                              {countries.map((item) => (
                                <option>{item.name}</option>
                              ))}
                            </Field>
                            {errors.country && touched.country && (
                              <div className="form-text text-danger">
                                {errors.country}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title mt-4">Social Links :</h5>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <Field
                                type="text"
                                className={`form-control ${
                                  errors.linkedin && touched.linkedin
                                  ? "border-danger"
                                  : ""
                                }`}
                                id="linkedin"
                                name="linkedin"
                                placeholder="LinkedIn"
                                validate={validateLinkedIn}
                              />
                              {errors.linkedin && touched.linkedin && (
                                <div className="form-text text-danger">
                                  {errors.linkedin}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <Field
                                type="text"
                                className={`form-control ${
                                errors.facebook && touched.facebook
                                  ? "border-danger"
                                  : ""
                              }`}
                                id="facebook"
                                placeholder="Facebook"
                                name="facebook"
                                validate={validateFacebook}
                                />
                              {errors.facebook && touched.facebook && (
                                <div className="form-text text-danger">
                                  {errors.facebook}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <Field
                                type="text"
                                className={`form-control ${
                                errors.twitter && touched.twitter
                                  ? "border-danger"
                                  : ""
                                }`}
                                id="twitter"
                                name="twitter"
                                placeholder="Twitter"
                                validate={validateTwitter}
                              />
                              {errors.twitter && touched.twitter && (
                                <div className="form-text text-danger">
                                  {errors.twitter}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <Field
                                type="text"
                                className={`form-control ${
                                  errors.instagram && touched.instagram
                                  ? "border-danger"
                                  : ""
                                }`}
                                id="instagram"
                                name="instagram"
                                placeholder="Instagram"
                                validate={validateInstagram}
                              />
                              {errors.instagram && touched.instagram && (
                                <div className="form-text text-danger">
                                  {errors.instagram}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-dark button">
                          Submit Details
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Profilepic />
    </>
  );
};

export default Profile;

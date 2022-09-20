import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

import { IoIosChatboxes } from "react-icons/io";

import report from "../../assets/Images/report.png"

const Logo = () => {

  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <div className={`${styles.row} my-2 row`}>
        <h2 className="text-center my-3 text-decoration-underline">
          job_title <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT', fontSize: "36px" }}>A</span>nswer cloud report
        </h2>
        <div className="col-md-6 mt-auto ">
          <div className="d-flex gap-2 text-center">
            <h4>Candidate : <span>candidate_id.name</span></h4>
            <Link to="/response">
              {/* <button className="btn btn-dark btn-sm" > */}
              <button style={{ border: "2px solid black", color: 'black' }}>
                <IoIosChatboxes className="fs-2 me-1 fw-bold" />RESPONSES
              </button>
            </Link>
          </div>
          <h4>Date : <span>interaction.created_at(date)</span></h4>
          <h4>Mentor : <span>Automated</span></h4>


        </div>
        <div className="col-md-6 d-flex justify-content-end m-auto">
          <img className="img-fluid" src={report} alt="report" width={300} />
        </div>
      </div>
    </>
  );
};

export default Logo;

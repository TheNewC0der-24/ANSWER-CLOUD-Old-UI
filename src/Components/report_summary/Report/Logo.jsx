import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

import { IoIosChatboxes } from "react-icons/io";

import report from "../../../assets/Images/report.png";

const Logo = () => {

  return (
    <>
      <div className={`${styles.row} my-2 row`}>
        <h2 className="text-center my-3 text-decoration-underline">
          {/* job_title{" "} */}
          New Graduate HR discussion{" "}
          <span
            className="me-1 fw-bold"
            style={{ fontFamily: "Brush Script MT", fontSize: "40px" }}
          >
            A
          </span>
          nswer cloud report
        </h2>
        <div className="d-flex justify-content-between align-items-end mt-auto ">
          <div>
            <div className="d-flex gap-2 text-center">
              <h2>
                {/* Candidate : <span>candidate_id.name</span> */}
                Candidate : <span>Bhavya Khurana</span>
              </h2>
              <Link to="/response">
                <button className="btn btn-dark btn-sm" >
                  <IoIosChatboxes className="fs-3 me-2 fw-bold" />
                  RESPONSES
                </button>
              </Link>
            </div>
            <h2>
              {/* Date : <span>interaction.created_at(date)</span> */}
              Date : <span>12 Sept 2022</span>
            </h2>
            <h2>
              {/* Mentor : <span>Automated</span> */}
              Mentor : <span>Krishna P.</span>
            </h2>
          </div>
          <div>
            <img className="img-fluid" src={report} alt="report" width={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;

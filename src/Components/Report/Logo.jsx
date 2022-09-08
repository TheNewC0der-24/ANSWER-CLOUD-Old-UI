import React, { useState, useEffect } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

import { IoIosChatboxes } from "react-icons/io";

import report from "../../assets/Images/report.png"

import axios from 'axios';

const Logo = () => {

  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('response.json')
        .then(res => {
          console.log(res.data.results);
          setData(res.data.results);
        })
    });

  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <div className={`${styles.row} my-5 row`}>
        <h1 className="text-center my-3">
          job_title Feedback
        </h1>
        <div className="col-md-6 mt-auto ">
            {data.slice(0,1).map(item=>(
            <>
          <div className="d-flex gap-2 text-center">
            <h4>Candidate : <span>{item.who_can_initiate}</span></h4>
            <Link to="/response">
              <button className="btn btn-dark btn-sm">
                <IoIosChatboxes className="fs-2 me-1" />RESPONSES
              </button>
            </Link>
          </div>
          <h4>Date : <span>{item.created_at}</span></h4>
          <h4>Mentor : <span>Automated</span></h4>

          </>
        ))}

        </div>
        <div className="col-md-6 d-flex justify-content-end m-auto">
          <img className="img-fluid" src={report} alt="report" width={300} />
        </div>
      </div>
    </>
  );
};

export default Logo;

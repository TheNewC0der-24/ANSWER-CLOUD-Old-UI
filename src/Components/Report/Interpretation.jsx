import React from "react";
import styles from "./Interpretation.module.css";

const Interpretation = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="my-5">
          <span className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}>
            <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer score interpretation
          </span>
        </h1>
        <div className={styles.para}>
          <div className={styles.main}>
            <div className={styles.col1}>
              <ul type="square">
                <li>
                  <p align="justify">
                    While there are several factors that go into calculations of
                    these overall ratings - they are described in the{" "}
                    <strong>Power Skills</strong> section.
                  </p>
                </li>
                <li>
                  <p align="justify">
                    The factors that we have NOT considered for ratings are
                    described in the <strong>General Parameters</strong> section
                    below. While we have used it as a factor in calculating
                    other power skills, they do not have sufficient rigor to be
                    used on a standalone basis. These are also not considered in
                    the overall cohort calculations.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.col2}>
              <ul type="square">
                <li>
                  <p align="justify">
                    The <strong>Interaction snapshot</strong> section shows a
                    summary of the power skills, their individual ratings and
                    consolidated cohort ratings of the candidate.
                  </p>
                </li>
                <li>
                  <p align="justify">
                    The <strong>Content Ratings</strong> section in the report
                    analyzes the level of the accuracy of the content in the
                    responses of the aspirants.This is determined by comparing
                    the answer with the industry standard answers and context.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{backgroundColor: 'black'}}>
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center text-white fs-2 p-2">Cohort Rating</div>
            <div className="col-6 d-flex justify-content-center align-items-center border border-2 text-center text-white fs-2 p-2">Interpretation</div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center text-white fs-2 p-2">Percentage</div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">A</div>
            <div className="col-6 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">High Quality</div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">about 75%</div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">B</div>
            <div className="col-6 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">Some Gaps</div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">between 50% to 75%</div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">C</div>
            <div className="col-6 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">Only few expectations are met</div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">between 25% to 50%</div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">D</div>
            <div className="col-6 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">None of the expectations are met</div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-2 text-center fs-4 p-2">lesser than 25%</div>
          </div>
        </div>
        {/* <table className={`${styles.table} table table-bordered text-center my-5`}>
          <thead className={`${styles.thead} text-white`}>
            <tr>
              <th scope="col">Cohort Rating</th>
              <th scope="col">Interpretation</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>High Quality</td>
              <td>about 75%</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Some Gaps</td>
              <td>between 50% to 75%</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Only few expectations are met</td>
              <td>between 25% to 50%</td>
            </tr>
            <tr>
              <td>D</td>
              <td>None of the expectations are met</td>
              <td>lesser than 25%</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Interpretation;

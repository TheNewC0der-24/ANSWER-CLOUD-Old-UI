import React from "react";
import styles from "./Interpretation.module.css";

const Interpretation = () => {
  return (
    <>
      <div className="container mt-2">
        <h1 className="mb-1">
          <span
            className="badge text-center"
            style={{ border: "2px solid black", color: "black" }}
          >
            <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer score interpretation
          </span>
        </h1>
        <div className={styles.para}>
          <div className={styles.row}>
            <div className={styles.ul}>
              {/* <div className="col-md-6"> */}
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
            <div className={styles.ul}>
              {/* <div className="col-md-6"> */}
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
        <table
          className="table table-bordered text-center my-4"
          style={{ borderColor: "#2e3134", fontSize: "22px" }}
        >
          <thead className="text-white" style={{ backgroundColor: "#2e3134" }}>
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
        </table>
      </div>
    </>
  );
};

export default Interpretation;

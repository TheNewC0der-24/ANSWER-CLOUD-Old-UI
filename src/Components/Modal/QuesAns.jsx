import React, { useState } from "react";
import styles from "./QuesAns.module.css";

const Quesans = (props) => {
  const [noOfRows, setNoOfRows] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
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
      <div
        className="modal fade modal-xl"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Total Questions:{" "}
                <span className="badge badge bg-secondary">No.</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className={styles.scroll}>
                {props.value === "MCQ" && (
                  <table className="table">
                    <thead>
                      <tr className="table-secondary">
                        <th className="text-center" scope="col">
                          Question:
                        </th>
                        <th className="text-center" scope="col">
                          Media Context:
                        </th>
                        <th className="text-center" scope="col">
                          Hints/Description:
                        </th>
                        <th className="text-center" scope="col">
                          Option 1
                        </th>
                        <th className="text-center" scope="col">
                          Option 2
                        </th>
                        <th className="text-center" scope="col">
                          Option 3
                        </th>
                        <th className="text-center" scope="col">
                          Option 4
                        </th>
                        <th className="text-center" scope="col">
                          Right Option
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(noOfRows)].map((index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <textarea
                                className="form-control"
                                id="question"
                                rows="1"
                              ></textarea>
                            </td>
                            <td>
                              <input type="text" className="form-control" id="medialink" placeholder='Paste your link here' />
                            </td>
                            <td>
                              <input type="text" className="form-control" id="hint" placeholder='Hints/Description' />
                            </td>
                            <td>
                              <textarea
                                className="form-control"
                                id="option1"
                                rows="1"
                              ></textarea>
                            </td>
                            <td>
                              <textarea
                                className="form-control"
                                id="option2"
                                rows="1"
                              ></textarea>
                            </td>
                            <td>
                              <textarea
                                className="form-control"
                                id="option3"
                                rows="1"
                              ></textarea>
                            </td>
                            <td>
                              <textarea
                                className="form-control"
                                id="option4"
                                rows="1"
                              ></textarea>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                id="rightAnswer"
                              >
                                <option value="Select...">Select...</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                              </select>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
                {props.value !== "MCQ" && (
                  <table className="table">
                    <thead>
                      <tr className="table-secondary">
                        <th className="text-center" scope="col">
                          Question:
                        </th>
                        <th className="text-center" scope="col">
                          Media Context:
                        </th>
                        <th className="text-center" scope="col">
                          Hints/Description:
                        </th>
                        <th className="text-center" scope="col">
                          Ideal Answer:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(noOfRows)].map((index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <textarea
                                className="form-control"
                                id="question"
                                rows="2"
                              ></textarea>
                            </td>
                            <td>
                              <textarea rows="2" type="text" className="form-control" id="medialink" placeholder='Paste your link here' />
                            </td>
                            <td>
                              <textarea rows="2" type="text" className="form-control" id="hint" placeholder='Hints/Description' />
                            </td>
                            <td>
                              <textarea
                                className="form-control"
                                id="idealAnswer"
                                placeholder="Ideal Answer..."
                                rows="2"
                              ></textarea>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
              <hr />
              <div>
                <button
                  type="submit"
                  className="btn btn-success button me-2"
                  onClick={() => setNoOfRows(noOfRows + 1)}
                >
                  Add
                </button>
                <button
                  disabled={noOfRows <= 1}
                  type="submit"
                  className="btn btn-danger button"
                  onClick={() => setNoOfRows(noOfRows - 1)}
                  >
                  Delete
                </button>
              </div>
              <hr />
              <div className="form-check my-3">
                <input onClick={handleCheck} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Case-Study/Description Text :
                </label>
              </div>
              {
                checked && (
                  <textarea className="form-control" onChange={(e) => e.target.value} id="caseStudy" rows="7"></textarea>
                )
              }
            </div>
            <div className="modal-footer">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#internalBotModal"
                >
                  Close
                </button>
                <button type="button" onClick={() => props.handleClick(noOfRows)} className="btn btn-dark mx-1">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quesans;

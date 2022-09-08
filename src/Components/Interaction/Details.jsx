import React, { useState, useEffect } from 'react';
import styles from './Details.module.css';
import Skills from "../Modal/Skills";

import { FaTelegram, FaWhatsapp, FaSlack, FaWpforms } from 'react-icons/fa';

import axios from 'axios';

const Details = () => {

  const [disableButton, setDisableButton] = useState(true)

  const [isNeeded, setIsNeeded] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState(false);

  const handleNeeded = () => {
    setIsNeeded(!isNeeded);
    setDisabled(!disabled);
  }

  const handleEdit = () => {
    setDisableButton(!disableButton)
  }

  const [certificate, setCertificate] = useState(false);

  const handleCertificate = () => {
    setCertificate(!certificate);
    setDisabled(!disabled);
  }

  const handleName = () => {
    setName(!name);
    setDisabled(!disabled);
  }

  const handleClone = () => {
    window.location = "/internalbot";
  }

  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('response.json')
        .then(res => {
          // console.log(res.data.results);
          setData(res.data.results);
        })
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

      {/* Internal Bot */}
      {data.slice(0,1).map(item=>(
        <>
      <div
        className="modal fade modal-xl"
        id="internalBotModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header d-flex justify-content-between'>
              <h1 className="modal-title" id="exampleModalLabel">
                Details
              </h1>
              <div className='d-flex gap-2'>
                <button onClick={handleClone} className='btn btn-outline-secondary button'>Clone</button>
                <button onClick={handleEdit} className='btn btn-dark button'>Edit Details</button>
              </div>
            </div>
            <div className={`${styles.modal} modal-body`}>
              <div className="btn-group">
                <button className="btn btn-dark" aria-current="page">Internal Bot</button>
                <button data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" className="btn btn-outline-dark">External Bot</button>
              </div>
              <hr />
              <div className='container'>
                <div className='d-grid col-md-12 mx-auto'>
                  <div className='card border-dark'>
                    <h3 className={`${styles.cardHeader} card-header text-center mb-3 bg-dark text-white`}>
                      Create Internal Bot
                    </h3>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="detail" className="form-label fw-bold">Company/Institute Name*</label>
                              <input disabled={disableButton} type="text" value={item.institute_name} className="form-control" placeholder='Enter company/institute name' id="companyName" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="interaction" className="form-label fw-bold">Interaction Title*</label>
                              <input disabled={disableButton} type="text" className="form-control" value={item.job_title} placeholder='Enter Interaction title' id="interaction" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="positionCode" className="form-label fw-bold">Test ID</label>
                              <input disabled={disableButton} type="number" className="form-control" value={item.total_question} placeholder='Enter 6-digit code' id="positionCode" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="track" className="form-label fw-bold">Track/Domain :</label>
                              <select className="form-select" id='track' aria-label="Default select example">
                                <option value="Select...">{"" ? "Select..." : item.track}</option>
                                <option value="Sales">Sales</option>
                                <option value="Service">Service</option>
                                <option value="HR">HR</option>
                                <option value="New Grad.">New Grad.</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="mode" className="form-label fw-bold">Interaction Mode</label>
                              <select className="form-select" id='mode' aria-label="Default select example">
                                <option value="Select">{"" ? "Select..." : item.interaction_mode}</option>
                                <option value="Audio">Audio</option>
                                <option value="Video">Video</option>
                                <option value="MCQ">MCQ</option>
                                <option value="Image">Image</option>
                                <option value="Text">Text</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="accessCode" className="form-label fw-bold">Access Code</label>
                              <input disabled={disableButton} type="number" value={item.total_question} className="form-control" placeholder='Enter 6-digit access code' id="accessCode" aria-describedby="accessHelp" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="expiryDate" className="form-label fw-bold">Expiry Date</label>
                              <input disabled={disableButton} value={item.expiry_date} type="date" className="form-control" id="expiryDate" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className='mb-3'>
                              <label className="form-label fw-bold">Generate Certificate</label>
                              <div className='d-flex gap-3'>
                                <div className="form-check">
                                  <input disabled={certificate ? false : true} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="no" defaultChecked />
                                  <label className="form-check-label" htmlFor="no">
                                    No
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input disabled={certificate ? true : false} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="yes" />
                                  <label className="form-check-label" htmlFor="yes">
                                    Yes
                                  </label>
                                  {
                                    certificate &&
                                    <input type="text" className="form-control mt-2 mb-3" value={item.generate_certificate} id="certificate" placeholder='Certificate Name' />
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className='mb-3'>
                              <label className="form-label fw-bold">Mentor Name(in Report)</label>
                              <div className='d-flex gap-3'>
                                <div className="form-check">
                                  <input disabled={name ? false : true} onClick={handleName} className="form-check-input" type="radio" name="mentorName" id="noName" defaultChecked />
                                  <label className="form-check-label" htmlFor="noName">
                                    No
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input disabled={name ? true : false} onClick={handleName} className="form-check-input" type="radio" name="mentorName" id="yesName" />
                                  <label className="form-check-label" htmlFor="yesName">
                                    Yes
                                  </label>
                                  {
                                    name &&
                                    <input type="text" className="form-control mt-2 mb-3" value={item.who_can_initiate} id="mentorname" placeholder='Mentor Name' />
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="description" className="form-label fw-bold">Instruction</label>
                              <input disabled={disableButton} type="text" className="form-control" value={item.job_instruction} placeholder='Your instruction' id="instruction" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="description" className="form-label fw-bold">Description</label>
                              <input disabled={disableButton} type="text" className="form-control" value={item.job_describtion} placeholder='Your description' id="description" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 m-auto">
                            <div className="d-flex justify-content-between mb-3">
                              <label htmlFor="question" className="form-label fw-bold">Skills: <span className='badge badge bg-secondary'>skill name</span></label>
                              <button disabled={disableButton} type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#skillModal">Add</button>
                            </div>
                          </div>
                          <div className="col-md-6 m-auto">
                            <div className="d-flex justify-content-between mb-3">
                              <label htmlFor="question" className="form-label fw-bold">Total Question: <span className='badge badge bg-secondary'>No.</span></label>
                              <button disabled={disableButton} type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <hr />
                      <div className="d-grid col-3 ms-auto">
                        <button disabled={disableButton} type="submit" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" className="btn btn-dark button">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <Skills />

      {/* External Bots */}

      <div
        className="modal fade modal-xl"
        id="exampleModalToggle3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header d-flex justify-content-between'>
              <h1 className="modal-title" id="exampleModalLabel">
                Details
              </h1>
              <div className='d-flex gap-2'>
                <button onClick={handleClone} className='btn btn-outline-secondary button'>Clone</button>
                <button onClick={handleEdit} className='btn btn-dark button'>Edit Details</button>
              </div>
            </div>
            <div className={`${styles.modal} modal-body`}>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input data-bs-target="#internalBotModal" data-bs-toggle="modal" type="radio" className="btn-check" name="btnradio" id="bot1" autocomplete="off" />
                <label className="btn btn-outline-dark" htmlFor="bot1">Internal Bot</label>

                <input type="radio" className="btn-check" name="btnradio" id="bot2" autocomplete="off" checked />
                <label className="btn btn-outline-dark" htmlFor="bot2">External Bot</label>
              </div>
              <hr />
              <div className="container mb-4">
                <div className='d-flex justify-content-center mx-auto'>
                  <div className='mb-3'>
                    <label className="form-label fw-bold fs-1">Do you need external bot ?</label>
                    <div className='d-flex justify-content-center mx-auto gap-3'>
                      <div className="form-check">
                        <input disabled={isNeeded ? false : true} onClick={handleNeeded} className="form-check-input" type="radio" name="botNeed" id="no" defaultChecked />
                        <label className="form-check-label" htmlFor="no">
                          No
                        </label>
                      </div>
                      <div className="form-check">
                        <input disabled={isNeeded ? true : false} onClick={handleNeeded} className="form-check-input" type="radio" name="botNeed" id="yes" />
                        <label className="form-check-label" htmlFor="yes">
                          Yes
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {
                  isNeeded &&
                  <div>
                    <div className='card border-dark h-100 mb-3'>
                      <h3 className={`${styles.headingNotify} card-header bg-dark text-white text-center`}>External Bot</h3>
                      <div className="card-body">
                        <form>
                          <div className="mb-2">
                            <label htmlFor="phoneNo" className="form-label  fw-bold">Phone Number List</label>
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                          <button className='btn btn-outline-dark button mb-3 me-2'>View List</button>
                          <button className='btn btn-dark button mb-3'>Upload</button>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="whoInitiate" className="form-label fw-bold">Who can Initiate ?</label>
                                <select className="form-select" value={item.who_can_initiate} id='whoInitiate'>
                                  <option value="Select">{"" ? "Select..." : item.who_can_initiate}</option>
                                  <option value="Bot">Bot</option>
                                  <option value="User">User</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="whoInitiate" className="form-label fw-bold">Timer</label>
                                <select className="form-select" value={item.timer} id='whoInitiate' aria-label="Default select example">
                                  <option value="Select">{"" ? "Select..." : item.timer}</option>
                                  <option value="15 minutes">15 minutes</option>
                                  <option value="20 minutes">20 minutes</option>
                                  <option value="30 minutes">30 minutes</option>
                                  <option value="45 minutes">45 minutes</option>
                                  <option value="60 minutes">60 minutes</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-4">
                              <div className='mb-3'>
                                <label htmlFor="email" className="form-label fw-bold">Collect Email</label>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="collectEmail" id="yes" />
                                  <label className="form-check-label" htmlFor="yes">
                                    Yes
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="collectEmail" id="no" defaultChecked />
                                  <label className="form-check-label" htmlFor="no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className='mb-3'>
                                <label htmlFor="collectResume" className="form-label fw-bold">Collect Resume</label>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="CollectResume" id="yesResume" />
                                  <label className="form-check-label" htmlFor="yesResume">
                                    Yes
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="CollectResume" id="noResume" defaultChecked />
                                  <label className="form-check-label" htmlFor="noResume">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className='mb-3'>
                                <label htmlFor="feedbackMessage" className="form-label fw-bold">Candidate Feedback Message</label>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="CandidateFeedback" id="yesFeedbackMessage" />
                                  <label className="form-check-label" htmlFor="yesFeedbackMessage">
                                    Yes
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="CandidateFeedback" id="noFeedbackMessage" defaultChecked />
                                  <label className="form-check-label" htmlFor="noFeedbackMessage">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label htmlFor="channel" className="form-label fw-bold">Channel</label>
                                <div className="form-check">
                                  <input disabled className="form-check-input" type="checkbox" id="telegram" />
                                  <label className="form-check-label" htmlFor="telegram">
                                    <FaTelegram className='me-1' style={{ color: '#0088cc' }} />Telegram
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input disabled className="form-check-input" type="checkbox" id="whatsapp" />
                                  <label className="form-check-label" htmlFor="whatsapp">
                                    <FaWhatsapp className='me-1' style={{ color: '#25d366' }} />Whatsapp
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input disabled className="form-check-input" type="checkbox" id="slack" />
                                  <label className="form-check-label" htmlFor="slack">
                                    <FaSlack className='me-1' style={{ color: '#E01E5A' }} />Slack
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input className="form-check-input" type="checkbox" defaultChecked id="form" />
                                  <label className="form-check-label" htmlFor="form">
                                    <FaWpforms className='me-1' />Form
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className='mb-3'>
                                <label htmlFor="candidateID" className="form-label fw-bold">Collect Candidate ID</label>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="CollectID" id="yesId" />
                                  <label className="form-check-label" htmlFor="yesId">
                                    Yes
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="CollectID" id="noId" defaultChecked />
                                  <label className="form-check-label" htmlFor="noId">
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
                      <div className='col-md-5'>
                        <div className='card border-dark'>
                          <h3 className={`${styles.headingNotify} card-header bg-dark text-white text-center`}>Interaction Notification</h3>
                          <div className="card-body">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="emailOne" className="form-label fw-bold">Report sent to Email-1</label>
                                <input type="email" className="form-control" value={item.report_type} id="emailOne" />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="emailTwo" className="form-label fw-bold">Report sent to Email-2</label>
                                <input type="email" className="form-control" value={item.report_type} id="emailTwo" />
                              </div>
                              <div className="mb-3">
                                <label className="form-label fw-bold" htmlFor="report">Report sent to User</label>
                                <select className="form-select" value={item.report_type} id='report' aria-label="Default select example">
                                  <option value="Select">{"" ? "Select..." : item.report_type}</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-7'>
                        <div className={`${styles.right} card border-dark`}>
                          <h3 className={`${styles.headingMsg} card-header bg-dark text-white text-center`}>Bot Message</h3>
                          <div className="card-body">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="welcome" className="form-label fw-bold">Interaction Welcome Message</label>
                                <textarea className="form-control interaction" value={item.report_type} id="welcome" rows="1"></textarea>
                              </div>
                              <div className="mb-3">
                                <label htmlFor="instruction" className="form-label fw-bold">Interaction Instruction message</label>
                                <textarea className="form-control interaction" value={item.report_type} id="instruction" rows="1"></textarea>
                              </div>
                              <div className="mb-3">
                                <label htmlFor="completion" className="form-label fw-bold">Interaction Completion Message</label>
                                <textarea className="form-control interaction" value={item.report_type} id="completion" rows="1"></textarea>
                              </div>
                              <div className="mb-3">
                                <label htmlFor="dark" className="form-label fw-bold">Bot Message</label>
                                <textarea className="form-control interaction" value={item.report_type} id="dark" rows="1"></textarea>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="d-grid col-3 ms-auto">
                      {/* <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-bs-target="#internalBotModal"
                    data-bs-toggle="modal"
                    >
                    Back
                  </button> */}
                      <button type="submit" className="btn btn-dark button">Submit</button>
                    </div>
                  </div>
                }

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </>
        ))}
    </>
  )
}

export default Details;
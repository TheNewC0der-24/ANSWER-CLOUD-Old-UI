import React, { useState } from 'react';
import styles from './InternalBot.module.css';

import internalbot from '../../assets/Images/internalbot.svg';

import { Link, useNavigate } from 'react-router-dom';

import Quesans from '../Modal/QuesAns';
import Skills from '../Modal/Skills';

const Create = () => {

    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    const [certificate, setCertificate] = useState(false);
    const [name, setName] = useState(false);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("SELECT...")

    const handleCertificate = () => {
        setCertificate(!certificate);
        setDisabled(!disabled);
    }

    const handleName = () => {
        setName(!name);
        setDisabled(!disabled);
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/externalbot');
    }

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <style jsx="true">
                {`
                    .button {
                        border-radius: 0;
                    }
                `}
            </style>
            <div className='container d-flex justify-content-between my-3'>
                <h3>Internal Bot</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className={`${styles.navigate} text-dark text-decoration-none`} >
                                aCloud
                            </Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Internal Bot</li>
                    </ol>
                </nav>
            </div>

            <div className="row my-4 mx-auto">
                <div className="col-md-4">
                    <img className='img-fluid m-auto shadow' src={internalbot} alt="internalbot" />
                </div>
                <div className='col-md-8  m-auto'>
                    <div className='card shadow border-0'>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="detail" className="form-label fw-bold">Company/Institute Name*</label>
                                            <input type="text" className="form-control" placeholder='Enter company/institute name' id="companyName" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="interaction" className="form-label fw-bold">Interaction Title*</label>
                                            <input type="text" className="form-control" placeholder='Enter Interaction title' id="interaction" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="positionCode" className="form-label fw-bold">Test ID</label>
                                            <input type="number" className="form-control" placeholder='Enter 6-digit code' id="positionCode" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="track" className="form-label fw-bold">Track/Domain :</label>
                                            <select className="form-select" id='track' aria-label="Default select example">
                                                <option value="Select...">Select...</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Service">Service</option>
                                                <option value="HR">HR</option>
                                                <option value="New Grad.">New Grad.</option>
                                                <option value="None / Others">None / Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-between mb-3">
                                            <label htmlFor="question" className="form-label fw-bold">Skills: <span className='badge badge bg-secondary'>skill name</span></label>
                                            <button type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#skillModal">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="accessCode" className="form-label fw-bold">Access Code</label>
                                            <input type="number" className="form-control" placeholder='Enter 6-digit access code' id="accessCode" aria-describedby="accessHelp" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="expiryDate" className="form-label fw-bold">Expiry Date</label>
                                            <input type="date" className="form-control" id="expiryDate" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="emailOne" className="form-label fw-bold">Report sent to Email</label>
                                            <input type="email" className="form-control" id="emailOne" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="timer" className="form-label fw-bold">Timer</label>
                                            <select className="form-select" id='timer' aria-label="Default select example">
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
                                                        <input type="text" className="form-control mt-2 mb-3" id="certificate" placeholder='Certificate Name' />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
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
                                                        <input type="text" className="form-control mt-2 mb-3" id="mentorname" placeholder='Mentor Name' />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='mb-3'>
                                            <label className="form-label fw-bold">Report Sent to Candidate</label>
                                            <div className='d-flex gap-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="reportSent" id="notSend" defaultChecked />
                                                    <label className="form-check-label" htmlFor="notSend">
                                                        No
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="reportSent" id="yesSend" />
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
                                            <label htmlFor="description" className="form-label fw-bold">Description</label>
                                            <textarea className='form-control' rows="5" id="description" placeholder='Your description'></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <div className='d-flex justify-content-between'>
                                                <label htmlFor="generalFeedback" className="form-label fw-bold">Add Insights</label>
                                                <label htmlFor="generalFeedback" className="form-label fw-bold">{count}/250</label>
                                            </div>
                                            <textarea
                                                onChange={e => setCount(e.target.value.length)}
                                                className="form-control" id="generalFeedback"
                                                minLength="50"
                                                maxLength="250"
                                                placeholder={`Example: Every human interaction is an opportunity to learn. Its also an opportunity to demonstrate your skills and expertise in a specific context and capacity.We view every professional interaction as a high-stakes game - whether you are likely to save money, generate revenue, make a process more efficient or improve your performance.These virtual interactions act as practice sessions where you can test drive real-world interactions.Experts in the world may differ on what skills matter – but they all have a common point of view.Practice is the key to improvement – and specific feedback makes improvement faster.`}
                                                rows="5"
                                            />
                                            <div className="form-text text-danger">* Minimum 50 characters are required to post the insights</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 m-auto">
                                        <div className="mb-3">
                                            <label htmlFor="mode" className="form-label fw-bold">Interaction Mode</label>
                                            <select className="form-select" onChange={handleOnChange} id='mode' aria-label="Default select example">
                                                <option value="Select">Select...</option>
                                                <option value="Audio">Audio</option>
                                                <option value="Video">Video</option>
                                                <option value="MCQ">MCQ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-auto">
                                        <div className="d-flex justify-content-between mb-3">
                                            <label htmlFor="question" className="form-label fw-bold">Total Question: <span className='badge badge bg-secondary'>No.</span></label>
                                            <button type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <div className="d-grid col-3 ms-auto">
                                <button onClick={handleClick} type="submit" className="btn btn-dark button">Submit and Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* </div> */}
            < Quesans value={value} />
            <Skills />
        </>
    )
}

export default Create;
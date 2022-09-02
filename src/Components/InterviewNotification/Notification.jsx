import React, { useState, useEffect } from 'react';
import styles from './Notification.module.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Notification = () => {
    const navigate = useNavigate();

    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    const [create, setCreate] = useState({emailOne: "", emailTwo: "", report:"", welcome:"", instruction:"", completion:"", dark:""});

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/access');
    }

    const handleSubmit = () => {
        // props.showAlert('Thank you for creating the interaction with test ID XYZ. Here is the interaction link created', 'success', 'LINK');
        navigate('/thankyou');
        setCreate({emailOne: "", emailTwo: "", report: "", welcome: "", instruction:"", completion: "", dark:""});

        //     axios.post("https://jsonplaceholder.typicode.com/todos/1", {
        //       method: "POST",
        //     headers: {
        //           'Content-Type': 'application/json',
        //         },
        //       data:(create.detail,create.job,create.positionCode)
        //   })
        //       .then(res => {
        //         console.log(res.data);
        //         setNotes(notes.concat(res.data));
        //       })
    
              
                const note = {"id": "61322f195153781a8ca8d0e06",
                  "emailOne":   create.emailOne,
                  "emailTwo": create.emailTwo,
                  "report": create.report,
                  "welcome": create.welcome,
                  "instruction": create.instruction,
                  "completion": create.completion,
                  "dark": create.dark
              };
                  console.log(note);
                  setNotes(notes.concat(note));
                  console.log("Adding a new one data")
                  console.log(notes.concat(note));
              
                  console.log("Adding a new data")
                  console.log(notes);
            }
            
    // useEffect(() => {
    //   axios.get('')
    //     .then(res => {
    //       console.log(res.data);
    //       // setData(res.data);
    //     })
    // });
            
        const handleOnChange = (e) => {
            setCreate ({...create, [e.target.name]: e.target.value});
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
            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className='col-md-5 m-auto'>
                        <div className='card border-dark h-100'>
                            <h3 className={`${styles.headingNotify} card-header bg-dark text-white text-center`}>Interaction Notification</h3>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="emailOne" className="form-label fw-bold">Report sent to Email-1</label>
                                        <input type="email" onChange={handleOnChange} name='emailOne' value={create.emailOne} className="form-control" id="emailOne" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailTwo" className="form-label fw-bold">Report sent to Email-2</label>
                                        <input type="email" onChange={handleOnChange} name='emailTwo' value={create.emailTwo} className="form-control" id="emailTwo" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold" htmlFor="report">Report sent to User</label>
                                        <select className="form-select" id='report' aria-label="Default select example" onChange={handleOnChange} name='report' value={create.report}>
                                            <option value="Select">Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-7 m-auto'>
                        <div className={`${styles.right} card h-100`} style={{ borderColor: "#acacac" }}>
                            <h3 className={`${styles.headingMsg} card-header text-center`}>Bot Message</h3>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="welcome" className="form-label fw-bold">Interaction Welcome Message</label>
                                        <textarea className="form-control interaction" id="welcome" onChange={handleOnChange} name='welcome' value={create.welcome} rows="1"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="instruction" className="form-label fw-bold">Interaction Instruction message</label>
                                        <textarea className="form-control interaction" id="instruction" onChange={handleOnChange} name='instruction' value={create.instruction} rows="1"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="completion" className="form-label fw-bold">Interaction Completion Message</label>
                                        <textarea className="form-control interaction" id="completion" onChange={handleOnChange} name='completion' value={create.completion} rows="1"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dark" className="form-label fw-bold">Bot dark Message</label>
                                        <textarea className="form-control interaction" id="dark" onChange={handleOnChange} name='dark' value={create.dark} rows="1"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end me-auto gap-3">
                    <button onClick={handleBack} className='btn btn-outline-secondary button'>Back</button>
                    <button onClick={handleSubmit} type='submit' className='btn btn-dark button'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Notification;
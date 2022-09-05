import React from 'react';
import styles from './Experience.module.css';
import { Link } from 'react-router-dom';

import experiencebot from '../../assets/Images/experiencebot.svg';

const Experience = () => {
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
                <h3>Experience Bot</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className={`${styles.navigate} text-dark text-decoration-none`} >
                                aCloud
                            </Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Experience Bot</li>
                    </ol>
                </nav>
            </div>

            <div className="row my-5 mx-auto">
                <div className="col-md-5">
                    <img className='img-fluid m-auto' src={experiencebot} alt="internalbot" />
                </div>
                <div className='col-md-7 m-auto'>
                    <div className="container">
                        <div className='card border-0'>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="experienceName" className="form-label fw-bold">Experience Name*</label>
                                                <input type="text" className="form-control" placeholder='Enter Experience name' id="experienceName" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="organizationName" className="form-label fw-bold">Organization Name*</label>
                                                <input type="text" className="form-control" placeholder='Enter organization name' id="organizationName" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="interaction" className="form-label fw-bold">Interaction Title*</label>
                                                <input type="text" className="form-control" placeholder='Enter Interaction title' id="interaction" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="experienceType" className="form-label fw-bold">Experience Type*</label>
                                                <input type="text" className="form-control" placeholder='Enter experience type' id="experienceType" />
                                            </div>
                                            {/* <div className="mb-3">
                                            <label htmlFor="mode" className="form-label fw-bold">Interaction Mode</label>
                                            <select className="form-select" id='mode' aria-label="Default select example">
                                                <option value="Select">Select...</option>
                                                <option value="Audio">Audio</option>
                                                <option value="Video">Video</option>
                                                <option value="MCQ">MCQ</option>
                                                <option value="Image">Image</option>
                                                <option value="Text">Text</option>
                                            </select>
                                        </div> */}
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <div className="d-grid col-3 ms-auto">
                                    <button type="submit" className="btn btn-dark button">Submit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
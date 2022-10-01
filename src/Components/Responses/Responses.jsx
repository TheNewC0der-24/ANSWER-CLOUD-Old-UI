import React, { useState, useEffect } from 'react';
import styles from './Responses.module.css';
import VideoModal from '../ModalSection/VideoModal.jsx';
import AudioModal from '../ModalSection/AudioModal.jsx';
// import ImageModal from '../ModalSection/ImageModal';
// import TextModal from '../ModalSection/TextModal';

import axios from 'axios';

const Responses = () => {
    const [data, setData] = useState([]);
    // const [add, setAdd] = useState([]);

    useEffect(() => {
        axios.get("response.json").then((res) => {
            console.log(res.data.results);
            setData(res.data.results);
            // setAdd(res.data.results);
          });
    });


    return (
        <>
        {data.slice(0, 1).map((item) => (
                <>
            <div className='container mt-5 mb-3'>
                <h3>Student Response</h3>
            </div>
            <div className='d-grid col-md-8 mx-auto mt-3'>
                <div className='card border-0'>
                    <div className='card-body'>
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="interactionTitle" className="col-sm-2 col-form-label fw-bold">Interaction Title : </label>
                                <div className="col-sm-10">
                                    {/* <input type="text" className="form-control" id="interactionTitle" /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">{item.job_title}</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateName" className="col-sm-2 col-form-label fw-bold">Candidate Name :</label>
                                <div className="col-sm-10">
                                    {/* <input type="text" className="form-control" id="candidateName" /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">{item.who_can_initiate}</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateId" className="col-sm-2 col-form-label fw-bold">Candidate ID:</label>
                                <div className="col-sm-10">
                                    {/* <input type="number" className="form-control" id="candidateId " /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">{item.id}</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Video</h5>
                        <button data-bs-toggle="modal" data-bs-target="#videoModal" className='btn btn-secondary'>Play</button>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            {/* <strong>Ideal Answer :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis earum dolor quibusdam
                            reiciendis soluta adipisci fugit voluptatem qui sequi vero assumenda error vitae, hic sint ab iusto eius atque? */}
                            {item.track}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Audio</h5>
                        <button data-bs-toggle="modal" data-bs-target="#audioModal" className='btn btn-secondary'>Play</button>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            {/* <strong>Ideal Answer :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis earum dolor quibusdam
                            reiciendis soluta adipisci fugit voluptatem qui sequi vero assumenda error vitae, hic sint ab iusto eius atque? */}
                            {item.track}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response MCQ</h5>
                        <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="option1" />
                            <label className="form-check-label" htmlFor="option1">
                                Option 1
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="option2" />
                            <label className="form-check-label" htmlFor="option2">
                                Option 2
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="option3" defaultChecked />
                            <label className="form-check-label" htmlFor="option3">
                                Option 3
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="option4" />
                            <label className="form-check-label" htmlFor="option4">
                                Option 4
                            </label>
                        </div>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            <strong>Correct Answer :</strong>
                             {/* Option 1 */}
                            {item.id}
                        </div>
                    </div>
                </div>
            </div>
            </>
            ))}
            {/* <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                <div className="card-body">
                        <h5 className='card-title'>Response Image</h5>
                        <button data-bs-toggle="modal" data-bs-target="#imageModal" className='btn btn-secondary'>Play</button>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            <strong>Ideal Answer :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis earum dolor quibusdam
                            reiciendis soluta adipisci fugit voluptatem qui sequi vero assumenda error vitae, hic sint ab iusto eius atque?
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Text</h5>
                        <button data-bs-toggle="modal" data-bs-target="#textModal" className='btn btn-secondary'>Play</button>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            <strong>Ideal Answer :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis earum dolor quibusdam
                            reiciendis soluta adipisci fugit voluptatem qui sequi vero assumenda error vitae, hic sint ab iusto eius atque?
                        </div>
                    </div>
                </div>
            </div> */}
            <VideoModal />
            <AudioModal />
            {/* <ImageModal />
            <TextModal /> */}
        </>
    )
}

export default Responses;
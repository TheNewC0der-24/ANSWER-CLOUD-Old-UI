import React, { useState , useEffect} from 'react';
import styles from './ThankYou.module.css';
import { useNavigate } from 'react-router-dom';

// import thankyou from "../../assets/Images/thankyou.svg"
import thankyou from "../../assets/Images/thankForm.svg"
import confuse from "../../assets/Images/confuse.png"

import { FaStar } from 'react-icons/fa';

const colors = {
    orange: '#FFBA5A',
    grey: "#a9a9a9"
}

function ThankYou() {

    const navigate = useNavigate();

    const stars = Array(5).fill(0);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(undefined);
const [sentence,setSentence] = useState("");
    const handleClick = (value) => {
        setRating(value);
    };

    const handleMouseOver = (value) => {
        setHover(value);
    };

    const handleMouseLeave = () => {
        setHover(undefined);
    };
    const arr= [ "Congratulations you displayed an Architect personality type!" ,
    "Congratulations you displayed a Logician personality type!" ,
    "Congratulations you displayed a Commander personality type!" ,
    "Congratulations you displayed a Debater personality type!" ,
    "Congratulations you displayed an Advocate personality type!" ,
    "Congratulations you displayed a Mediator personality type!" ,
    "Congratulations you displayed a Protagonist personality type!" ,
    "Congratulations you displayed a Campaigner personality type!" ,
    "Congratulations you displayed a Logistician personality type!" ,
   "Congratulations you displayed a Defender personality type!" ,
   "Congratulations you displayed an Executive personality type!" ,
  "Congratulations you displayed a Consul personality type!" ,
    "Congratulations on displaying a Virtuoso personality type!" ,
     "Congratulations, you displayed an Adventurer personality type!" ,
   "Congratulations you displayed a Debater Entrepreneur personality type!" ,
    "Congratulations you displayed an Entertainer personality type!"];
    useEffect(()=>{setSentence(arr[Math.floor(Math.random()*16)])},arr) ;
    
    
    



    return (
        <>
            <div className="d-grid col-md-7 mt-5 mx-auto">
                <div className="card border-0 shadow">
                    <div className='card-img-top bg-light'>
                        <img src={thankyou} className="d-flex mx-auto img-fluid" width={300} alt="thankyou" />
                    </div>
                    <div className="card-body text-center">
                        <h5 className='my-3'>Great, your interaction is now complete!</h5>
                        <p>
                            This will now be analyzed by our AI
                            models (and coaches/HR managers, if applicable). You or your administrator will receive a
                            detailed feedback on the same within next 72 hours.
                        </p>
                        <div className="d-flex justify-content-center mx-auto gap-3">
                            <button className='btn btn-dark' onClick={() => navigate("/response")}>View Your Response & Answers</button>
                        </div>
                        <div className='text-sm mt-3'>Available in 30 seconds</div>
                    </div>
                </div>
            </div>

            <div className={`${styles.container} d-grid col-md-7 mx-auto my-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={confuse} alt="confused" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <p align="justify">
                            {sentence}
                            </p>
                            <button type="button" className="btn btn-success float-end" style={{ backgroundColor: "#282a2d", border: "#282a2d" }}>Share</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-grid col-md-7 mt-4 mx-auto">
                <div className="card border-0 shadow">
                    <div className="card-body text-center">
                        <h5>How was your test taking experience?</h5>
                        <div style={styles.stars} className="my-3">
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={30}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer"
                                        }}
                                        color={(hover || rating) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                )
                            })}
                        </div>
                        <h5 className='mt-4'>Anything else you want to tell us?</h5>
                        <div className="mb-3 w-75 mx-auto">
                            <textarea class="form-control" id="feedback" placeholder='Please write your feedback here...' rows="4"></textarea>
                        </div>
                        <button className='btn btn-primary'>Share your feedback</button>
                    </div>
                </div>
                <p className='text-center my-2'>You may close this window</p>
            </div>

            {/* <div className={`${styles.container} container mt-5 mb-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={thankyou} alt="ThankYou" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3 className='mb-3'>Thank you!</h3>

                            <p className='mt-4 text-dark'>Now you can close this window!!</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ThankYou;
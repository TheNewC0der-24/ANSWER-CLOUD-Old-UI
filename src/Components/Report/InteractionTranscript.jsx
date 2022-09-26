import React from "react";
import styles from "./InteractionTranscript.module.css";

const InteractionTranscript = () => {
  return (
    <>
      <div className="container">
        <div className=' d-flex justify-content-between'>
          <h1 className="mb-3">
            <span className="badge bg-dark text-center" style={{ borderRadius: "0" }}><span className='me-1 fw-bold' style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer cloud transcript</span>
          </h1>
          <h3><span className="badge bg-danger" style={{ borderRadius: "0" }}>Experimental</span></h3>
        </div>
        <h5>Question#1 :</h5>
        <div className={styles.para}></div>
        <h5>Question#2 :</h5>
        <div className={styles.para}></div>
        <h5>Question#3 :</h5>
        <div className={styles.para}></div>
        <h5>Question#4 :</h5>
        <div className={styles.para}></div>
      </div>
    </>
  );
};

export default InteractionTranscript;

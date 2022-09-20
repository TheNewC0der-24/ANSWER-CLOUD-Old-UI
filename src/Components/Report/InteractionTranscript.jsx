import React from "react";
import styles from "./InteractionTranscript.module.css";

const InteractionTranscript = () => {
  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-5" style={{ color: "#0b3c47" }}>
          <span className="fw-bold me-1" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer cloud transcript{" "}
          <span className="badge bg-danger">Experimental</span>
        </h3>
        <h5>Question : 1</h5>
        <div className={styles.para}></div>
        <h5>Question : 2</h5>
        <div className={styles.para}></div>
        <h5>Question : 3</h5>
        <div className={styles.para}></div>
        <h5>Question : 4</h5>
        <div className={styles.para}></div>
      </div>
    </>
  );
};

export default InteractionTranscript;

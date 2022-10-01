import React from 'react';
import styles from "./FeedbackSnapshot.module.css";

const FeedbackSnapshot = () => {
    return (
        <>
            <div className='container my-5' style={{ height: "470px" }}>
                <h1 className="my-5">
                    <span className="badge" style={{ borderRadius: "0", backgroundColor: "#414141" }}>
                        <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer ratings snapshot
                    </span>
                </h1>
                <p align="justify" className={styles.para}>Our models suggest an overall rating of{" "}
                    {/* “((Interaction_score))”,"((Interaction_ID))" for the */}
                    “B” for the candidate. Based on the responses, we also report a comprehensive rating of the candidate across
                    multiple skill dimensions  (these are elaborated later) as displayed in the table below. Some of the natural
                    pointers on how the candidates might improve are also suggested in the pages that follow. Few selected skills are
                    considered in this overall rating, while others are a part of general parameters that are added for general
                    feedback purposes. All power skills selected as part of overall ratings contain specific suggestions on how to
                    improve them.(detailed below)

                </p>
            </div>
        </>
    )
}

export default FeedbackSnapshot;
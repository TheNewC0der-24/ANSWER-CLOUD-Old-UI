import React from 'react';
import styles from "./FeedbackSnapshot.module.css";

const FeedbackSnapshot = () => {
    return (
        <>
            <div className='container my-1' style={{ height: "250px" }}>
               <div className='d-flex justify-content-between'><h1 className="m-3 mx-1" >
                    <span className="badge" style={{ borderRadius: "0", backgroundColor: "#414141" }}>
                        <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer ratings snapshot
                    </span>
                </h1>
                <h3 className="my-4"><span className="badge bg-success text-white" style={{ borderRadius: "0",textDecoration:'none' , }}><a href='https://www.google.com/' className='text-white' style={{textDecoration:'none'}} target='_blank'>Report Background</a></span></h3></div>
                <p align="justify" className={styles.para}>Our models suggest an overall rating of{" "}
                    {/* “((Interaction_score))”,"((Interaction_ID))" for the */}
                    Our models suggest an overall rating of "B" for the candidate. Based on the responses, we also report rankings of the candidate across multiple power skill dimensions that are elaborated in the sections that follow.
                    {/* “B” for the candidate. Based on the responses, we also report a comprehensive rating of the candidate across
                    multiple skill dimensions  (these are elaborated later) as displayed in the table below. Some of the natural
                    pointers on how the candidates might improve are also suggested in the pages that follow. Few selected skills are
                    considered in this overall rating, while others are a part of general parameters that are added for general
                    feedback purposes. All power skills selected as part of overall ratings contain specific suggestions on how to
                    improve them.(detailed below) */}

                </p>
           
            </div>
        </>
    )
}

export default FeedbackSnapshot;
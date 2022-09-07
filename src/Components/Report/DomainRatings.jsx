import React from 'react'

const DomainRatings = () => {
    return (
        <>
            <div className="container">
                <h1 className="mb-5">
                    <span className="badge text-center" style={{ backgroundColor: "#0e1013", borderRadius: "0" }}>Domain Ratings</span>
                </h1>
                {/* <div className="card h-100" style={{ border: "2.5px solid #000" }}>
                    <div className="card-body" style={{ color: "#0b3c47" }}> */}
                <div style={{ fontFamily: "Mukta, sans-serif", fontSize: "22px" }}>
                    <p align="justify">
                        Our models are able to  determine a proprietary sales quotient of each candidate specific
                        to this particular interaction. It is assigned a rating of "Sales_Quotient_Score" "Interaction_ID".
                        The models recommend that a score of 80% or higher will indicate a high degree of candidate alignment to
                        Sales situations. Please discuss with your coach about including strong sales vocabulary in our conversation.
                    </p>
                    <p align="justify">
                        Our models suggest an overall rating of “Aggregate_Score_Cohort”, "This aggregate score consists of ratings on
                        various power skills that are identified and listed in the chart. The spider chart is automatically generated
                        depending upon the power skills that our AI models can detect and predict.
                    </p>
                </div>
            </div>
            {/* </div>
            </div > */}
        </>
    )
}

export default DomainRatings
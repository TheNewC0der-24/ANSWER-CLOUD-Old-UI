import React from 'react'

const DomainRatings = () => {
    return (
        <>
            <div className="container mt-3" style={{ height: '350px' }}>
                <div className=' d-flex justify-content-between'>
                    <h1 className="mb-3">
                        <span className="badge bg-dark text-center" style={{ borderRadius: "0" }}><span className='me-1 fw-bold' style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer domain ratings</span>
                    </h1>
                    <h3><span className="badge bg-danger" style={{ borderRadius: "0" }}>Experimental</span></h3>
                </div>
                <div style={{ fontFamily: "Mukta, sans-serif", fontSize: "22px" }}>
                    <p align="justify">
                        Our experimental models are able to detect proprietary domain specific ratings for these interactions. The domain ratings indicate proficiency of the candidate in specific domains such as sales, operations, HR and others. If the domain ratings are calculated for your report it would feature in this section. At this time it does not affect your overall ratings and may be used as an additional indicator of competency perception. Please use this score with discretion along with the mentor guidance at this time. If this score is not printed at this time, there is nothing further to be done. It would just indicate that the feature is still in development and may be available in your next interaction with us. Thank you for your patience as we continuously improve our models for more insights on people-performance at the workplace.
                    </p>
                </div>
            </div>
        </>
    )
}

export default DomainRatings
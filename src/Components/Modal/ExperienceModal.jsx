import React, { useState } from 'react';

const ExperienceModal = () => {

    const [noOfRows, setNoOfRows] = useState(1);

    const style = {
        height: "200px",
        width: "100%",
        overflow: "auto",
    };

    return (
        <>
            <style jsx="true">
                {`
            .button {
                border-radius: 0;
            }
        `}
            </style>
            <div
                className="modal fade modal-xl"
                id="experienceModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Interaction</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div style={style}>
                                <table className="table">
                                    <thead>
                                        <tr className="table-secondary">
                                            <th className="text-center" scope="col">
                                                Experience Type:
                                            </th>
                                            <th className="text-center" scope="col">
                                                Interaction Title:
                                            </th>
                                            <th className="text-center" scope="col">
                                                Interaction Mode:
                                            </th>
                                            <th className="text-center" scope="col">
                                                Interaction Link:
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...Array(noOfRows)].map((index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>
                                                        <input type="text" className="form-control" placeholder='Enter experience type' id="experienceType" />
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" placeholder='Enter Interaction title' id="interaction" />
                                                    </td>
                                                    <td>
                                                        <select
                                                            className="form-select"
                                                            id="interactionMode"
                                                            aria-label="Default select example"
                                                        >
                                                            <option value="Select...">Select...</option>
                                                            <option value="Audio">Audio</option>
                                                            <option value="Video">Video</option>
                                                            <option value="MCQ">MCQ</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input type="url" className="form-control" placeholder='Paste link here' id="interactionLink" />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-success button me-2"
                                    onClick={() => setNoOfRows(noOfRows + 1)}
                                >
                                    Add
                                </button>
                                <button
                                    disabled={noOfRows <= 1}
                                    type="submit"
                                    className="btn btn-danger button"
                                    onClick={() => setNoOfRows(noOfRows - 1)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary mx-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#internalBotModal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-dark mx-1">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceModal;
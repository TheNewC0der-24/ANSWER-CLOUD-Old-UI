import React from "react";
import { skills } from "../../assets/Skills/skills";

const Track = (props) => {
  const style = {
    overflow: 'auto',
    height: '150px'
  }

  return (
    <>
      <div
        className="modal fade modal-lg"
        id="skillModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Skills
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={style}>
              <div className="container">
                <div className="d-flex justify-content-center gap-2 flex-wrap" style={{ cursor: "pointer" }}>
                  {skills.map((item) => (
                    <h5 onClick={() => props.handleClickSkill(item.name)}>
                      <span key={item.id} className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}>{item.name}</span>
                    </h5>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-1"
                  // data-bs-dismiss="modal"
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
      </div >
    </>
  );
};

export default Track;

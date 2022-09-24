import React from "react";
import video from "../../assets/Videos/Video-1.mp4";

const VideoModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Response Video</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                {/* <iframe width="703" height="395" src="https://www.youtube.com/embed/GedLli_YXEI" title="If The Weeknd made lofi hip hop radio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <video
                  // src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  src={video}
                  title="YouTube video"
                  allowFullScreen
                  controls
                ></video>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-dark">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;

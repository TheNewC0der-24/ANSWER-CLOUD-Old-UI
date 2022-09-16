import React, { useRef, useEffect, useState } from 'react';
import styles from './Question.module.css';
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";
import video1 from '../../assets/Videos/Video-1.mp4';

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} className="w-100" height={300} autoPlay />;
};

const Question = () => {
  const [isActive, setIsActive] = useState(false);

  const [time, setTime] = useState({ s: 0, m: 2 });
  const [interv, setInterv] = useState();

  const {
    status,
    previewStream,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: true,
    audio: true,
    echoCancellation: true
  });

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/audiorecording');
  }

  const handleStartRecording = () => {
    if (!isActive) {
      startRecording();
    } else {
      pauseRecording();
    }

    setIsActive(!isActive);
    run();
    setInterv(setInterval(run, 1000));
    document.getElementById("instruction").innerHTML = isActive ? "Paused" : "Started";
  }

  const handleStopRecording = () => {
    stopRecording();
    setIsActive(isActive);
    pauseRecording();
    clearInterval(interv);
    document.getElementById("instruction").innerHTML = "Saved";
    document.getElementById("note").innerHTML = "Your answer is Saved";
    // document.getElementById("instruction").innerHTML = "Stopped";
  }

  var updatedS = time.s, updatedM = time.m;

  const run = () => {
    if (updatedM === 0 && updatedS === 0) {
      // stopRecording();
      handleStopRecording();
      document.getElementById("instruction").innerHTML = "Saved";
      return;
    }
    if (updatedS === 0) {
      updatedM--;
      updatedS = 60;
    }
    updatedS--;
    return setTime({ m: updatedM, s: updatedS });
  }

  return (
    <>
      <div className='container my-4'>
        <div className="card border-0 shadow">
          <div className="card-body">
            <h3 className='mb-4'>1/4</h3>
            <h5>Tell me about yourself ?</h5>
            <h6>Hint : Speak about your educational background, skills, experience, etc.</h6>
            <hr />
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-wrap gap-2'>
                <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause" : "Answer"}</button>
                {
                  isActive && (
                    <button onClick={handleStopRecording} className="btn btn-danger">Save Answer</button>

                  )
                }
                <button className={`${isActive ? "" : "d-none"} btn btn-outline-dark`} onClick={() => window.location.reload()}>Retake Answer</button>
              </div>
              <div className='d-flex flex-wrap gap-2'>
                <button className="btn btn-outline-secondary">Back</button>
                <button onClick={handleNext} className='btn btn-dark'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className={`${styles.row} row`}>
          <div className="col-md-6">
            <div className={`${styles.card} card bg-dark h-100 border-0 shadow`}>
              <h5 className="card-header bg-dark text-white" style={{ borderRadius: "0", borderBottom: "2px solid #fff" }}>Video Context</h5>
              <div className="card-body">
                <div className="ratio ratio-16x9">
                  <video
                    src={video1}
                    title="YouTube video"
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-dark h-100 border-0 bg-light shadow">
              <div className='card-header bg-dark text-white d-flex flex-wrap justify-content-between' style={{ borderRadius: "0", borderBottom: "2px solid #fff" }}>
                <h5 id='instruction'>Answer Box</h5>
                <div className='d-flex flex-wrap gap-2'>
                  <span>time remaining for this question</span><h5>{time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;{time.s >= 10 ? time.s : "0" + time.s}</h5>
                </div>
              </div>
              <div className="card-body">
                <h5 className={`${isActive && 'd-none'} text-center alert alert-primary`} id="note">Answer recording starts after you hit "Answer" button above.</h5>
                {
                  isActive && (
                    <div className="ratio ratio-16x9">
                      {status !== "stopped" ? (
                        <VideoPreview stream={previewStream} />
                      ) : (
                        <video src={mediaBlobUrl} controls />
                      )}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <h3>1/4</h3>
                <h5>Tell me about yourself ?</h5>
                <h6>Hint : Speak about your educational background, skills, experience, etc.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, dolore. Temporibus aliquid voluptas perferendis sed at obcaecati delectus iusto sapiente sequi aliquam tenetur ea nisi adipisci officiis animi voluptates nostrum dolorum laudantium, molestiae quos eum. Et officiis, repellendus error non alias ut harum, a molestias eligendi numquam itaque architecto provident!
                </h6>
                <hr />
                <div className='d-flex justify-content-between'>
                  <div className='d-flex flex-wrap gap-2'>
                    <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause" : "Answer"}</button>
                    {
                      isActive && (
                        <button onClick={handleStopRecording} className="btn btn-danger">Save Answer</button>

                      )
                    }
                    <button className={`${isActive ? "" : "d-none"} btn btn-outline-dark`} onClick={() => window.location.reload()}>Retake Answer</button>
                  </div>
                  <div className='d-flex flex-wrap gap-2'>
                    <button onClick={handleNext} className='btn btn-dark'>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.card} card h-100 bg-dark shadow border-0`}>
              <div className='card-header bg-dark text-white d-flex flex-wrap justify-content-between' style={{ borderRadius: "0", borderBottom: "2px solid #fff" }}>
                <h5 id='instruction'>Answer Box</h5>
                <div className='d-flex flex-wrap gap-2'>
                  <span>time remaining for this question</span><h5>{time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;{time.s >= 10 ? time.s : "0" + time.s}</h5>
                </div>
              </div>
              <div className="card-body">
                <h5 className={`${isActive && 'd-none'} text-center alert alert-primary`} id="note">Answer recording starts after you hit "Answer" button.</h5>
                {
                  isActive && (
                    <div className="ratio ratio-16x9">
                      {status !== "stopped" ? (
                        <VideoPreview stream={previewStream} />
                      ) : (
                        <video src={mediaBlobUrl} controls />
                      )}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className={`${styles.container} container my-5`}>
        <div className="row">
          <div className="col-md-4 bg-dark">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <h5 className='card-header bg-white text-center w-100 my-3 p-2' id='instruction'>Idle</h5>
              {status !== "stopped" ? (
                <VideoPreview stream={previewStream} />
              ) : (
                <video className='w-100' src={mediaBlobUrl} height={300} controls />
              )}
              <button className='btn btn-light mt-3' onClick={() => window.location.reload()}>Retake</button>
              <div className='d-flex justify-content-center mx-auto gap-3 my-3'>
                <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause Recording" : "Start Recording"}</button>
                <button onClick={handleStopRecording} className="btn btn-danger">Stop Recording</button>
              </div>
            </div>
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h4>How you are doing ?</h4>
              <hr />
              <button onClick={handleNext} className="btn btn-dark float-end mb-3">Save and Next</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Question;

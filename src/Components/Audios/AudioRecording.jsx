import React, { useState } from 'react';
import styles from './AudioRecording.module.css';
import { useNavigate } from "react-router-dom";
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
// import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecording = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const [state, setState] = useState({
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    }
  });

  const handleAudioStop = (data) => {
    console.log(data)
    setState({ audioDetails: data });
  }

  const handleCountDown = (data) => {
    console.log(data);
  }

  function handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    setState({ audioDetails: reset });
  }

  // const handleClickStart = () => {
  //   if (!isActive) {
  //     startRecording();
  //   } else {
  //     pauseRecording();
  //   }

  //   setIsActive(!isActive);
  // }

  // const handleClickStop = () => {
  //   pauseRecording();
  //   stopRecording();
  //   setIsActive(!isActive);
  // }


  // const [second, setSecond] = useState("00");
  // const [minute, setMinute] = useState("00");
  // const [isActive, setIsActive] = useState(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   let intervalId;

  //   if (isActive) {
  //     intervalId = setInterval(() => {
  //       const secondCounter = counter % 60;
  //       const minuteCounter = Math.floor(counter / 60);

  //       let computedSecond =
  //         String(secondCounter).length === 1
  //           ? `0${secondCounter}`
  //           : secondCounter;
  //       let computedMinute =
  //         String(minuteCounter).length === 1
  //           ? `0${minuteCounter}`
  //           : minuteCounter;

  //       setSecond(computedSecond);
  //       setMinute(computedMinute);

  //       setCounter((counter) => counter + 1);
  //     }, 650);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [isActive, counter]);

  // function stopTimer() {
  //   setIsActive(false);
  //   setCounter(0);
  //   setSecond("00");
  //   setMinute("00");
  // }

  // const {
  //   startRecording,
  //   stopRecording,
  //   pauseRecording,
  //   mediaBlobUrl
  // } = useReactMediaRecorder({
  //   video: false,
  //   audio: true,
  //   echoCancellation: true
  // });

  const handleAnswer = () => {
    setActive(!active);
  }

  const handleNext = () => {
    navigate('/mcq')
  }

  return (
    <>
      <div className="container my-4">
        <div className="card border-0 shadow">
          <div className="card-body">
            <h3 className='mb-4'>1/4</h3>
            <h5>What is Axios ?</h5>
            <h6>Hint : react library</h6>
            <hr />
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-wrap gap-2'>
                <button disabled={active ? true : false} onClick={handleAnswer} className='btn btn-success'>Answer</button>
              </div>
              <div className='d-flex flex-wrap gap-2'>
                <button className="btn btn-outline-secondary">Back</button>
                <button onClick={handleNext} className='btn btn-dark'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 h-100 shadow" style={{ backgroundColor: "#212121" }}>
              <h5 className="card-header bg-dark text-white" style={{ backgroundColor: "#212121", borderRadius: "0", borderBottom: "2px solid #fff" }}>Audio Context</h5>
              <div className="card-body">
                <div className={`${styles.audio} text-center`}>
                  <audio controls preload="none">
                    <source src="https://pwdown.com/10203/Yeh Ishq Hai - Rangoon (Arijit Singh) 320Kbps.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 h-100 shadow" style={{ backgroundColor: "#212121" }}>
              <h5 className="card-header text-white" style={{ backgroundColor: "#212121", borderRadius: "0", borderBottom: "2px solid #fff" }}>Answer Box</h5>
              <div className="card-body">
                <h5 className={`${active && 'd-none'} text-center alert alert-primary my-5`} id="note">Answer recording starts after you hit "Answer" button above.</h5>
                {
                  active && (
                    <div>
                      <Recorder
                        record={true}
                        hideHeader
                        uploadButtonDisabled={true}
                        clearButtonDisabled={true}
                        audioURL={state.audioDetails.url}
                        showUIAudio
                        handleAudioStop={data => handleAudioStop(data)}
                        handleCountDown={data => handleCountDown(data)}
                        handleReset={() => handleReset()}
                        mimeTypeToUseWhenRecording={`audio/webm`}
                      />
                      <h5 className='text-white text-center'>Press the "Microphone" to record your audio</h5>
                    </div>
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4 bg-dark">
            <div className="d-flex flex-column">
              <div className='d-flex justify-content-center'>
                <video src={mediaBlobUrl} controls />

                <Recorder
                  record={true}
                  hideHeader
                  uploadButtonDisabled={true}
                  clearButtonDisabled={true}
                  audioURL={state.audioDetails.url}
                  showUIAudio
                  handleAudioStop={data => handleAudioStop(data)}
                  handleAudioUpload={data => handleAudioUpload(data)}
                  handleCountDown={data => handleCountDown(data)}
                  handleReset={() => handleReset()}
                  mimeTypeToUseWhenRecording={`audio/webm`}
                />
              </div>
              <div className='d-flex justify-content-center fs-1 text-white'>
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
              </div>
              <h5 className='text-white text-center'>Press the Start to record your audio</h5>
              <div className='d-flex justify-content-between my-3'>
                <button className='btn btn-light' onClick={stopTimer}>Retake</button>
                <div className='d-flex gap-2'>
                  <button className={`${isActive ? "btn-warning" : "btn-success"} btn `} onClick={handleClickStart}>{isActive ? "Pause" : "Start"}</button>
                  <button className='btn btn-danger' onClick={handleClickStop}>Stop</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h4>What is axios ?</h4>
              <hr />
              <button onClick={handleNext} className="btn btn-dark float-end mb-3">Save and Next</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default AudioRecording

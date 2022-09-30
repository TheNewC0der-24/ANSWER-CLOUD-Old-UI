import React from "react";
import styles from "./GeneralVariables.module.css";

import { AiFillDashboard } from "react-icons/ai";
import { FaVolumeUp, FaCloud, FaRibbon } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";

import wc from "../../assets/Images/wordcloud.jpg";

// import ReactApexChart from 'react-apexcharts';

const GeneralVariables = () => {
  // const [volume, setVolume] = useState({
  //     series: [76, 67, 61, 90, 45],
  //     name: "Volume",
  //     options: {
  //         chart: {
  //             height: "100%",
  //             width: "100%",
  //             type: 'radialBar',
  //         },
  //         plotOptions: {
  //             radialBar: {
  //                 offsetY: 0,
  //                 startAngle: -90,
  //                 endAngle: 90,
  //                 hollow: {
  //                     background: 'transparent',
  //                     image: undefined,
  //                 },
  //                 dataLabels: {
  //                     name: {
  //                         show: true,
  //                     },
  //                     value: {
  //                         show: true,
  //                     }
  //                 }
  //             }
  //         },
  //         title: {
  //             text: 'VOLUME SCALE',
  //             align: 'center',
  //         },
  //         colors: ['#dc3545', '#ffc107', '#198754', '#ffc107', '#dc3545'],
  //         labels: ['Danger', 'Warning', 'Success', 'Warning', 'Danger'],
  //         legend: {
  //             show: true,
  //             fontSize: '16px',
  //             position: 'top',
  //             labels: {
  //                 useSeriesColors: true,
  //             },
  //             markers: {
  //                 size: 0
  //             },
  //             formatter: function (seriesName, opts) {
  //                 return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  //             },
  //         },
  //         responsive: [{
  //             breakpoint: 480,
  //             options: {
  //                 chart: {
  //                     width: '100%',
  //                     height: '100%',
  //                 }
  //             }
  //         }]
  //     },
  // });

  // const [pitch, setPitch] = useState({
  //     series: [60, 70, 50, 70, 45],
  //     name: "Pitch",
  //     options: {
  //         chart: {
  //             height: "100%",
  //             width: "100%",
  //             type: 'radialBar',
  //         },
  //         plotOptions: {
  //             radialBar: {
  //                 offsetY: 0,
  //                 startAngle: -90,
  //                 endAngle: 90,
  //                 hollow: {
  //                     background: 'transparent',
  //                     image: undefined,
  //                 },
  //                 dataLabels: {
  //                     name: {
  //                         show: true,
  //                     },
  //                     value: {
  //                         show: true,
  //                     }
  //                 }
  //             }
  //         },
  //         title: {
  //             text: 'PITCH RANGE',
  //             align: 'center',
  //         },
  //         colors: ['#dc3545', '#ffc107', '#198754', '#ffc107', '#dc3545'],
  //         labels: ['Danger', 'Warning', 'Success', 'Warning', 'Danger'],
  //         legend: {
  //             show: true,
  //             fontSize: '16px',
  //             position: 'top',
  //             labels: {
  //                 useSeriesColors: true,
  //             },
  //             markers: {
  //                 size: 0
  //             },
  //             formatter: function (seriesName, opts) {
  //                 return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  //             },
  //         },
  //         responsive: [{
  //             breakpoint: 480,
  //             options: {
  //                 chart: {
  //                     width: '100%',
  //                     height: '100%',
  //                 }
  //             }
  //         }]
  //     },
  // });

  return (
    <>
      <div className="container my-5">
        <h1 className="my-5">
          <span className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}>
            <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer cloud parameters
          </span>
        </h1>
        <div className={styles.para}>
          <p className="my-5 text-center">
            <em>
              Please note that the parameters in this section are some of the
              raw data that may be used for calculation of other scores but they
              are not directly an input to the overall cohort ranking. This is
              because as a standalone input they do not give us a representative
              level of performance. We are including this in the report for the
              sake of completeness so that the aspirant has an advanced
              understanding of their performance.
            </em>
          </p>
          <div className={`${styles.card} card my-5`}>
            <h3 className={`${styles.cardHeader} card-header fw-bold`}>
              <AiFillDashboard className={`me-2 ${styles.icon}`} />
              Pace
            </h3>
            <div className="card-body" style={{ fontSize: "30px" }}>
              <p align="justify" className="card-text">
                <strong>Words per minute : </strong>pace
              </p>
              <p align="justify" className="card-text">
                <strong>Ideal words per minute : </strong> 140-160
                words/minute
              </p>
              <p align="justify" className="card-text">
                <strong>Why consider this :</strong> Speaking too slowly or
                too quickly denotes nervousness on part of the speaker.
                Please note that this is the average pace across the entire
                interaction (not average of each response) This will help
                you determine if you need to control the pace as you go
                through these interactions. We have provided an ideal
                benchmark range for comparison purposes. How to improve the
                scores? Try to practice your pace by comparing against the
                colored range bar above.
              </p>
            </div>

          </div>
          <div className={`${styles.card} card my-5`}>
            <h3 className={`${styles.cardHeader} card-header fw-bold`}>
              <FaRibbon className={`${styles.icon} me-2`} />
              Gesture
            </h3>
            <div className="card-body">
              <p align="justify" className="card-text">
                <strong>Gesture Score : </strong>Estimated_Gesture_score
              </p>
              <p align="justify" className="card-text">
                <strong>Why Consider this : </strong>Hand gestures play an
                important part in anyone’s personality. Due to limitations
                of the camera recording it may not be always possible to
                capture them depending on how the interaction is recorded. A
                good score indicates that the aspirant used hand gestures to
                positively reinforce responses. How to score better? Just
                use hands naturally like in any other physical interaction
                even for a virtual experience. If this score is blank for
                you - it indicates an audio interaction.
              </p>
            </div>
          </div>
          <div style={{ height: "1600px" }}>
            <div className={`${styles.card} card my-5 `}>
              <h3 className={`${styles.cardHeader} card-header fw-bold`}>
                <FaCloud className={`${styles.icon} me-2`} />
                Word Cloud
              </h3>
              <div className="card-body">
                <img src={wc} alt="wordCloud" />
                <p align="justify" className="card-text">
                  <strong>Why Consider this : </strong>Please take a moment to
                  reflect on the words used in this virtual interaction. This
                  also reflects how the other speakers in the situation
                  perceive you and what they are likely to remember about you
                  once the interaction is over. Please take a moment to
                  reflect and craft alternate answers if these are not the
                  words and context you wish to convey to your audience.
                </p>
              </div>
            </div>
            <div className={`${styles.card} card my-5 `}>
              <h3 className={`${styles.cardHeader} card-header fw-bold`}>
                <FaVolumeUp className={`me-2 ${styles.icon}`} />
                Volume & Pitch
              </h3>
              <div className="card-body">
                <div className={styles.main}>
                  <div className={styles.col1}>
                    <p align="justify" className="card-text">
                      <strong>Volume Scale (0-100) : "volume"</strong>
                    </p>
                    <p align="justify" className="card-text my-5">
                      <strong>Ideal Volume Scale : </strong>70-80 Db
                    </p>
                  </div>
                  <div className={styles.col2}>
                    <p align="justify" className="card-text">
                      <strong>Pitch Range : "pitch"</strong>
                    </p>
                    <p align="justify" className="card-text my-5">
                      <strong>Ideal Pitch Range : </strong>650-850 Hertz
                    </p>
                    {/* <ReactApexChart
                                    setState={setPitch}
                                    options={pitch.options}
                                    series={pitch.series}
                                    type="radialBar"
                                /> */}
                  </div>
                </div>
                <p align="justify" className="card-text">
                  <strong>Why consider this :</strong> The volume, pitch and voice
                  modulation make it easier for us to be understood by others
                  easily. Scientific research has established the boundaries of
                  the voice and pitch that are sounds likable to the human ears.
                  The values above indicate whether your volume and pitch are
                  within the range or are outside of it. In some situations of
                  stress and discomfort, we are to go beyond the ideal range
                  displayed above. The performance rating dot plot should help you
                  guide on your performance.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.card} card my-5 `}>
            <h3 className={`${styles.cardHeader} card-header fw-bold`}>
              <BsEmojiSmileFill className={`${styles.icon} me-2`} />
              Sentiment Analysis
            </h3>
            <div className="card-body">
              <p align="justify" className="card-text">
                <strong>Aggregate dominant Sentiment : </strong>
                Sentiment_score
              </p>
              <p align="justify" className="card-text">
                <strong>Why consider this : </strong>This shows how your
                emotions are understood by others. While most aspirant’s
                speech shows positive emotions naturally, in few cases it
                might be perceived as negative. Candidates should consider
                this to self analyze. While there are no specific actions to
                control sentiment and sound happier & positive, an estimate
                of where your current performance falls in the range can
                offer important clues about your context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralVariables;

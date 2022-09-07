import React from 'react';
import styles from "./GeneralVariables.module.css";

import { AiFillDashboard } from "react-icons/ai";
import { FaVolumeUp, FaCloud, FaRibbon } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import { SiGrammarly } from "react-icons/si";

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
            <div className='container'>
                <h1 className="mb-5">
                    <span className="badge text-center" style={{ backgroundColor: "#0e1013", borderRadius: "0" }}>General Parameters</span>
                </h1>
                <div className={styles.para}>
                    <p className='my-5 text-center'>
                        <strong><em>Please note that the parameters in this section are some of the raw data that may be used for calculation of other
                            scores but they are not directly an input to the overall cohort ranking. This is because as a standalone input they
                            do not give us a representative level of performance. We are including this in the report for the sake of
                            completeness so that the aspirant has an advanced understanding of their performance. The colored range bar and the
                            dot plot on the line indicates the possible performance ranges (Red = Avoid, Green = Acceptable, Yellow = Needs
                            improvement) compared to the current performance (dot plot).</em></strong>
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 justify-content-center g-4">
                        <div className="col">
                            <div className={`${styles.card} card h-100`}>
                                <h3 className={`${styles.cardHeader} card-header text-white`}><AiFillDashboard className={`me-1 ${styles.icon}`} />Pace</h3>
                                <div className="card-body" style={{ fontSize: "22px" }}>
                                    <p align="justify" className='card-text'>
                                        <strong>Words per minute : </strong>pace
                                    </p>
                                    <p align="justify" className='card-text'>
                                        <strong>Ideal words per minute : </strong> 140-160 words/minute
                                    </p>
                                    <div className='mb-3'>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <input type="range" className="form-range" value={109} min="50" max="250" id="customRange2" disabled />
                                    </div>
                                    <p align="justify" className='card-text'>
                                        <strong>Why consider this :</strong> Speaking too slowly or too quickly denotes nervousness on part of the
                                        speaker. Please note that this is the average pace across the entire interaction (not average
                                        of each response) This will help you determine if you need to control the pace as you go
                                        through these interactions. We have provided an ideal benchmark range for comparison purposes.
                                        How to improve the scores? Try to practice your pace by comparing against the colored range bar
                                        above.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.card} card border-dark h-100`}>
                                <h3 className={`${styles.cardHeader} card-header text-white`}><FaRibbon className={`${styles.icon} me-1`} />Gesture</h3>
                                <div className="card-body">
                                    <p align="justify" className='card-text'>
                                        <strong>Gesture Score : </strong>Estimated_Gesture_score
                                    </p>
                                    <div className='mb-3'>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <input type="range" className="form-range" value={6} min="0" max="10" id="customRange2" disabled />
                                    </div>
                                    <p align="justify" className='card-text'>
                                        <strong>Why Consider this : </strong>Hand gestures play an important part in anyone’s
                                        personality. Due to limitations of the camera recording it may not be always possible to
                                        capture them depending on how the interaction is recorded. A good score indicates that the
                                        aspirant used hand gestures to positively reinforce responses. How to score better? Just use
                                        hands naturally like in any other physical interaction even for a virtual  experience. If this
                                        score is blank for you - it indicates an audio interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.card} card border-dark h-100`}>
                                <h3 className={`${styles.cardHeader} card-header text-white`}><FaCloud className={`${styles.icon} me-1`} />Word Cloud</h3>
                                <div className="card-body">
                                    <p align="justify" className='card-text'>
                                        <strong>Why Consider this : </strong>Please take a moment to reflect on the words
                                        used in this virtual interaction. This also reflects how the other speakers in the situation perceive you and what they are likely to remember about you once the interaction is over. Please take a moment to reflect and craft alternate answers if these are not the words and context you wish to convey to your audience.
                                    </p>
                                    <p className='text-center my-5'>
                                        <strong>
                                            <em>
                                                **Volume is in the range of 1-100. We align with decibel calculations * Hertz is the unit of pitch calculation. It is associated with the frequency of the audio signals
                                            </em>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.card} card border-dark h-100`}>
                                <h3 className={`${styles.cardHeader} card-header text-white`}><BsEmojiSmileFill className={`${styles.icon} me-1`} />Sentiment Analysis</h3>
                                <div className="card-body">
                                    <p align="justify" className='card-text'>
                                        <strong>Aggregate dominant Sentiment : </strong>Sentiment_score
                                    </p>
                                    <div className='mb-3'>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <input type="range" className="form-range" value={50} min="0" max="100" id="customRange2" disabled />
                                    </div>
                                    <p align="justify" className='card-text'>
                                        <strong>Why consider this : </strong>This shows how your emotions are understood by others.
                                        While most aspirant’s speech shows positive emotions naturally, in few cases it might be
                                        perceived as negative. Candidates should consider this to self analyze. While there are no
                                        specific actions to control sentiment and sound happier & positive, an estimate of where your
                                        current performance falls in the range can offer important clues about your context.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} card border-dark h-100 mt-4`}>
                        <h3 className={`${styles.cardHeader} card-header text-white`}><SiGrammarly className={`${styles.icon} me-1`} />Grammar and Accent Score</h3>
                        <div className="card-body">
                            <p align="justify" className='card-text'>
                                <strong>Grammar and Accent Score : </strong>grammar_score
                            </p>
                            <div className="mb-3">
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <input type="range" className="form-range" value={17} min="2" max="22" id="customRange2" disabled />
                            </div>

                            <p align="justify" className='card-text'>
                                <strong>Why consider this :</strong> Grammar denotes the seriousness and knowledge of the speaker in
                                any interaction. Poor grammar and wrong choice of words creates a negative impression in the minds of
                                others. While it's true that it's hard to change accents and one should not be penalized for it - but
                                a heavy accent sometimes makes it hard to understand speech and gives an impression of improper word
                                or grammar usage. How to improve the scores? Practice speaking with friends and take their feedback
                                about your grammar usage style. Attempt various other virtual interactions and check your grammar &
                                accent performance in the same.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.card} card border-dark h-100 mt-4`}>
                        <h3 className={`${styles.cardHeader} card-header text-white`}><FaVolumeUp className={`me-1 ${styles.icon}`} />Volume & Pitch</h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p align="justify" className='card-text'>
                                        <strong>Volume Scale (0-100) : "volume"</strong>
                                    </p>
                                    <p align="justify" className='card-text mb-5'>
                                        <strong>Ideal Volume Scale : </strong>70-80 Db
                                    </p>
                                    {/* <ReactApexChart
                                    setState={setVolume}
                                    options={volume.options}
                                    series={volume.series}
                                    type="radialBar"
                                /> */}
                                    <div className='mb-3'>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <input type="range" className="form-range" value={50} min="0" max="100" id="customRange2" disabled />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p align="justify" className='card-text'>
                                        <strong>Pitch Range : "pitch"</strong>
                                    </p>
                                    <p align="justify" className='card-text mb-5'>
                                        <strong>Ideal Pitch Range : </strong>650-850 Hertz
                                    </p>
                                    {/* <ReactApexChart
                                    setState={setPitch}
                                    options={pitch.options}
                                    series={pitch.series}
                                    type="radialBar"
                                /> */}
                                    <div className='mb-3'>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <input type="range" className="form-range" value={700} min="300" max="1250" id="customRange2" disabled />
                                    </div>
                                </div>
                            </div>
                            <p align="justify" className='card-text'>
                                <strong>Why consider this :</strong> The volume, pitch and voice modulation make it easier for us to
                                be understood by others easily. Scientific research has established the boundaries of the voice and
                                pitch that are sounds likable to the human ears. The values above indicate whether your volume and
                                pitch are within the range or are outside of it. In some situations of stress and discomfort, we are
                                to go beyond the ideal range displayed above. The performance rating dot plot should help you guide on your
                                performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralVariables;
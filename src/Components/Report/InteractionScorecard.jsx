import React, { useState } from 'react';
import styles from './InteractionScorecard.module.css';

import ReactApexChart from 'react-apexcharts';


const InteractionScorecard = () => {

    const [state, setState] = useState({
        series: [{
            name: 'Series 1',
            data: [4, 2, 3, 2, 1],
        }],
        options: {
            chart: {
                type: 'radar',
                width: '100%',
                height: '100%',
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: true,
                dashArray: 0,
                colors: ['#000'],
            },
            markers: {
                colors: ['#000'],
            },
            fill: {
                opacity: 0.5,
                colors: ['#000'],
            },
            // dataLabels: {
            //     enabled: true,
            //     background: {
            //         enabled: true,
            //         borderRadius: 2,
            //     },
            //     style: {
            //         colors: ['#ff6384']
            //     }
            // },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColor: '#000000',
                        fill: {
                            colors: ['#d5d5d5', '#fff']
                        }
                    }
                }
            },
            xaxis: {
                categories: ['Likeability & Trust', 'Confidence and Fluency', 'Energy and Adaptability', 'Communication skills', 'Empathy & Charm'],
                labels: {
                    show: true,
                    style: {
                        colors: ['#6c757d', '#6c757d', '#6c757d', '#6c757d', '#6c757d', '#6c757d'],
                        fontSize: '18px',
                    }
                },
            },
            yaxis: {
                show: false,
            },
            responsive: [{
                breakpoint: 500,
                options: {
                    chart: {
                        width: '100%',
                        height: '100%',
                    }
                },
                xaxis: {
                    labels: {
                        style: {
                            fontSize: '10px',
                        }
                    },
                },
            }]
        },

    });

    return (
        <>
            <div className="container my-5">
                <h1 className="my-5">
                    <span className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}> <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer scorecard</span>
                </h1>
                <div className={styles.para}>
                    <p align="justify">
                        Every human interaction demonstrates what human resources experts define as power skills.
                        The attached spider chart demonstrates these traits that the AI models observe in the conversation.
                        Depending upon the particular context of the interaction we may or may not display certain traits.
                        Personality is not permanent and the models are a mere reflection of how you may be perceived by the others in the
                        particular interaction. This chart and report will help you to reflect deeply on your own performance. In overall
                        cohort scores in the power-skill areas are summarized as below. <span>Please review the
                            variable section below for more information</span>
                    </p>
                </div>
                <div className='my-5 d-grid col-md-12 mx-auto'>
                    <div className="card border-0">
                        <h3 className="card-header text-white" style={{ backgroundColor: "#414141", borderRadius: "0" }}>Answer Score Outline Chart</h3>
                        <ul className={`${styles.main} mt-4`}>
                            <div className={`${styles.col1} fs-5`}>
                                <li>Likeability & Trust : likeability_agregate</li>
                                <li>Empathy & Charm : charm_agreegate</li>
                                <li>Energy and Adaptability : energy_agreegate</li>
                            </div>
                            <div className={`${styles.col2} fs-5`}>
                                <li>Communication skills: fluency_agreegate</li>
                                <li>Confidence and Fluency: Confidence_agreegate</li>
                            </div>
                        </ul>
                        <div className='d-flex justify-content-center'>
                            <ReactApexChart
                                // eslint-disable-next-line
                                setState={setState}
                                options={state.options}
                                series={state.series}
                                type="radar"
                                width={700}
                                height={550}
                                style={{ borderColor: "#000" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InteractionScorecard;
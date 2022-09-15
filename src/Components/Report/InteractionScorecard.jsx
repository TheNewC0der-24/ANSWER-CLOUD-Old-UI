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
                colors: ['#505F79'],
            },
            markers: {
                colors: ['#505F79'],
            },
            fill: {
                opacity: 0.5,
                colors: ['#505F79'],
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
                            colors: ['#f8f8f8', '#fff']
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
                        width: '400px',
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
            <div className="container">
                <h1 className="mb-3">
                    <span className="badge text-center" style={{ backgroundColor: "#0e1013", borderRadius: "0" }}>Interaction Scorecard</span>
                </h1>
                <div className="row mt-5">
                    <div className="col-md-7 m-auto">
                        <div className="card" style={{ border: "2px solid #0e1013", borderRadius: "0" }}>
                            <div className='mt-5 d-flex justify-content-center'>
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
                    <div className="col-md-5 m-auto">
                        {/* <div className="card h-100" style={{ border: "2.5px solid #000" }}>
                            <div className="card-body"> */}
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
                            <p>
                                Likeability & Trust : likeability_agregate
                                <br />
                                Empathy & Charm : charm_agreegate
                                <br />
                                Energy and Adaptability : energy_agreegate
                                <br />
                                Communication skills: fluency_agreegate
                                <br />
                                Confidence and Fluency: Confidence_agreegate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div>
            </div > */}

            {/* <table className={`${styles.table} table table-bordered text-center mb-5`} style={{ borderColor: "#c4933b" }}>
                <thead style={{ backgroundColor: "#c4933b" }}>
                    <tr>
                        <th scope="col">Likeability</th>
                        <th scope="col">Charm</th>
                        <th scope="col">Energy</th>
                        <th scope="col">Fluency</th>
                        <th scope="col">Confidence</th>
                        <th scope="col">Content Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>per_question_content_score</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}

export default InteractionScorecard;
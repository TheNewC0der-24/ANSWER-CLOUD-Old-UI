import React, { useState } from 'react';
import styles from './ContentRatings.module.css';

import ReactApexChart from 'react-apexcharts';

const ContentRatings = () => {

    const [state, setState] = useState({
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: 'Q1',
                        y: 40,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q2',
                        y: 70,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q3',
                        y: 50,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q4',
                        y: 60,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q5',
                        y: 90,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q6',
                        y: 30,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q7',
                        y: 47,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q8',
                        y: 85,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q9',
                        y: 91,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    },
                    {
                        x: 'Q10',
                        y: 15,
                        goals: [
                            {
                                name: 'Target Score',
                                value: 90,
                                strokeHeight: 5,
                                strokeColor: '#000000'
                            }
                        ]
                    }
                ]
            }
        ],
        options: {
            chart: {
                height: "100%",
                width: "100%",
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            colors: ['#5f6368'],
            dataLabels: {
                enabled: true,
                formatter: (value) => {
                    return value + '%';
                }
            },
            legend: {
                show: true,
                position: 'top',
                showForSingleSeries: true,
                customLegendItems: ['Actual Score', 'Target Score'],
                markers: {
                    fillColors: ['#5f6368', '#000000']
                }
            },
            yaxis: {
                show: true,
                title: {
                    text: 'Rating in %',
                    style: {
                        fontSize: '14px',
                    }
                },
            },
            xaxis: {
                show: true,
                title: {
                    text: 'Number of Questions',
                    style: {
                        fontSize: '14px',
                    }
                },
            },
            responsive: [{
                breakpoint: 500,
                options: {
                    chart: {
                        width: '100%',
                        height: '100%',
                    }
                },
            }]
        },
    });

    return (
        <>
            <div className='container'>
                <h1 className="mb-5">
                    <span className="badge text-center" style={{ backgroundColor: "#0e1013", borderRadius: "0" }}>Content Ratings</span>
                </h1>
                <div className={styles.para}>
                    <p align="justify" className='mb-4'>We evaluate the content of the responses not only by the best possible answer to that
                        question but using our context cloud we are further enhancing the accuracy of what of answers might be relevant to
                        what kind of situation. Any candidate taking time to understand and align to the context in which he is operating
                        and using industry specific terminologies to articulate his point of view is likely to do well in the content
                        ratings. The top cohort rating (A) on more than 75% of the questions denotes high degree of proficiency and
                        accuracy in his answers.
                    </p>
                </div>
                <table className="table table-bordered text-center my-5" style={{ borderColor: "#2e3134", fontSize: "22px" }}>
                    <thead className='text-white' style={{ backgroundColor: "#2e3134" }}>
                        <tr>
                            <th scope="col">Match Score</th>
                            <th scope="col">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Greater than 90</td>
                            <td>Extremely precise & relevant answer</td>
                        </tr>
                        <tr>
                            <td>70 to 90%</td>
                            <td>Satisfactory answer with key points covered</td>
                        </tr>
                        <tr>
                            <td>50 to 70%</td>
                            <td>Highlights key aspects but is not complete</td>
                        </tr>
                        <tr>
                            <td>Less than 50%</td>
                            <td>Missing key aspects</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='mt-5 mb-3'>Question Specific Content Ratings :</h3>
                <div className={styles.para}>
                    <p align="justify">
                        The chart below illustrates the content ratings for each answer, in percentage terms. The dotted lines at the 80%
                        score mark denote the “aspiration line” which should be target content ratings. In our experimentation we have
                        found aspirants consistently hitting these benchmarks command great authority on the content.

                    </p>
                </div>
                <div className='card mt-5 mb-3' style={{ border: "2px solid #2e3134", borderRadius: "0" }}>
                    <div className="card-body d-flex justify-content-center mx-auto">
                        <ReactApexChart
                            setState={setState}
                            options={state.options}
                            series={state.series}
                            type="bar"
                            height={500}
                            width={1000}
                            style={{ borderColor: "#000" }}
                        />
                    </div>
                </div>

                <div className='card-footer border-dark text-end'>
                    <strong>Overall Content Rating :</strong> <code>Content_score</code> of a <code>Interaction_ID</code>
                </div>
            </div>
        </>
    )
}

export default ContentRatings;
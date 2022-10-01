import React from 'react';
import styles from './PowerInsights.module.css';

const PowerInsights = () => {
  return (
    <>
      <div className='container my-5'>
        <h1 className="my-5">
          <span className="badge" style={{ borderRadius: "0", backgroundColor: "#414141" }}>
            <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer insights
          </span>
        </h1>
        <p align="justify" className={styles.para}>
          Every human interaction is an opportunity to learn. It's also an opportunity to demonstrate your skills and expertise in a
          specific context and capacity. We view every professional interaction as a high-stakes game - whether you are likely to save
          money, generate revenue, make a process more efficient or improve your performance. These virtual interactions act as practice
          sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but they are
          all have a common point of view. Practice is the key to improvement – and specific feedback makes improvement faster.
        </p>
      </div>
    </>
  )
}

export default PowerInsights

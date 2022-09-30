import React from "react";
import styles from "./SkillsSelection.module.css";

const SkillsSelection = () => {
  return (
    <>
      <div className="container my-5" style={{ height: "900px" }}>
        <h1 className="my-5">
          <span className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}>
            <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer cloud skills selection
          </span>
        </h1>
        <div className={styles.para}>
          <p align="justify">
            We define power skills as basic human abilities that are crucial for
            success in any human interaction. Human development experts agree
            that likeability, trust, empathy, confidence and communication
            skills are crucial parameters to consider when evaluating any human
            interaction. Hence these are the fixed set of parameters we track
            and evaluate for every interaction. There is no well established
            research that relates specific power skills to specific job roles
            but the power skills when considered in aggregate tend to support
            job role out performance in every job role situation.
          </p>
          <p align="justify">
            For certain domain specific interactions (e.g Sales), our models
            also calculate proprietary indicators called{" "}
            <strong>Quotients -</strong> they are calculated as a percentage. It
            shows how much your conversation is aligned to the domain in
            question. If quotients are calculated for your interaction, they
            will be available in the <strong>Domain Ratings</strong> section.
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillsSelection;

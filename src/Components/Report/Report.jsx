import React, { useRef } from "react";

import Logo from "./Logo";
import Introduction from "./Introduction";
import DomainRatings from "./DomainRatings";
import FeedbackSnapshot from "./FeedbackSnapshot";
import InteractionScorecard from "./InteractionScorecard";
import RatingVariables from "./PowerSkills";
import GeneralVariables from "./GeneralVariables";
import ContentRatings from "./ContentRatings";
import InteractionTranscript from "./InteractionTranscript";
import Footer from "./Footer";
import Interpretation from "./Interpretation";
import SkillsSelection from "./SkillsSelection";
import PowerInsights from "./PowerInsights";

import { FaDownload } from "react-icons/fa";

import ReactToPrint from "react-to-print";

const Report = () => {

  const reportRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => {
          return (
            <div className="container mt-5">
              <button className="btn btn-dark">Download Report<FaDownload className="ms-2" /></button>
            </div>
          );
        }}
        content={() => reportRef.current}
        pageStyle='{margin:5px}'
      />


      <div ref={reportRef} className="container my-2" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container">
          <Logo />
          <FeedbackSnapshot />
          <hr />
          <PowerInsights />
          <hr />
          <Introduction />
          <hr />
          <Interpretation />
          <hr />
          <SkillsSelection />
          <hr />
          <InteractionScorecard />
          <hr />
          <DomainRatings />
          <hr />
          <RatingVariables />
          <hr />
          <GeneralVariables />
          <hr />
          <ContentRatings />
          <hr />
          <InteractionTranscript />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Report
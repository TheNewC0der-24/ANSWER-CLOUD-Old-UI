import React, { useRef } from "react";

import Logo from "./Logo";
import Introduction from "./Introduction";
import DomainRatings from "./DomainRatings";
import FeedbackSnapshot from "./FeedbackSnapshot";
import InteractionScorecard from "./InteractionScorecard";
import RatingVariables from "./RatingVariables";
import GeneralVariables from "./GeneralVariables";
import ContentRatings from "./ContentRatings";
import InteractionTranscript from "./InteractionTranscript";
import Footer from "./Footer";

import { FaDownload } from "react-icons/fa";

import { useReactToPrint } from "react-to-print";

const Report = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="container mt-5">
        <button onClick={handlePrint} className="btn btn-dark">
          Download Report
          <FaDownload className="ms-2" />
        </button>
      </div>

      <div
        ref={componentRef}
        className="container my-5"
        style={{ backgroundColor: "#DFE1E6" }}
      >
        <Logo />
        <Introduction />
        <hr />
        <FeedbackSnapshot />
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
    </>
  );
};

export default Report;

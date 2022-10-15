import React, { useRef } from "react";

import Logo from "./Logo";
import FeedbackSnapshot from "./FeedbackSnapshot";
import InteractionScorecard from "./InteractionScorecard";
import ContentRatings from "./ContentRatings";
import Footer from "./Footer";

import { FaDownload } from "react-icons/fa";

import ReactToPrint from "react-to-print";

const Summaryreport = () => {

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
        documentTitle="aCLOUD"
        pageStyle='{margin:5px}'
      />


      <div ref={reportRef} className="container my-2" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container">
          <Logo />
          <FeedbackSnapshot />
          <hr />
          <InteractionScorecard />
          <hr />
          <ContentRatings />
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Summaryreport
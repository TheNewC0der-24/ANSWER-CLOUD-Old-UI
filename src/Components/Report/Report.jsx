import React from "react";

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

const Report = () => {
  return (
    <>
      <div className="container my-5" style={{ backgroundColor: "#f3f4f8" }}>
        <Logo />
        <FeedbackSnapshot />
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
    </>
  );
};

export default Report;

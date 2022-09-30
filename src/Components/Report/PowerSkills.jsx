import React from "react";
import styles from "./PowerSkills.module.css";

const RatingVariables = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="my-5">
          <span className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}>
            <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer cloud power skills
          </span>
        </h1>
        <div className={styles.para}>
          <p className="text-center">
            <em>
              Aggregate emotions and speech as analyzed via AI models are broken
              down into smaller components.These components are classified and
              analyzed as power skills.
            </em>
          </p>
          <div className={`${styles.main}`}>
            <div className={styles.col1}>
              <h2><strong>Likeability and Trust</strong></h2>
              <p align="justify">
                All of us have heard and likely commented, “I like that
                guy/gal!” The science of likeability says that the smile is the
                biggest key ingredient of liking an individual. Researchers say
                the ability to smile and remain stress free are key markers of a
                successful interaction. How much and how frequently you smile
                gives out subtle indications that you are in control of the
                conversation. This should not be confused with laughter. Our
                algorithms generate proprietary scores that divide this
                power-skill of Likeability & Trust in four cohorts as a relative
                barometer of the aspirant’s performance. So how can you improve
                your scores? Simple, practice delivering your responses with a
                smile as if you are talking to a friend. A top cohort rating of
                A demonstrates that the aspirant is liked and trusted by a wide
                variety.{" "}
                <strong>
                  A video feed is essential for this power skill - for audio
                  responses, it will not be scored.
                </strong>
              </p>
            </div>
            <div className={styles.col2}>
              <h2><strong>Clarity and Coherence</strong></h2>
              <p align="justify">
                Clarity of thoughts and speech together represent a major strength of the candidate in various job situations. Grammar,
                accent, industry knowledge - all contribute to the Clarity of the speaker in any interaction. Poor grammar and wrong
                choice of words creates a negative impression in the minds of others. While it's true that it's hard to change accents
                and one should not be penalized for it - but a heavy accent sometimes makes it hard to understand speech and gives an
                impression of improper word or grammar usage.  Our algorithms generate proprietary scores that divide this power-skill
                of Clarity into four different cohorts. The top cohort rating of A represents consistently high clarity in conversations. How
                to improve the scores? Practice speaking with friends and take their feedback about your grammar usage style.
              </p>
            </div>
          </div>
          <div className={`${styles.main} mt-5`} style={{ height: "1450px" }}>
            <div className={styles.col1}>
              <h2><strong>Energy and Adaptability</strong></h2>
              <p align="justify">
                Ever heard a comment “Wow he was super high energy!” The
                strength of our voice, voice modulation and pitch matters. It
                makes difficult ideas easy to understand and signals to the
                observer that the candidates know his “stuff”. This is
                especially true during difficult conversations where often the
                best of us tend to lose our balance. Our algorithms generate
                proprietary scores that divide this power-skill of energy into
                four cohorts, as a relative barometer, of the candidate’s energy
                level and adaptability. This should not be confused with merely
                a loud voice. <em>So how can you improve your scores?</em>{" "}
                Simple, practice delivering the answers with good voice
                modulation and pitch range along with a normal voice. And
                maintain the same even during high stress and demanding
                conversations. A top cohort rating of A demonstrates that the
                candidate is highly adaptable and energetic - someone who can
                handle any type of conversation and come out ahead.
              </p>
            </div>
            <div className={styles.col2}>
              <h2><strong>Confidence and Fluency</strong></h2>
              <p align="justify">
                Do you use a lot of words like “actually”, “really”, “like” and
                others? These are called filler words - subconsciously a lot of
                us have a habit of doing so. This creates a negative impression
                in the minds of our friends and colleagues.Researchers have
                discovered that we often associate the label of “low-confidence”
                with such people. Our algorithms generate proprietary scores
                that divide this power - skill of Confidence in four cohorts, as
                a relative barometer, of the candidate’s confidence. This should
                not be confused with word play.{" "}
                <em>So how can you improve your scores?</em> Simple, think and
                answer in a calculated manner without any unnecessary words. A
                top cohort rating of A demonstrates that the candidate is
                perceived as having high confidence and fluency in his approach.
                Filler or fluff words mentioned above also decreases the fluency of the candidate in the context. Every
                effort must be made to reduce such words in the vocabulary.
              </p>
            </div>
          </div>
          <div className={`${styles.main} mt-5`} style={{ height: "1500px" }}>
            <div className={styles.col1}>
              <h2><strong>Communication Skills</strong></h2>
              <p align="justify">
                We all want to sound eloquent in the conversations but whether
                due to the pressure or tension, we often tend to fumble and take
                awkward pauses. This is exactly opposite to a leader who always
                appears to be fluent. Our algorithms generate proprietary scores
                that divide this power skill of communications into four cohorts
                as a relative barometer of the candidate’s communication
                abilities. <em>So how can you improve your scores?</em> Simple,
                practice delivering the answers with which are well thought out.
                Request for a minute to formulate your answers before you start
                speaking so that unnecessary pauses can be avoided. A top cohort
                rating of A demonstrates that the candidate is has excellent communication skills.
                and come out ahead. Communication is still believed to be the #1 skill that is the key focus of
                HR and hiring managers around the world. It makes it that much more important to have an effective
                command on this skill. We recommend you to repeat the interaction if the scores are in C and D cohorts.
              </p>
            </div>
            <div className={styles.col2}>
              <h2><strong>Content Ratings</strong></h2>
              <p align="justify">
                We evaluate the content of the responses not only by comparing
                it to the best possible answer to that question depending upon
                the operating context. Accuracy of the content clearly means
                that the candidate is very knowledgeable in the interaction and
                has command over the situation. Another critical power skill in
                leadership development. <em>How to improve the scores?</em> Of
                Course knowing the answers and content is the key first step.
                Further, the aspirant must take time to understand and align to
                the operating context and industry specific terminologies to
                articulate answers. This will enhance the content ratings. One
                can also keep in mind to use certain keywords to improve their
                rating. A top cohort rating of A demonstrates that the candidate
                is aware of the accurate answer content and the operating
                context. Content is still the king. The degree of accuracy of
                the answers matter to a large extent in how your answers are perceived by others. It
                is important to understand the questions and apply critical thinking in articulating
                the answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingVariables;

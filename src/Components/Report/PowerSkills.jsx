import React from "react";
import styles from "./PowerSkills.module.css";

const RatingVariables = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-3">
          <span
            className="badge text-center"
            style={{ border: "2px solid black", color: "black" }}
          >
            <span style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer Cloud Power Skills
          </span>
        </h1>
        <div className={styles.para}>
          <p className="text-center my-2">
            <em>
              Aggregate emotions and speech as analyzed via AI models are broken
              down into smaller components.These components are classified and
              analyzed as power skills.
            </em>
          </p>
          <div className={styles.row}>
            {/* <div className="col-md-6"> */}
            {/* <ul className={styles.ul}> */}
            <div className={styles.ul}>
              <li className={styles.li}>
                <h3>Likeability & Trust</h3>
              </li>
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
            <div className={styles.ul}>
              <li className={styles.li}>
                <h3>Empathy & Charm</h3>
              </li>
              <p align="justify">
                Who doesn’t want to be charming? Did you know that certain body
                language markers like eye movement and gazes’ signals critical
                characters like empathy and charm? Human resource experts and
                researchers have discovered that empathy is one of the power
                skills as a leader. Something that one must consistently try to
                improve upon. Our algorithms generate proprietary scores that
                divide this power skill of Empathy & charm in four cohorts, as a
                relative barometer of the candidate’s charm. This should not be
                confused with excessive expressions. So how can you improve your
                scores? Simple, practice delivering the answers looking directly
                in the eyes/face when communicating with others. A top cohort
                rating of A demonstrates that the candidate cares for others -
                e.g has empathy and charm to influence others positively.{" "}
                <strong>
                  A video feed is essential for this power skill - for audio
                  responses, it will not be scored.
                </strong>
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.ul}>
              <li className={styles.li}>
                <h3>Confidence and Fluency</h3>
              </li>
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
              </p>
            </div>
            {/* </ul> */}

            {/* </div> */}
            {/* <div className="col-md-6"> */}
            {/* <ul> */}
            <div className={styles.ul}>
              <li className={styles.li}>
                <h3>Energy and Adaptability</h3>
              </li>
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
          </div>
          <div className={styles.row}>
            <div className={styles.ul}>
              <li className={styles.li}>
                <h3>Communication skills</h3>
              </li>
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
                rating of A demonstrates that the candidate is highly adaptable
                and energetic - someone who can handle any type of conversation
                and come out ahead.
              </p>
            </div>
            <div className={styles.ul}>
              <li className={styles.li}>
                <h3>Content Ratings</h3>
              </li>
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
                context.
              </p>
            </div>
            {/* </ul> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingVariables;

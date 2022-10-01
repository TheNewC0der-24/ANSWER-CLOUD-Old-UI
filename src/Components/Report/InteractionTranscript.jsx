import React from "react";
import styles from "./InteractionTranscript.module.css";

const InteractionTranscript = () => {
  return (
    <>
      <div className="container my-5">
        <div className='d-flex justify-content-between my-5'>
          <h1>
            <span className="badge" style={{ backgroundColor: "#414141", borderRadius: "0" }}><span className='me-1 fw-bold' style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer cloud transcript</span>
          </h1>
          <h3><span className="badge bg-danger" style={{ borderRadius: "0" }}>Experimental</span></h3>
        </div>
        <div style={{ fontSize: "30px" }}>
          <h1 className="my-5">Question#1 : Tell me about yourself ?</h1>
          <div className={styles.para}>
            Sure! So I've always enjoyed writing and public speaking, even as far back as high school. This led me to pursue
            writing-related passions—for example in college, where I was an editor for our school newspaper. In addition to
            writing, I got to learn how to manage a team and how to approach the writing process. After college, I took a job
            at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand to
            work on the communications plan for a product launch, which is where I discovered my interest in product marketing.
            After switching to a product marketing role and managing the two most successful new product launches last year, I
            realized I'm excited to take on a new opportunity. I've learned I work best on products that I love and use, and
            given that I'm a big user of your company’s products, I jumped at the chance to apply when I saw the open posting.
          </div>
          <h1 className="my-5">Question#2 : What was your favorite subject in college ? How do you think it will help in your career ?</h1>
          <div className={styles.para}>
            My English courses are most interesting and beneficial to me. I love creative and nonfiction writing. Whether I am
            writing a creative narrative, biographical piece, or poetry, I love to write. The skills I have developed in my
            English classes have been extremely beneficial in my other coursework, and I have developed tremendously as a
            writer. I have even published poetry in my college’s literary magazine and served as an assistant editor of the
            magazine for the past two years.
          </div>
          <h1 className="my-5">Question#3 : Could you walk me through the most challenging projects so far in your life ?</h1>
          <div className={styles.para}>
            ‘In my previous job at a marketing firm, I have worked on several challenging projects. One time, when I just started at
            the company, I was asked to work with a small team on a marketing pitch deck for a new client. We got the project because
            of our reputation and ability to take on the project on short notice. It was a great opportunity for us to show what we
            were capable of doing in a short amount of time. Then, two weeks before the pitch deck presentation the client requested
            us to change the entire plan. It turned out that they were unhappy with our first concept and stated that it differed too
            much from the initial idea that they had in mind.
          </div>
          <h1 className="my-5">Question#4 : Do you have any questions for me ?</h1>
          <div className={styles.para}>
            Thanks for giving me an opportunity to ask a question. As I am a Fresher and I am not familiar with this post. Can you
            just give me an idea for this post so I can prepare myself before joining the company?
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractionTranscript;

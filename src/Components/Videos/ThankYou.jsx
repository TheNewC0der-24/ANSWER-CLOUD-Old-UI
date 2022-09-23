import React, { useState, useEffect } from 'react';
import styles from './ThankYou.module.css';
import { useNavigate } from 'react-router-dom';

// import thankyou from "../../assets/Images/thankyou.svg"
import thankyou from "../../assets/Images/thankForm.svg"
// import confuse from "../../assets/Images/confuse.png"
import architect from "../../assets/Images/architect.jpg"
import advocate from "../../assets/Images/advocate.jpg"
import adventurer from "../../assets/Images/adventurer.jpg"
import campaigner from "../../assets/Images/campaigner.jpg"
import consul from "../../assets/Images/consul.jpg"
import entertainer from "../../assets/Images/entertainer.jpg"
import commander from "../../assets/Images/commander.jpg"
import logician from "../../assets/Images/logician.jpg"
import debater from "../../assets/Images/debater.jpg"
import mediater from "../../assets/Images/mediater.jpg"
import virtuoso from "../../assets/Images/virtuoso.jpg"
import logistician from "../../assets/Images/logistician.jpg"
import protagonist from "../../assets/Images/protagonist.jpg"
import executive from "../../assets/Images/executive.jpg"
import defender from "../../assets/Images/defender.jpg"
import debaterentrepreneur from "../../assets/Images/debaterentrepreneur.jpg"
import { FaStar } from 'react-icons/fa';
import { FacebookShareButton,WhatsappShareButton,FacebookIcon,WhatsappIcon,LinkedinShareButton, LinkedinIcon,  MailruShareButton,MailruIcon ,  EmailShareButton,EmailIcon} from 'react-share';


const colors = {
    orange: '#FFBA5A',
    grey: "#a9a9a9"
}

function ThankYou() {

    const navigate = useNavigate();

    const stars = Array(5).fill(0);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(undefined);
    const [sentence, setSentence] = useState("");
    const [time, setTime] = useState({ s: 0, m: 1 });
    const [image, setImage] = useState("");
    const handleClick = (value) => {
        setRating(value);
    };

    const handleMouseOver = (value) => {
        setHover(value);
    };

    const handleMouseLeave = () => {
        setHover(undefined);
    };

    const arr = ["Congratulations you displayed a Planner personality type!  These detail-oriented strategists love perfection. Whether it's finding the perfect gift for a loved one or finishing a project at work, they allocate their time and energy to different aspects of their lives. However, their inner world is complex and often private."
        ,
        "Congratulations you displayed a Rationalist personality type!The adaptable and open-minded type achiever has an ambition like no other personality types. They combine a willingness to adapt with creative intelligence, allowing them to see unconventional solutions to common issues.",
        "Congratulations you displayed a Master personality type! People with the ESTJ personality type are generally confident and creative visionaries. They excel at decision-making and thrive on the challenges and accomplishments that come hand-in-hand with being an ESTJ.",

        "Congratulations you displayed an Orator personality type!  They consider themselves highly creative and innovative, with a passion for rejecting convention and tradition. They enjoy the challenge of solving problems no one else can solve. They hold steadfast to their beliefs, accept new challenges eagerly, and are more likely than others to stick with a problem until they find a solution. ",

        " Congratulations you displayed an Exponent personality type! That said, they can appear shy, reserved, and cautious. Sensible and always open to reason, they are fundamentally honest and ethical.Some exponents see themselves as a family of volunteers, and are always looking for ways to step in and speak up for those that are in need.",

        "Congratulations you displayed an arbitrator personality type! They tend to have the character traits of childhood, such as being sensitive, creative, and open.These rare personality types tend to be quiet, creative, and imaginative, and they put a caring and compassionate approach to everything that they do.",

        "Congratulations you displayed a Supporter personality type! These outgoing, charismatic people are highly ambitious. They enjoy being the center of attention, and love being part of a team. They will go to great lengths to achieve their ambitions.These Warm-hearted, generous types are social and happy to talk to anyone. ",

        "Congratulations you displayed a Crusader personality type! Personality traits that tend to be associated with crusaders include having idealistic attitudes and beliefs that arise from idealism. Their vibrant energy can flow in many directions, including philanthropy, social reform, idealism, religion, and improving the quality of life for others.",

        "Congratulations you displayed a  signaller  personality type! They carry themselves quite methodically, thoughtfully carrying out their actions with purposeful and well-thought-out steps. They're somewhat emotionally distant, mainly preferring to keep their feelings to themselves, although they tend to hide their emotions from others rather than express them.",

        "Congratulations you displayed a Protector personality type! These people are kind and gentle souls with an even temperament. They tend to be reliable and responsible. They diligently pay attention to detail, whether in professional or personal endeavors.These people are likely to keep their interactions short and sweet, but they have great balance in all that they do. ",

        "Congratulations you displayed an Administrator personality type. They possess high emotional stability, and are able to calmly and confidently make important decisions under pressure. They willingly accept greater challenges and are not afraid to lead by example. They enjoy taking up leadership roles and looking out for the good of others",

        " Congratulations you displayed a Diplomat personality type! Their primary personality traits are decisiveness and influence. They enjoy supporting their community, and they strongly value achievement. They are impartial, and are professional and kind.hey put emphasis on the achievement of goals, but they also believe that they should contribute to the greater good.",

        "Congratulations on displaying a Genius personality type! They are known for being very task-oriented, although they have a diverse professional background and diverse set of interests that can easily interweave due to the job landscape today. They generally avoid small talk and are more purposeful with language.",

        "Congratulations, you displayed an Explorer personality type! They tend to have an open mindset. They are open-minded about new things, open to opportunities, but approach everything in life without judgement. Their positivity helps to uncover new opportunities and possibilities in the future.",

        "Congratulations you displayed a Tycoon personality type!  This type is creative, energetic, and insightful, often excelling in fields like engineering, geology, and editing. Drawing on powers of observation, they often exhibit curiosity and open-mindedness, making them able to perceive themselves and the world around them accurately.",

        " Congratulations you displayed an  Artist personality type! They long for new experiences.These people are never content with the status quo.They are very energetic, love to have a social life and can attract others into sharing activities."];
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const picture = [
        architect, logician, commander, debater, advocate, mediater, protagonist, campaigner, logistician, defender, executive, consul, virtuoso,
        adventurer, debaterentrepreneur, entertainer
    ];

    const a = Math.floor(Math.random() * 16);
    useEffect(() => {
        setSentence(arr[a]);
        setImage(picture[a]);
    }, arr, picture);

    var updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedM === 0 && updatedS === 0) {
            return;
        }
        if (updatedS === 0) {
            updatedM--;
            updatedS = 60;
        }
        updatedS--;
        return setTime({ m: updatedM, s: updatedS });
    };

    setInterval(run, 1000);

    return (
        <>
            <div className="d-grid col-md-7 mt-5 mx-auto">
                <div className="card border-0 shadow">
                    <div className='card-img-top bg-light'>
                        <img src={thankyou} className="d-flex mx-auto img-fluid" width={300} alt="thankyou" />
                    </div>
                    <div className="card-body text-center">
                        <h5 className='my-3'>Great, your interaction is now complete!</h5>
                        <p>
                            This will now be analyzed by our AI
                            models (and coaches/HR managers, if applicable). You or your administrator will receive a
                            detailed feedback on the same within next 72 hours.
                        </p>

                        <hr />
                        <p>
                            Every human interaction is an opportunity to learn. It's also an opportunity to demonstrate your skills and
                            expertise in a specific context and capacity. We view every professional interaction as a high-stakes game - whether you are
                            likely to save money, generate revenue, make a process more efficient or improve your performance. These virtual interactions act
                            as practice sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but
                            they all have a common point of view. Practice is the key to improvement - and specific feedback makes improvement faster.
                        </p>
                        <div className="d-flex justify-content-center mx-auto gap-3">
                            <button disabled={time.s === 0 ? false : true} className='btn btn-dark' onClick={() => navigate("/response")}>View Your Response & Answers</button>
                        </div>
                        <div className='text-sm mt-3'>Available in {time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;{time.s >= 10 ? time.s : "0" + time.s} seconds</div>
                    </div>
                </div>
            </div>

            <div className="d-grid col-md-7 mx-auto my-5">
                {/* <div className="card border-0 shadow">
                    <img src={image} className="img-fluid d-flex justify-content-center mx-auto" width={300} alt="personality" />
                    <div className="card-body">
                        <p className="card-text text-center">{sentence}</p>
                        <div className='d-grid col-md-3 mx-auto'>
                            <button className="btn btn-dark float-end" style={{ backgroundColor: "#282a2d", border: "#282a2d", borderRadius: "0" }}>Share On Social Media</button>
                        </div>
                    </div>
                </div> */}
                <div className="card border-0 shadow mb-3">
                    <div className="row g-0">
                        <div className="col-md-4 m-auto bg-white">
                            <img src={image} className="img-fluid d-flex justify-content-center mx-auto" alt="personality" />
                        </div>
                        <div className="col-md-8 m-auto">
                            <div className="card-body">
                                <p className="card-text text-center">{sentence}</p>
                                {/* <hr /> */}
                            </div>
                        </div>
                        <button type="button" className="btn btn-dark float-end" style={{ backgroundColor: "#282a2d", border: "#282a2d", borderRadius: "0" }}>Share On Social Media</button>
                        <FacebookShareButton url="https://www.facebook.com/"  quote="share on facebook" >
                            <FacebookIcon logoFillcolor='white'  round="true"></FacebookIcon>
                        </FacebookShareButton>
                         <WhatsappShareButton url="https://web.whatsapp.com/ " title="share on whatsapp" >
                            <WhatsappIcon logoFillcolor='white'  round="true"></WhatsappIcon>
                        </WhatsappShareButton>
                        <LinkedinShareButton url="https://www.linkedin.com/" title="share on linkedin" >
                            <LinkedinIcon logoFillcolor='white'  round="true"></LinkedinIcon>
                        </LinkedinShareButton>
                       
                        <EmailShareButton url="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" title="share on email" >
                            <EmailIcon logoFillcolor='white'  round="true"></EmailIcon>
                        </EmailShareButton>
                    </div>
                </div>
            </div>

            <div className="d-grid col-md-7 mt-4 mx-auto">
                <div className="card border-0 shadow">
                    <div className="card-body text-center">
                        <h5>How was your test taking experience?</h5>
                        <div style={styles.stars} className="my-3">
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={30}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer"
                                        }}
                                        color={(hover || rating) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                )
                            })}
                        </div>
                        <h5 className='mt-4'>Anything else you want to tell us?</h5>
                        <div className="mb-3 w-75 mx-auto">
                            <textarea className="form-control" id="feedback" placeholder='Please write your feedback here...' rows="4"></textarea>
                        </div>
                        <button className='btn btn-primary'>Share your feedback</button>
                    </div>
                </div>
                <p className='text-center my-2'>You may close this window</p>
            </div>

            {/* <div className={`${styles.container} container mt-5 mb-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={thankyou} alt="ThankYou" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3 className='mb-3'>Thank you!</h3>

                            <p className='mt-4 text-dark'>Now you can close this window!!</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ThankYou;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Mcq = () => {
  const navigate = useNavigate();
  const [create, setCreate] = useState([]);

  const next = () => {
    navigate("/thanks");
    axios
      .post(
        "response.json",
        {
          collect_questions: create.collect_questions,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleOnChange = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {/* <img className='d-flex justify-content-center mx-auto img-fluid m-auto p-3' width={300} src={mcq} alt="mcq" /> */}
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <h3>1/4</h3>
                <h5>Tell me about yourself ?</h5>
                <h6>
                  Hint : Speak about your educational background, skills,
                  experience, etc.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <h5>Your Answer Options</h5>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="collect_questions"
                    onChange={handleOnChange}
                    value="option1"
                    id="option1"
                  />
                  <label className="form-check-label" htmlFor="option1">
                    Option 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="collect_questions"
                    onChange={handleOnChange}
                    value="option2"
                    id="option2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    Option 2
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="collect_questions"
                    onChange={handleOnChange}
                    value="option3"
                    id="option3"
                  />
                  <label className="form-check-label" htmlFor="option3">
                    Option 3
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="collect_questions"
                    onChange={handleOnChange}
                    value="option4"
                    id="option4"
                  />
                  <label className="form-check-label" htmlFor="option4">
                    Option 4
                  </label>
                </div>
                <hr />
                <div className="d-flex gap-2 float-end">
                  <button className="btn btn-outline-secondary mb-3">
                    Back
                  </button>
                  <button onClick={next} className="btn btn-dark mb-3">
                    Save and Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mcq;

// import React, { useState } from "react";
// import styles from "./Mcq.module.css";
// import { useNavigate } from "react-router-dom";

// import mcq from "../../assets/Images/mcq.png";

// import axios from "axios";

// const Mcq = () => {
//   const navigate = useNavigate();
//   const [create, setCreate] = useState([]);

//   const next = () => {
//     navigate("/imageUpload");
//     axios
//       .post(
//         "response.json",
//         {
//           collect_questions: create.collect_questions,
//         },
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//       });
//   };

//   const handleOnChange = (e) => {
//     setCreate({ ...create, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div className={`${styles.container} container my-5`}>
//         <div className="row">
//           <div className="col-md-4 bg-dark">
//             <img
//               className="d-flex justify-content-center mx-auto img-fluid m-auto p-3"
//               width={300}
//               src={mcq}
//               alt="mcq"
//             />
//           </div>
//           <div className="col-md-8 m-auto">
//             <div className="container my-3">
//               <h4>Question ?</h4>
//               <hr />
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="collect_questions"
//                   onChange={handleOnChange}
//                 value="option1"
//                   id="option1"
//                 />
//                 <label className="form-check-label" htmlFor="option1">
//                   Option 1
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="collect_questions"
//                   onChange={handleOnChange}
//                 value="option2"
//                   id="option2"
//                 />
//                 <label className="form-check-label" htmlFor="option2">
//                   Option 2
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="collect_questions"
//                   onChange={handleOnChange}
//                 value="option3"
//                   id="option3"
//                 />
//                 <label className="form-check-label" htmlFor="option3">
//                   Option 3
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="collect_questions"
//                   onChange={handleOnChange}
//                 value="option4"
//                   id="option4"
//                 />
//                 <label className="form-check-label" htmlFor="option4">
//                   Option 4
//                 </label>
//               </div>
//               <hr />
//               <button onClick={next} className="btn btn-dark float-end mb-3">
//                 Save and Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mcq;

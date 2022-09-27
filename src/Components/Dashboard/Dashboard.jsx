import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import dashboard from "../../assets/Images/dashboard.png";
import img1 from "../../assets/Images/img-1.gif";
import img2 from "../../assets/Images/img-2.gif";
import img3 from "../../assets/Images/img-3.gif";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { SiHomebrew } from "react-icons/si";

const Dashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);

  useEffect(() => {
    axios.get("response.json").then((res) => {
      // console.log(res.data.results);
      setData(res.data.results);
      setAdd(res.data.results);
    });
  });

  return (
    <>
      {data.slice(0, 1).map((item) => (
        <>
          <div className="container my-5">
            <div className="row mb-4">
              <div className="col-md-7 m-auto">
                <div className={`${styles.card} card h-100`}>
                  <div className="card-body">
                    <div className={`${styles.row} row`}>
                      <div className="col-md-6">
                        <h3>
                          <SiHomebrew />
                        </h3>
                        <h3 className="card-title">
                          Welcome, {item.who_can_initiate}
                        </h3>
                        <p className="text-dark">
                          Get familiar with the dashboard, here are some ways to
                          get started.
                        </p>
                      </div>
                      <div className="col-md-6 my-3">
                        <img
                          className={`${styles.img} img-fluid d-flex justify-content-center mx-auto`}
                          src={dashboard}
                          width={250}
                          alt="dashboard"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 m-auto">
                <div className={`${styles.cardCarousel} card border-dark`}>
                  <div className="card-body">
                    <Carousel
                      autoFocus={true}
                      emulateTouch={true}
                      infiniteLoop={true}
                      showStatus={false}
                      stopOnHover={true}
                      showThumbs={false}
                      autoPlay={true}
                    >
                      <div>
                        <img src={img1} className="img-fluid" alt="img-1" />
                      </div>
                      <div>
                        <img src={img2} className="img-fluid" alt="img-2" />
                      </div>
                      <div>
                        <img src={img3} className="img-fluid" alt="img-3" />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid col-md-6 mx-auto">
              <table className="table table-bordered text-center mb-5">
                <thead>
                  <tr className="table-secondary">
                    <th scope="col">Interactions Created</th>
                    <th scope="col">Total Candidates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.createdby}</td>
                    <td>{item.updatedby}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>What can you do today?</h5>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => navigate("/internalbot")}
                className="btn btn-dark"
              >
                Create Internal Bot{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/udwhdpod.json"
                  trigger="loop"
                  stroke="100"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </button>
              <button
                onClick={() => navigate("/experience")}
                className="btn btn-dark"
              >
                Create Experience{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/udwhdpod.json"
                  trigger="loop"
                  stroke="100"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </button>
              <button
                onClick={() => navigate("/interaction")}
                className="btn btn-dark"
              >
                View Interaction
              </button>
              <button
                onClick={() => navigate("/viewReport")}
                className="btn btn-dark"
              >
                View Candidate Reports
              </button>
              {add.slice(0, 1).map((item) => (
                <>
                  {!(`${item.access_code}` == "aaccess_code") && (
                    <button
                      onClick={() => navigate("/teams")}
                      className="btn btn-dark"
                    >
                      Teams
                    </button>     
                  )}
                </>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Dashboard;

import React from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

const Dashboard = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fas fa-tachometer-alt uk-margin-small-right"></i>
          Dashboard
        </h4>
      </div>
      <div className="content_wrapper">
        <div className="uk-position-relative" uk-slideshow="animation: fade">
          <ul className="uk-slideshow-items" style={{ minHeight: "300px" }}>
            <li>
              <img src={img1} alt="" uk-cover="true" />
              <div className="img-overlay"></div>
            </li>
            <li>
              <img src={img2} alt="" uk-cover="true" />
              <div className="img-overlay"></div>
            </li>
            <li>
              <img src={img3} alt="" uk-cover="true" />
              <div className="img-overlay"></div>
            </li>
          </ul>

          <div className="uk-position-bottom-center uk-position-small">
            <ul className="uk-thumbnav">
              <li uk-slideshow-item="0">
                <div className="uk-flex">
                  <a>
                    <img src={img1} width="100" height="67" alt="" />
                  </a>
                  {/* <h2>Hello</h2> */}
                </div>
              </li>
              <li uk-slideshow-item="1">
                <div className="uk-flex">
                  <a>
                    <img src={img2} width="100" height="67" alt="" />
                  </a>
                  {/* <h2>Hiii</h2> */}
                </div>
              </li>
              <li uk-slideshow-item="2">
                <div className="uk-flex">
                  <a>
                    <img src={img3} width="100" height="67" alt="" />
                  </a>
                  {/* <h2>byeeee</h2> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

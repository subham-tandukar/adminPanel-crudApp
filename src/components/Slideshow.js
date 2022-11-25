import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Slideshow = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fas fa-photo-video uk-margin-small-right"></i>
          Slideshow
        </h4>
      </div>

      <div className="content_wrapper">
        <div className="uk-child-width-1-2@m uk-grid">
          <div>
            <div className="uk-h3">Slide</div>

            <div
              className="uk-position-relative uk-visible-toggle uk-light  uk-margin-medium-bottom uk-margin-medium-bottom"
              tabIndex="-1"
              uk-slideshow="true"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <img src={img1} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img2} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img3} alt="" uk-cover="true" />
                </li>
              </ul>

              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                uk-slidenav-previous="true"
                uk-slideshow-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                uk-slidenav-next="true"
                uk-slideshow-item="next"
              ></a>
            </div>
          </div>
          <div>
            <div className="uk-h3">Fade</div>

            <div
              className="uk-position-relative uk-visible-toggle uk-light  uk-margin-medium-bottom"
              tabIndex="-1"
              uk-slideshow="animation: fade"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <img src={img1} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img2} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img3} alt="" uk-cover="true" />
                </li>
              </ul>

              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                uk-slidenav-previous="true"
                uk-slideshow-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                uk-slidenav-next="true"
                uk-slideshow-item="next"
              ></a>
            </div>
          </div>
          <div>
            <div className="uk-h3">Scale</div>

            <div
              className="uk-position-relative uk-visible-toggle uk-light  uk-margin-medium-bottom"
              tabIndex="-1"
              uk-slideshow="animation: scale"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <img src={img1} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img2} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img3} alt="" uk-cover="true" />
                </li>
              </ul>

              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                uk-slidenav-previous="true"
                uk-slideshow-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                uk-slidenav-next="true"
                uk-slideshow-item="next"
              ></a>
            </div>
          </div>
          <div>
            <div className="uk-h3">Pull</div>

            <div
              className="uk-position-relative uk-visible-toggle uk-light  uk-margin-medium-bottom"
              tabIndex="-1"
              uk-slideshow="animation: pull"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <img src={img1} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img2} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img3} alt="" uk-cover="true" />
                </li>
              </ul>

              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                uk-slidenav-previous="true"
                uk-slideshow-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                uk-slidenav-next="true"
                uk-slideshow-item="next"
              ></a>
            </div>
          </div>
          <div>
            <div className="uk-h3">Push</div>

            <div
              className="uk-position-relative uk-visible-toggle uk-light  uk-margin-medium-bottom"
              tabIndex="-1"
              uk-slideshow="animation: push"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <img src={img1} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img2} alt="" uk-cover="true" />
                </li>
                <li>
                  <img src={img3} alt="" uk-cover="true" />
                </li>
              </ul>

              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                uk-slidenav-previous="true"
                uk-slideshow-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                uk-slidenav-next="true"
                uk-slideshow-item="next"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;

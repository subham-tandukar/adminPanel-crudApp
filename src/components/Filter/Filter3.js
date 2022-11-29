import React from "react";

const Filter3 = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fas fa-filter uk-margin-small-right"></i>Filter 3
        </h4>
      </div>
      <div className="content_wrapper">
        <div uk-filter="target: .js-filter">
          <ul className="uk-subnav uk-subnav-pill">
            <li className="uk-active" uk-filter-control="sort: data-date">
              <a>Ascending</a>
            </li>
            <li uk-filter-control="sort: data-date; order: desc">
              <a>Descending</a>
            </li>
          </ul>

          <ul className="uk-grid js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center">
            <li data-date="2016-06-01">
              <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
                2016-06-01
              </div>
            </li>
            <li data-date="2016-12-13">
              <div className="uk-card uk-card-primary uk-card-body uk-margin-medium-bottom">
                2016-12-13
              </div>
            </li>
            <li data-date="2017-05-20">
              <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
                2017-05-20
              </div>
            </li>
            <li data-date="2017-09-17">
              <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
                2017-09-17
              </div>
            </li>
            <li data-date="2017-11-03">
              <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium-bottom">
                2017-11-03
              </div>
            </li>
            <li data-date="2017-12-25">
              <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium-bottom">
                2017-12-25
              </div>
            </li>
            <li data-date="2018-01-30">
              <div className="uk-card uk-card-primary uk-card-body uk-margin-medium-bottom">
                2018-01-30
              </div>
            </li>
            <li data-date="2018-02-01">
              <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium-bottom">
                2018-02-01
              </div>
            </li>
            <li data-date="2018-03-11">
              <div className="uk-card uk-card-primary uk-card-body uk-margin-medium-bottom">
                2018-03-11
              </div>
            </li>
            <li data-date="2018-06-13">
              <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
                2018-06-13
              </div>
            </li>
            <li data-date="2018-10-27">
              <div className="uk-card uk-card-primary uk-card-body uk-margin-medium-bottom">
                2018-10-27
              </div>
            </li>
            <li data-date="2018-12-02">
              <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium-bottom">
                2018-12-02
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter3;

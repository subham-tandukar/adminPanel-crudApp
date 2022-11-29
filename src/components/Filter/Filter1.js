import React from "react";

const Filter1 = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fas fa-filter uk-margin-small-right"></i>Filter 1
        </h4>
      </div>
      <div className="content_wrapper">
        <div uk-filter="target: .js-filter">
          <ul className="uk-subnav uk-subnav-pill">
            <li
              className="uk-active"
              uk-filter-control="[data-color='white'],[data-color='blue'],[data-color='black']"
            >
              <a>All</a>
            </li>
            <li uk-filter-control="[data-color='white']">
              <a>White</a>
            </li>
            <li uk-filter-control="[data-color='blue']">
              <a>Blue</a>
            </li>
            <li uk-filter-control="[data-color='black']">
              <a>Black</a>
            </li>
          </ul>

          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center uk-grid">
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body  uk-margin-medium-bottom">
                Item
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter1;

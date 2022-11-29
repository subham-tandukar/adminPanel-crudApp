import React from "react";

const Sortable = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fas fa-sort uk-margin-small-right"></i>
          Sortable
        </h4>
      </div>

      <div className="content_wrapper">
        <ul
          className="uk-grid uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s"
          uk-sortable="handle: .uk-sortable-handle"
        >
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 1
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 2
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 3
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 4
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 5
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 6
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 7
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-bottom">
              <span
                className="uk-sortable-handle uk-margin-small-right uk-text-center"
                uk-icon="icon: table"
              ></span>
              Item 8
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sortable;

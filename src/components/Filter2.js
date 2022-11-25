import React from "react";

const Filter2 = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fas fa-filter uk-margin-small-right"></i>Filter 2
        </h4>
      </div>
      <div className="content_wrapper">
        <div uk-filter="target: .js-filter">
          <div className=" uk-grid uk-grid-small uk-grid-divider uk-child-width-auto">
            <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li
                  className="uk-active"
                  uk-filter-control="[data-color='white'],[data-color='blue'],[data-color='black'],[data-size='small'],[data-size='medium'],[data-size='large']"
                >
                  <a>All</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li uk-filter-control="filter: [data-color='white']; group: data-color">
                  <a>White</a>
                </li>
                <li uk-filter-control="filter: [data-color='blue']; group: data-color">
                  <a>Blue</a>
                </li>
                <li uk-filter-control="filter: [data-color='black']; group: data-color">
                  <a>Black</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li uk-filter-control="filter: [data-size='small']; group: size">
                  <a>Small</a>
                </li>
                <li uk-filter-control="filter: [data-size='medium']; group: size">
                  <a>Medium</a>
                </li>
                <li uk-filter-control="filter: [data-size='large']; group: size">
                  <a>Large</a>
                </li>
              </ul>
            </div>
          </div>

          <ul
            className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
            uk-grid="masonry: true"
          >
            <li data-color="white" data-size="large">
              <div className="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="blue" data-size="small">
              <div className="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="white" data-size="medium">
              <div className="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="white" data-size="small">
              <div className="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="black" data-size="medium">
              <div className="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="black" data-size="small">
              <div className="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="blue" data-size="medium">
              <div className="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="black" data-size="large">
              <div className="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="blue" data-size="large">
              <div className="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="white" data-size="large">
              <div className="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="blue" data-size="medium">
              <div className="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
            <li data-color="black" data-size="small">
              <div className="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div className="uk-position-center">Item</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter2;

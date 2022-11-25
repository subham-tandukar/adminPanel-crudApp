import React from "react";

const Form = () => {
  return (
    <>
      <div className="title">
        <h4>
          <i className="fab fa-wpforms uk-margin-small-right"></i>Form
        </h4>
      </div>

      <div className="content_wrapper">
        <form>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Legend</legend>

            <div className="uk-margin">
              <input
                className="uk-input"
                type="text"
                placeholder="Input"
                aria-label="Input"
              />
            </div>

            <div className="uk-margin">
              <select className="uk-select" aria-label="Select">
                <option>Option 01</option>
                <option>Option 02</option>
              </select>
            </div>

            <div className="uk-margin">
              <textarea
                className="uk-textarea"
                rows="5"
                placeholder="Textarea"
                aria-label="Textarea"
              ></textarea>
            </div>

            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="radio2"
                  defaultChecked
                />{" "}
                A
              </label>
              <label>
                <input className="uk-radio" type="radio" name="radio2" /> B
              </label>
            </div>

            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
              <label>
                <input className="uk-checkbox" type="checkbox" defaultChecked />{" "}
                A
              </label>
              <label>
                <input className="uk-checkbox" type="checkbox" /> B
              </label>
            </div>

            <div className="uk-margin">
              <input
                className="uk-range"
                type="range"
                defaultValue="2"
                min="0"
                max="10"
                step="0.1"
                aria-label="Range"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;

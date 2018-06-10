import React, { Component } from "react";
import PropType from "prop-types";

class Textarea extends Component {
  render() {
    return (
      <div>
        {/* <div className="row text-left mb-2 editor-button">
          <div className="col-md-12">
            <button className="btn btn-default editor-button mr-1">
              <b>B</b>
            </button>
            <button className="btn btn-default editor-button mr-1">
              <i>I</i>
            </button>
            <button className="btn btn-default editor-button mr-1">
              <u>U</u>
            </button>
          </div>
        </div> */}
        <textarea
          name="message"
          className="col-md-12 border border-danger"
          placeholder="Start Scribbing..."
          rows="10"
          onChange={this.props.onChange}
          value={this.props.message}
        />
      </div>
    );
  }
}

Textarea.propType = {
  onChange: PropType.func.isRequired,
  value: PropType.string.isRequired
};

export default Textarea;

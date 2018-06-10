import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScribList from "../scriblist/ScribList";
import { getMyScribs } from "../../actions/scribActions";

class MyScribs extends Component {
  componentDidMount() {
    this.props.getMyScribs();
  }

  render() {
    const { myscribs } = this.props.scribs;
    //console.log(myscribs);
    return (
      <div className="scribbler">
        <div className="scribbler-heading">
          <h1 className="display-4 text-center">My Scribs</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="name-form mt-5">
                <ScribList scribs={myscribs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyScribs.propTypes = {
  getMyScribs: PropTypes.func.isRequired,
  scribs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  scribs: state.scribs
});

export default connect(
  mapStateToProps,
  { getMyScribs }
)(MyScribs);

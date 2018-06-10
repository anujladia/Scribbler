import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScribList from "../scriblist/ScribList";
import { getAllScribs } from "../../actions/scribActions";

class Scribs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scribs: {}
    };
  }

  componentDidMount() {
    this.props.getAllScribs();
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.scribs.scribs);
    this.setState({ scribs: nextProps.scribs });
    //console.log(this.state.scribs);
  }

  render() {
    const { scribs } = this.props.scribs;
    //console.log(scribs);
    return (
      <div className="scribbler">
        <div className="scribbler-heading">
          <h1 className="display-4 text-center">Scribs</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="name-form mt-5">
                <ScribList scribs={scribs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Scribs.propTypes = {
  getAllScribs: PropTypes.func.isRequired,
  scribs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  scribs: state.scribs
});

export default connect(
  mapStateToProps,
  { getAllScribs }
)(Scribs);

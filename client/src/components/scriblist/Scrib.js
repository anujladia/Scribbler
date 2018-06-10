import React, { Component } from "react";
import PropTypes from "prop-types";
import dateFormatter from "../../utils/dateFormatter";

class Scrib extends Component {
  render() {
    const { scrib } = this.props;
    return (
      <div className="scrib mb-4">
        <div className="card card-body bg-light">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-4 pr-0">
              <img
                className="rounded"
                src={`https://api.adorable.io/avatars/50/${
                  scrib.user._id
                }@adorable.png`}
                alt=""
              />
            </div>
            <div className="col-md-10 col-sm-10 col-8 pl-3">
              <p className="lead">{scrib.user.name}</p>
              <p className="text-muted">{dateFormatter(scrib.date)}</p>
            </div>
          </div>
          <div className="row mt-3 text-justify">
            <div className="col-md-12">
              <p>{scrib.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Scrib.propTypes = {
  scrib: PropTypes.object.isRequired
};

export default Scrib;

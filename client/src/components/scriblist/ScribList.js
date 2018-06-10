import React, { Component } from "react";
import PropTypes from "prop-types";

import Scrib from "./Scrib";

class ScribList extends Component {
  render() {
    const { scribs } = this.props;
    //console.log(scribs);

    let content;
    if (!scribs) {
      content = <h1 className="text-center text-muted">There is no Data</h1>;
    } else {
      if (scribs.length > 0) {
        content = scribs.map(scrib => <Scrib key={scrib._id} scrib={scrib} />);
      }
    }

    return (
      <div className="scriblist">
        <div className="container">
          <div className="row">
            <div className="m-auto col-md-8">{content}</div>
          </div>
        </div>
      </div>
    );
  }
}

ScribList.propTypes = {
  scribs: PropTypes.array.isRequired
};

// const mapStateToProps = state => ({
//   scribs: state.scribs
// });

// export default connect(mapStateToProps)(ScribList);
export default ScribList;

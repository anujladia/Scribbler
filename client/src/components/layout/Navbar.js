import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
      name: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.user.user.name });
  }

  // onNewAlias(event) {
  //   event.preventDefault();
  //   // Remove user_id from localStorare
  //   localStorage.removeItem("user_id");
  //   localStorage.removeItem("message");
  //   //this.setState({ redirect: true });
  // }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    let content;
    if (this.props.user.isAuthenticated) {
      content = (
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/scribbler">
                Scribbler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scribs">
                Scribs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myscribs">
                My Scribs
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <a
                href=""
                onClick={this.onNewAlias.bind(this)}
                className="nav-link mr-3"
              >
                New Alias
              </a>
            </li> */}
            <li className="nav-item">
              <div>
                <img
                  className="rounded"
                  src={`https://api.adorable.io/avatars/35/${
                    localStorage.user_id
                  }@adorable.png`}
                  alt=""
                  style={{ width: "35px", marginRight: "8px" }}
                  title="You avatar for all your posts"
                />{" "}
                <span className="">{this.state.name}</span>
              </div>
            </li>
          </ul>
        </div>
      );
    } else {
      content = (
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/scribs">
                Scribs
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="display-4">Scribble</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {content}
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(NavBar);

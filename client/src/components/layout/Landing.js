import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createUser } from "../../actions/userAction";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.user.isAuthenticated) {
    //   //console.log("It is pushing again");
    //   // this.props.history.push("/scribbler");
    //   this.setState({ redirect: true });
    // }
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name
    };
    this.props.createUser(newUser);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/Scribbler" />;
    }

    return (
      <div className="landing mt-2">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Scribble</h1>
                <p className="lead">
                  {" "}
                  Scribble anything in your mind without fear of being judged
                </p>
                <br />
                <br />
                <div className="name-form">
                  <form onSubmit={this.onSubmit}>
                    <div className="text-center">
                      <div className="m-auto col-md-12 col-lg-8 col-sm-12">
                        <input
                          name="name"
                          type="text"
                          value={this.state.name}
                          onChange={this.onChange}
                          className="name-input"
                          placeholder="Enter an Alias Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="m-auto">
                        <input
                          type="submit"
                          className="name-button"
                          value="GO SCRIBBLE"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  createUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createUser }
)(Landing);

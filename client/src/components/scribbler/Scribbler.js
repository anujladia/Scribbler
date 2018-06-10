import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser } from "../../actions/userAction";
import { postScrib } from "../../actions/scribActions";
import Textarea from "../common/Textarea";

class Scribbler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: localStorage.message !== "" ? localStorage.message : "",
      attachment: "",
      username: "",
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (localStorage.user_id || this.props.user.isAuthenticated) {
      this.props.getUser();
    } else {
      this.setState({ redirect: true });
    }
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    localStorage.setItem("message", this.state.message);
  }

  onSubmit(event) {
    event.preventDefault();
    const newScrib = {
      message: this.state.message,
      attachment: this.state.attachment
    };
    this.props.postScrib(newScrib);
    localStorage.setItem("message", "");
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="scribbler">
        <div className="scribbler-heading">
          <h1 className="display-4 text-center">Scribble down your thoughts</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="name-form mt-5">
                <form onSubmit={this.onSubmit}>
                  <div className="text-center">
                    <div className="m-auto col-md-12 col-lg-8 col-sm-12">
                      <Textarea
                        onChange={this.onChange}
                        value={this.state.message}
                      />
                    </div>
                    <br />
                    <div className="m-auto">
                      <input
                        type="submit"
                        className="btn btn-danger btn-lg"
                        value="SHARE SCRIB"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Scribbler.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  postScrib: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUser, postScrib }
)(Scribbler);

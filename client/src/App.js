import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { setAuthenticated } from "./actions/userAction";

import "./App.css";
import "../node_modules/toastr/build/toastr.css";
import "../node_modules/toastr/build/toastr.min";

// import Upload from "./components/storage/Upload";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Scribbler from "./components/scribbler/Scribbler";
import Scribs from "./components/scribs/Scribs";
import MyScribs from "./components/myscribs/MyScribs";

if (localStorage.user_id) {
  store.dispatch(setAuthenticated(localStorage.user_id));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/scribbler" component={Scribbler} />
            <Route exact path="/scribs" component={Scribs} />
            <Route exact path="/myscribs" component={MyScribs} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

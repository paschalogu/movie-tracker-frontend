import React, { Component } from "./node_modules/react";

import { Link } from "./node_modules/react-router-dom";
import Logout from "../../components/Auth/Logout/Logout";

export default class MustAddDirector extends Component {
  addDirectorHandler = (e) => {
    this.props.history.push("/add-director");
  };

  render() {
    return (
      <div>
        <Logout {...this.props} />
        <Link to="/">HOME PAGE</Link>
        <h1>You must add director in order to create movie</h1>
        <button className="button" onClick={this.addDirectorHandler}>
          ADD DIRECTOR NOW
        </button>
      </div>
    );
  }
}

import React, { Component, Fragment } from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import axios from "../../axios-instance";

import User from "./User";
import Loading from "../../components/common/Loading/Loading";
import Logout from "../../components/Auth/Logout/Logout";

export default class Users extends Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    const jwttoken = localStorage.getItem("jwttoken");

    if (!jwttoken) {
      this.props.history.push("/login");
    }

    axios
      .get("/admin/user", {
        headers: { Authorization: "Bearer " + jwttoken },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ users: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err,
          loading: false,
        });
      });
  }

  render() {
    const users = this.state.users.map((user) => {
      return <User key={user.userId} userData={user} />;
    });

    const usersTable = (
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Username</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Last Name</th>
            <th style={{ textAlign: "center" }}>UPDATE</th>
            <th style={{ textAlign: "center" }}>DELETE</th>
          </tr>
        </thead>

        <tbody>{users}</tbody>
      </table>
    );

    const content = this.state.loading ? <Loading /> : usersTable;

    const body =
      this.state.users.length < 1 ? (
        <h1>You don't have any Users</h1>
      ) : (
        <div>
          <h1>Your Users</h1>
          <div>{content}</div>
          <Link to="/" style={{ marginTop: 30 }}>
            Home Page
          </Link>
        </div>
      );

    return (
      <Fragment>
        <Logout {...this.props} />
        <Link to="/add-user">ADD A USER</Link>
        {body}
      </Fragment>
    );
  }
}

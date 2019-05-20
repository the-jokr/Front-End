import React from ".react";
import { connect } from "react-redux";
import { login } from "../actions";

import Loader from "react-loader-spinner";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
      this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
            
          }
      })
  }

  login = e => {
      e.preventDefault();
      this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/protected'));
  };


  render() {
    return (
      <div>
        <form onSumbit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapState
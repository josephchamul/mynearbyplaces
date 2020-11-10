import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import header from './images/title_pic.jpg'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", authenticated: false };
  }
  onSubmit = (event) => {
    if (this.state.username.trim().length > 0) {
      this.setState({ authenticated: true });
    }
    event.preventDefault();
  };

  onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    let from = { pathname: "/", state: { user: this.state.username } };
    if (this.state.authenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div className="log-content">
        <div className="login_title"><Link to="/" className="title-link">ReViewer</Link></div>
        <img src={header} alt="header_img" />
        <div className="signin">
          <form onSubmit={this.onSubmit}>
            <h3>Log in to ReViewer </h3>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            ></input>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="log-qoute"> ReView Your Favorite Places Around You</div>
      </div>
    );
  }
}

export default Login;

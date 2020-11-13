import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import header from "./images/title_pic.jpg";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", authenticated: false };
  }

  render() {
    let from = { pathname: "/", state: { user: this.state.username } };
    if (this.state.authenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div className="log-content">
        <div className="login_title">
          <Link to="/" className="title-link">
            ReViewer
          </Link>
        </div>
        <img src={header} alt="header_img" />
        <div className="review-input">
          <form onSubmit={this.onSubmit}>
            <h3>Write a ReView </h3>
            <label>Business Type</label>
            <input type="text" name="username"></input>
            <label>Business Name</label>
            <input type="text" name="username"></input>
            <label>Rating</label>
            <input type="text" name="username"></input>
            <label>Location</label>
            <input type="text" name="username"></input>
            <label>Description</label>
            <input type="text" name="username"></input>
            <label>Comment</label>
            <input type="text" name="username"></input>
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="log-qoute"> ReView Your Favorite Places Around You</div>
      </div>
    );
  }
}

export default Review;

import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import header from "./images/review-image.jpeg";

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
      <div className="rev-content">
        <div className="search_title">
          <Link to="/" className="title-link">
            ReViewer
          </Link>
        </div>

        <div className="review-input">
          <form onSubmit={this.onSubmit}>
            <h3>Write a ReView </h3>
            <label>Business Type</label>
            <input type="text" name="BuzType"></input>
            <label>Business Name</label>
            <input type="text" name="bizName"></input>
            <label>Star Rating</label>
            <input type="text" name="rate"></input>
            <label>Location</label>
            <input type="text" name="locat"></input>
            <label>Description</label>
            <input type="text" name="desc"></input>
            <label>Comment</label>
            <textarea type="text" name="comment"></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
        <img src={header} alt="header_img" />
        <div className="rev-qoute"> Find Amazing places around you!</div>
      </div>
    );
  }
}

export default Review;

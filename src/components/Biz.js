import React from "react";
import { Link, Redirect } from "react-router-dom";
import Entry from "./Entry";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import server from "../ServerInterface/server";
import "./style.css";

class Biz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [], review: "", type: "", name: "", revadd: false };
  }

  body = (name, location) => {
    const { entries } = this.state;
    return (
      <div className="content">
        {entries.length > 0 ? (
          <Entry entry={entries} business={name} location={location} />
        ) : (
          ""
        )}
      </div>
    );
  };

  delEntry = () => {
    return;
  };

  onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  addReview = (type, name) => {
    server.addReview(this.state.review, name, type);
  };

  render() {
    let name = "";
    let locate = "";
    let rate = "";
    let desc = "";
    let rev = "";
    let type = "";
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.name_biz) {
          name = location.state.name_biz;
        }
        if (location.state.location_biz) {
          locate = location.state.location_biz;
        }
        if (location.state.rate_biz) {
          rate = location.state.rate_biz;
        }
        if (location.state.desc_biz) {
          desc = location.state.desc_biz;
        }
        if (location.state.rev_biz) {
          rev = location.state.rev_biz;
        }
        if (location.state.type_biz) {
          type = location.state.type_biz;
        }
      }
    }
    return (
      <div className="search-content">
        <div className="search_title">
          <Link to="/" className="title-link">
            ReViewer
          </Link>
        </div>
        <div className="reviewButton">
          <Link to="/review" className="button">
            Write Review
          </Link>
        </div>
        <div className="biz-body">
          <div className="title-biz">{name}</div>
          <div className="desc-biz">{desc}</div>
          <div className="locat-biz">{locate}</div>
          <div className="rate-biz">Rating: {rate} out of 5</div>
          <div className="rev-biz">"{rev}"</div>
          <Form>
            <Form.Group controlId="review">
              <Form.Label>Enter a Review</Form.Label>
              <Form.Control
                type="text"
                name="review"
                value={this.state.review}
                onChange={this.onChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={this.addReview(type, name)}
            >
              add
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Biz;

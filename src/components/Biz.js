import React from "react";
import { Link } from "react-router-dom";
import Entry from "./Entry";
import server from "../ServerInterface/server";
import "./style.css";

class Biz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
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

  render() {
    let name = "";
    let locate = "";
    let rate = "";
    let desc = "";
    let rev = "";
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
        <div className="search-body">
          <div className="title-biz">{name}</div>
          <div className="desc-biz">{desc}</div>
          <div className="locat-biz">{locate}</div>
          <div className="rate-biz">{rate}</div>
          <div className="rev-biz">{rev}</div>
        </div>
      </div>
    );
  }
}

export default Biz;

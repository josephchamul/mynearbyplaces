import React from "react";
import { Link } from "react-router-dom";
import Entry from "./Entry";
import server from "../ServerInterface/server";
import "./style.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  body = (place, location) => {
    const { entries } = this.state;
    return (
      <div className="content">
        {entries.length > 0 ? (
          <Entry entry={entries} business={place} location={location} name="" />
        ) : (
          ""
        )}
      </div>
    );
  };

  componentDidMount() {
    server
      .fetchPlaces()
      .then((x) => this.setState({ entries: x }))
      .catch((e) => console.log(e));
  }

  render() {
    let place = "";
    let locate = "";
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.place) {
          place = location.state.place;
        }
        if (location.state.location) {
          locate = location.state.location;
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
        <div className="search-body">{this.body(place, locate)}</div>
      </div>
    );
  }
}

export default Search;

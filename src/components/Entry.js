import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", entries: [], cursor: 0, score: 0, count: 1 };
  }

  render() {
    const { entry, place } = this.props;
    return <div className="score">{place}</div>;
  }
}

export default Entry;

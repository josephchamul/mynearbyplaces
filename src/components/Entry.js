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
    var items = [];
    const { entry, business } = this.props;
    for (let i = 0; i < entry.length; i++) {
      if (entry[i].type == business) {
        for (let place = 0; place < entry[i].places.length; place++) {
          items.push(
            <div className="place-div">
              <div className="review-title">{entry[i].places[place].name}</div>
              <div className="review-des">
                {entry[i].places[place].description}
              </div>
              <div className="review-loc">
                {entry[i].places[place].location}
              </div>
              <div className="review-rate">
                Star Rating: {entry[i].places[place].rate}
              </div>
            </div>
          );
        }
      }
    }
    return <div>{items}</div>;
  }
}

export default Entry;

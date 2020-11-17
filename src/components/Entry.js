import React from "react";
import { Link, Redirect } from "react-router-dom";
import server from "../ServerInterface/server";
import "./style.css";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", entries: [], cursor: 0, score: 0, count: 1 };
  }

  delEntry = (event) => {
    const { business } = this.props;
    let place = event.target.value;
    server.delete(business, place);
    return <Redirect to="/search" />;
  };

  render() {
    var items = [];
    const { entry, business } = this.props;
    for (let i = 0; i < entry.length; i++) {
      if (entry[i].type == business) {
        for (let place = 0; place < entry[i].places.length; place++) {
          items.push(
            <div>
              <Link
                to={{
                  pathname: "/biz",
                  state: {
                    name_biz: entry[i].places[place].name,
                    rate_biz: entry[i].places[place].rate,
                    location_biz: entry[i].places[place].location,
                    desc_biz: entry[i].places[place].description,
                    rev_biz: entry[i].places[place].review,
                  },
                }}
              >
                <div className="place-div">
                  <div className="review-title">
                    {entry[i].places[place].name}
                  </div>
                  <div className="review-des">
                    {entry[i].places[place].description}
                  </div>
                  <div className="review-loc">
                    {entry[i].places[place].location}
                  </div>
                  <div className="review-rate">
                    Star Rating: {entry[i].places[place].rate}
                  </div>
                  <div className="review-comment">
                    "{entry[i].places[place].review[0]}"
                  </div>
                </div>
              </Link>
              <button
                onClick={this.delEntry}
                value={place}
                className="del_button"
              >
                Delete
              </button>
            </div>
          );
        }
      }
    }

    return <div>{items}</div>;
  }
}

export default Entry;

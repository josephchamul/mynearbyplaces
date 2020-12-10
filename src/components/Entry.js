import React from "react";
import { Link, Redirect } from "react-router-dom";
import server from "../ServerInterface/server";
import "./style.css";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "", biz: "", del: false, index: 0 };
  }

  setBiz = (type, biz) => {
    this.setState({ type: type });
    this.setState({ biz: biz });
  };

  delEntry = () => {
    //alert(this.state.type);
    server.delete(this.state.type, this.state.biz);
    this.setState({ del: true });
  };

  getReview = (i, place) => {
    const { entry } = this.props;
    var items = [];
    for (let x = 0; x < entry[i].places[place].review.length; x++) {
      items.push(
        <div>
          <div className="review-comment">
            "{entry[i].places[place].review[x]}"
          </div>
        </div>
      );
    }
    return items;
  };

  render() {
    if (this.state.del) {
      return <Redirect to="/" />;
    }
    var items = [];
    const { entry, business } = this.props;
    for (let i = 0; i < entry.length; i++) {
      if (entry[i].type == business) {
        for (let place = 0; place < entry[i].places.length; place++) {
          items.push(
            <div>
              {this.setBiz}
              <Link
                to={{
                  pathname: "/biz",
                  state: {
                    name_biz: entry[i].places[place].name,
                    rate_biz: entry[i].places[place].rate,
                    location_biz: entry[i].places[place].location,
                    desc_biz: entry[i].places[place].description,
                    rev_biz: entry[i].places[place].review,
                    type_biz: entry[i].places[place].type,
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
                  {this.getReview(i, place)}
                </div>
              </Link>
              <button onClick={this.delEntry} className="del_button">
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

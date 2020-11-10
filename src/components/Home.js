import React from 'react';
import { Link, Redirect } from "react-router-dom";
import server from "../ServerInterface/server";
import './style.css';
import header from './images/title_pic.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", entries: [], submit: false, place: "", location: ""};
      }

      onSubmit = (event) => {
        if (this.state.place.trim().length > 0 && this.state.location.trim().length > 0) {
          this.setState({ submit: true });
        }
        event.preventDefault();
      };
    
      onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
      };

      search = () => {
        let from = { pathname: "/search", state: { place: this.state.place, location: this.state.location } };
        if (this.state.submit) {
          return <Redirect to={from} />;
        }
        return (
          <div className='search'>
            <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="place"
              placeholder="Restaurants"
              value={this.state.place}
              onChange={this.onChange}
            ></input>
            <input
              type="text"
              name="location"
              placeholder="Tucson, AZ"
              value={this.state.location}
              onChange={this.onChange}
            ></input>
            <button type="submit">Find</button>
          </form>
          </div>
        );
      }

      places = () => {
        return (
          <div className="places">
          </div>
        );
      }
    
      componentDidMount() {
        const entries = server.fetchEntries()[0];
        this.setState({ entries: entries });
      }
    
     
    render() {
        let username = "";
        const location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }
        return (
            <div className="content">
                <div className="headers">
                <img src={header} alt="header_img" />
                </div>
                <div className="loginButton">
                    {username.length > 0 ? (username) : (<Link to="/login" className="button">Login</Link>)}
                </div>
                <div className="reviewButton">
                    <Link to="/review" className="button">Write Review</Link>
                </div>
                <div className="title"> ReViewer</div>
                {this.search()}
                <div className="body">
                <div className="subtitle">Find The Popular Places in Tucson</div>
                {this.places()}
                </div>

            </div>
        );
    }
}

export default Home;
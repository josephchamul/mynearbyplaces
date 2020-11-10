import React from 'react';
import { Link } from "react-router-dom";
import server from "../ServerInterface/server";
import Entry from "./Entry";
import './style.css';
import header from './images/title_pic.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", entries: [], cursor: 0, searching: "Restaurant", location: "Tucson, AZ" };
      }

      onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
      };

      search = () => {
        return (
          <div className='search'>
            <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="searching"
              value={this.state.searching}
              onChange={this.onChange}
            ></input>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
            ></input>
            <button type="submit">Find</button>
          </form>
          </div>
        );
      }

      popular = () => {
        return (
          <div className="popular">
          </div>
        );
      }
    
      body = () => {
        const { entries, cursor } = this.state;
        return (
          <div className="server-places">
            {entries.length > 0 ? <Entry entry={entries[cursor]} /> : ""}
          </div>
        );
      };
    
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
                </div>
                {this.popular()}
            </div>
        );
    }
}

export default Home;
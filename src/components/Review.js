import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import server from "../ServerInterface/server";
import { Link, Redirect } from "react-router-dom";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rate: 0,
      location: "",
      description: "",
      review: "",
      type: "",
      add: false,
    };
  }

  handleAddPlace = (event) => {
    server.addPlace(
      this.state.name,
      this.state.rate,
      this.state.location,
      this.state.description,
      this.state.review,
      this.state.type
    );
    this.setState({ add: true });
    event.preventDefault();
  };

  onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.add) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="search_title">
          <Link to="/" className="title-link">
            ReViewer
          </Link>
        </div>
        <Container>
          <Row>
            <Col className="review-input">
              <Form>
                <Form.Group name="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Name of Place"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group name="rate">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                    as="select"
                    name="rate"
                    value={this.state.rate}
                    onChange={this.onChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group name="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter location of Place"
                    value={this.state.location}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group name="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter Description of Place"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group name="review">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    type="text"
                    name="review"
                    placeholder="Enter review of Place"
                    value={this.state.review}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group name="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                  >
                    <option>restaurants</option>
                    <option>mechanic</option>
                    <option>shops</option>
                    <option>gym</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleAddPlace}
                >
                  Add
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Review;

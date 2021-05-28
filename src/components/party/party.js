import React, { Component } from "react";
import PartyDataService from "../../services/party";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class Party extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveParties = this.retrieveParties.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveParty = this.setActiveParty.bind(this);
    this.removeAllParties = this.removeAllParties.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteParty = this.deleteParty.bind(this);

    this.state = {
      parties: [],
      currentParty: null,
      currentIndex: -1,
      searchName: "",
      isLoading: true
    };
  }

  // Load parties when component is rendered.
  componentDidMount() {
    this.retrieveParties();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveParties() {
    PartyDataService.getAll()
      .then(response => {
        this.setState({
          parties: response.data,
          isLoading: false
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveParties();
    this.setState({
      currentParty: null,
      currentIndex: -1
    });
  }

  setActiveParty(party, index) {
    this.setState({
      currentParty: party,
      currentIndex: index
    });
  }

  deleteParty() {
    PartyDataService.delete(this.state.currentParty._id)
      .then(response => {
        this.refreshList();
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeAllParties() {
    PartyDataService.deleteAll()
      .then(response => {
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    PartyDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          parties: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, parties, currentParty, currentIndex } = this.state;

    return (
      <div className="container list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Party List</h4>
          <Link
            to={"/add-party/"}
            title={"Add Party"}
            aria-label={"Add Party"}
            className={"btn btn-primary mb-2 mr-half"}
          ><span className={"mr-half"}>Add Party</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </Link>
          <button
            className="btn btn-danger mb-2"
            onClick={this.removeAllParties}
          >
            Remove All
          </button>
          <ul className="list-group">
            <Loader
              type={"MutatingDots"}
              color={"Yellow"}
              secondaryColor={"Red"}
              visible={this.state.isLoading}
            />
            {parties && parties.map((party, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveParty(party, index)}
                key={index}
              >
                {party.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentParty ? (
            <div>
              <h4>Party Details</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentParty.name}
              </div>
              <div>
                <label>
                  <strong>Short Name:</strong>
                </label>{" "}
                {currentParty.abbreviation}
              </div>
              <div>
                <label>
                  <strong>Colour:</strong>
                </label>{" "}
                <div id={"rect"} style={{ 'display':'inline-block', 'backgroundColor': `${currentParty.colour}`}}>
                </div>
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentParty.description}
              </div>
              <Link to={"/parties/" + currentParty._id} className="btn btn-success mr-half">
                Edit
              </Link>
              <button className="btn btn-danger mr-half" onClick={this.deleteParty}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Party...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import PollingStationDataService from "../../services/polling-station";
import { Link } from "react-router-dom";

export default class PollingStation extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrievePollingStations = this.retrievePollingStations.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePollingStation = this.setActivePollingStation.bind(this);
    this.removeAllPollingStations = this.removeAllPollingStations.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deletePollingStation = this.deletePollingStation.bind(this);

    this.state = {
      pollingStations: [],
      currentPollingStation: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  // Load pollingStations when component is rendered.
  componentDidMount() {
    this.retrievePollingStations();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrievePollingStations() {
    PollingStationDataService.getAll()
      .then(response => {
        this.setState({
          pollingStations: response.data
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrievePollingStations();
    this.setState({
      currentPollingStation: null,
      currentIndex: -1
    });
  }

  setActivePollingStation(pollingStation, index) {
    this.setState({
      currentPollingStation: pollingStation,
      currentIndex: index
    });
  }

  deletePollingStation() {
    PollingStationDataService.delete(this.state.currentPollingStation._id)
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllPollingStations() {
    PollingStationDataService.deleteAll()
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    PollingStationDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          pollingStations: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const { searchName, pollingStations, currentPollingStation, currentIndex } = this.state;

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
          <h4>Polling Station List</h4>
          <Link
            to={"/add-polling-station/"}
            title={"Add Polling Station"}
            aria-label={"Add Polling Station"}
            className={"btn btn-primary mb-2"}
          ><span className={"mr-3"}>Add Polling Station</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </Link>
          <ul className="list-group">
            { pollingStations && pollingStations.map((pollingStation, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActivePollingStation(pollingStation, index)}
                key={index}
              >
                {pollingStation.name}
              </li>
            ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPollingStations}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          { currentPollingStation ? (
            <div>
              <h4>Polling Station Details</h4>
              <div>
                <label>
                  <strong>Code:</strong>
                </label>{" "}
                { currentPollingStation.code }
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                { currentPollingStation.name }
              </div>
              <div>
                <label>
                  <strong>District:</strong>
                </label>{" "}
                { currentPollingStation.district.name }
              </div>
              <Link to={"/polling-stations/" + currentPollingStation._id} className="btn btn-success mr-2">
                Edit
              </Link>
              <button className="btn btn-danger mr-2" onClick={this.deletePollingStation}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Polling station...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

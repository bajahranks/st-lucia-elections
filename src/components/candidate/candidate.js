import React, { Component } from "react";
import CandidateDataService from "../../services/candidate";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class Candidate extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCandidate = this.setActiveCandidate.bind(this);
    this.removeAllCandidates = this.removeAllCandidates.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteCandidate = this.deleteCandidate.bind(this);
    this.formatDate = this.formatDate.bind(this);

    this.state = {
      candidates: [],
      currentCandidate: null,
      currentIndex: -1,
      searchName: "",
      isLoading: true
    };
  }

  // Load candidates when component is rendered.
  componentDidMount() {
    this.retrieveCandidates();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveCandidates() {
    CandidateDataService.getAll()
      .then(response => {
        this.setState({
          candidates: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrieveCandidates();
    this.setState({
      currentCandidate: null,
      currentIndex: -1
    });
  }

  setActiveCandidate(candidate, index) {
    this.setState({
      currentCandidate: candidate,
      currentIndex: index
    });
  }

  deleteCandidate() {
    CandidateDataService.delete(this.state.currentCandidate._id)
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllCandidates() {
    CandidateDataService.deleteAll()
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    CandidateDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          candidates: response.data
        });
      }).catch(e => { console.log(e) });
  }

  formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString();

    return (formattedDate);
  }

  render() {
    const { searchName, candidates, currentCandidate, currentIndex } = this.state;

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
          <h4>Candidate List</h4>
          <Link
            to={"/add-candidate/"}
            title={"Add Candidate"}
            aria-label={"Add Candidate"}
            className={"btn btn-primary mb-2 mr-half"}
          ><span className={"mr-half"}>Add Candidate</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </Link>
          <button
            className="btn btn-danger mb-2 mr-half"
            onClick={this.removeAllCandidates}
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
            { candidates && candidates.map((candidate, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveCandidate(candidate, index)}
                key={index}
              >
                {candidate.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          { currentCandidate ? (
            <div>
              <h4>Candidate Details</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                { currentCandidate.name }
              </div>
              <div>
                <label>
                  <strong>DOB:</strong>
                </label>{" "}
                { this.formatDate(currentCandidate.dob) }
              </div>
              <div>
                <label>
                  <strong>Sex:</strong>
                </label>{" "}
                { currentCandidate.gender }
              </div>
              <div>
                <label>
                  <strong>Party:</strong>
                </label>{" "}
                { currentCandidate.party.name }
              </div>
              <div>
                <label>
                  <strong>District:</strong>
                </label>{" "}
                { currentCandidate.district.name }
              </div>
              <div>
                <label>
                  <strong>Comments:</strong>
                </label>{" "}
                { currentCandidate.comments }
              </div>
              <Link to={"/candidates/" + currentCandidate._id} className="btn btn-success mr-half">
                Edit
              </Link>
              <button className="btn btn-danger mr-half" onClick={this.deleteCandidate}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Candidate...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

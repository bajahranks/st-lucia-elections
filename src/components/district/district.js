import React, { Component } from "react";
import DistrictDataService from "../../services/district";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class District extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDistrict = this.setActiveDistrict.bind(this);
    this.removeAllDistricts = this.removeAllDistricts.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteDistrict = this.deleteDistrict.bind(this);

    this.state = {
      districts: [],
      currentDistrict: null,
      currentIndex: -1,
      searchName: "",
      isLoading: true
    };
  }

  // Load districts when component is rendered.
  componentDidMount() {
    this.retrieveDistricts();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrieveDistricts();
    this.setState({
      currentDistrict: null,
      currentIndex: -1
    });
  }

  setActiveDistrict(district, index) {
    this.setState({
      currentDistrict: district,
      currentIndex: index
    });
  }

  deleteDistrict() {
    DistrictDataService.delete(this.state.currentDistrict._id)
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllDistricts() {
    DistrictDataService.deleteAll()
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    DistrictDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          districts: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const { searchName, districts, currentDistrict, currentIndex } = this.state;

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
          <h4>District List</h4>
          <Link
            to={"/add-district/"}
            title={"Add District"}
            aria-label={"Add District"}
            className={"btn btn-primary mb-2 mr-half"}
          ><span className={"mr-half"}>Add District</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </Link>
          <button
            className="mb-2 btn btn-danger"
            onClick={this.removeAllDistricts}
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
            { districts && districts.map((district, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveDistrict(district, index)}
                key={index}
              >
                {district.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          { currentDistrict ? (
            <div>
              <h4>District Details</h4>
              <div>
                <label>
                  <strong>Code:</strong>
                </label>{" "}
                { currentDistrict.code }
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                { currentDistrict.name }
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                { currentDistrict.description }
              </div>
              <Link to={"/districts/" + currentDistrict._id} className="btn btn-success mr-half">
                Edit
              </Link>
              <button className="btn btn-danger mr-half" onClick={this.deleteDistrict}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a District...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import SectionDataService from "../../services/section";
import { Link } from "react-router-dom";
import { getToken } from "../../helpers/util";
import Loader from "react-loader-spinner";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveSections = this.retrieveSections.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSection = this.setActiveSection.bind(this);
    this.removeAllSections = this.removeAllSections.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteSection = this.deleteSection.bind(this);

    this.state = {
      sections: [],
      currentSection: null,
      currentIndex: -1,
      searchName: "",
      isLoading: true
    };
  }

  // Load sections when component is rendered.
  componentDidMount() {
    this.retrieveSections();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveSections() {
    SectionDataService.getAll(getToken())
      .then(response => {
        this.setState({
          sections: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrieveSections();
    this.setState({
      currentSection: null,
      currentIndex: -1
    });
  }

  setActiveSection(section, index) {
    this.setState({
      currentSection: section,
      currentIndex: index
    });
  }

  deleteSection() {
    SectionDataService.delete(this.state.currentSection._id)
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllSections() {
    SectionDataService.deleteAll()
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    SectionDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          sections: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const { searchName, sections, currentSection, currentIndex } = this.state;

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
          <h4>Section List</h4>
          <Link
            to={"/add-section/"}
            title={"Add Section"}
            aria-label={"Add Section"}
            className={"btn btn-primary mb-2 mr-half"}
          ><span className={"mr-half"}>Add Section</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </Link>
          <button
            className="mr-half mb-2 btn btn-danger"
            onClick={this.removeAllSections}
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
            { sections && sections.map((section, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveSection(section, index)}
                key={index}
              >
                {section.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          { currentSection ? (
            <div>
              <h4>Section Details</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                { currentSection.name }
              </div>
              <div>
                <label>
                  <strong>Polling Station:</strong>
                </label>{" "}
                { currentSection.pollingStation.name }
              </div>
              <Link to={"/sections/" + currentSection._id} className="btn btn-success mr-half">
                Edit
              </Link>
              <button className="btn btn-danger mr-half" onClick={this.deleteSection}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a section...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

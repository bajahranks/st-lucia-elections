import React, { Component } from "react";
import SectionDataService from "../../services/section";
import PollingStationDataService from "../../services/polling-station";

export default class EditSection extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePollingStation = this.onChangePollingStation.bind(this);
    this.getSection = this.getSection.bind(this);
    this.updateSection = this.updateSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);

    // Defaults
    this.state = {
      currentSection: {
        id: null,
        name: "",
        pollingStation: ""
      },
      pollingStations: [],
      message: ""
    };
  }

  componentDidMount() {
    this.getSection(this.props.match.params.id);
    this.retrievePollingStations();
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the section.
    this.setState(prevState => ({
      currentSection: {
        ...prevState.currentSection,
        name: name
      }
    }));
  }

  onChangePollingStation(e) {
    const pollingStation = e.target.value;

    this.setState(prevState => ({
      currentSection: {
        ...prevState.currentSection,
        pollingStation: pollingStation
      }
    }));
  }

  getSection(id) {
    SectionDataService.get(id)
      .then(response => {
        this.setState({
          currentSection: response.data
        });
      }).catch(error => {
      console.log(error);
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

  updateSection() {
    const currentSection = this.state.currentSection;

    SectionDataService.update(this.state.currentSection._id, currentSection)
      .then(() => {
        this.setState({
          message: "The section was updated successfully!"
        });
      }).catch(error => {
      console.log(error);
    });
  }

  deleteSection() {
    SectionDataService.delete(this.state.currentSection._id)
      .then(() => {
        this.props.history.push('/sections')
      }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { currentSection, pollingStations, message } = this.state;

    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Edit or delete section</legend>
            <hr />
            { message ? (
              <div className={"alert alert-success"}>
                <h4>{ message }</h4>
              </div>
            ): ("")}
            {/* Name Field */}
            <div className={"form-group row"}>
              <label htmlFor={"name"} className={"col-lg-3 col-form-label"}>Name</label>
              <div>
                <input
                  type={"text"}
                  className={"form-control"}
                  id={"name"}
                  name={"name"}
                  placeholder={"Section name"}
                  value={currentSection.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>
            </div>
            {/* PollingStation Field */}
            <div className={"form-group row"}>
              <label htmlFor={"pollingStation"} className={"col-lg-3 col-form-label"}>PollingStation</label>
              <div>
                <select className={"form-control"} id={"pollingStation"} name={"pollingStation"} onChange={this.onChangePollingStation}>
                  <option value={ currentSection.pollingStation._id }>{ currentSection.pollingStation.name }</option>
                  { pollingStations && pollingStations.map(pollingStation => (
                      <option key={ pollingStation._id } value={ pollingStation._id }>{ pollingStation.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.updateSection} className="btn btn-success mr-2">
                  Edit
                </button>
                <button className="btn btn-danger mr-2" onClick={this.deleteSection}>
                  Delete
                </button>
                <a className={"btn btn-warning"} href={"/"}>Cancel</a>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
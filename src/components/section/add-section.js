import React, { Component } from "react";
import SectionDataService from "../../services/section";
import PollingStationDataService from "../../services/polling-station";

export default class AddSection extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePollingStation = this.onChangePollingStation.bind(this);
    this.saveSection = this.saveSection.bind(this);
    this.newSection = this.newSection.bind(this);
    this.submitted = this.submitted.bind(this);

    // Defaults
    this.state = {
      id: null,
      name: "",
      pollingStation: "",
      pollingStations: [],

      submitted: false
    };
  }

  // Load polling stations when component is rendered.
  componentDidMount() {
    this.retrievePollingStations();
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePollingStation(e) {
    this.setState({
      pollingStation: e.target.value
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

  saveSection() {
    const section = {
      name: this.state.name,
      pollingStation: this.state.pollingStation,
    }

    SectionDataService.create(section).then(response => {
      this.setState({
        submitted: true
      });
    }).catch(e => { console.log(e) })
  }

  newSection() {
    this.setState({
      id: null,
      name: "",
      pollingStation: "",
      pollingStations: [],

      submitted: false
    });
  }

  submitted(isSubmitted) {
    if (isSubmitted) {
      return (
        <div className={"alert alert-success"}>
          <h4>Section added successfully!</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Add a new section</legend>
            <hr />
            { this.submitted(this.state.submitted) }
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
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>
            </div>
            {/* Polling station Field @todo: Add district field, which will narrow down polling station list */}
            <div className={"form-group row"}>
              <label htmlFor={"pollingStation"} className={"col-lg-3 col-form-label"}>Polling Station</label>
              <div>
                <select className={"form-control"} id={"pollingStation"} name={"pollingStation"} onChange={this.onChangePollingStation}>
                  <option defaultValue={""}>Choose Polling Station</option>
                  { this.state.pollingStations && this.state.pollingStations.map(pollingStation => (
                      <option key={ pollingStation._id} value={ pollingStation._id }>{ pollingStation.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.saveSection} className="btn btn-success mr-1">
                  Save
                </button>
                <a className={"btn btn-danger"} href={"/"}>Cancel</a>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
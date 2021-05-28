import React, { Component } from "react";
import PollingStationDataService from "../../services/polling-station";
import DistrictDataService from "../../services/district";
import Loader from "react-loader-spinner";

export default class AddPollingStation extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.savePollingStation = this.savePollingStation.bind(this);
    this.newPollingStation = this.newPollingStation.bind(this);
    this.submitted = this.submitted.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);

    // Defaults
    this.state = {
      id: null,
      code: "",
      name: "",
      district: "",
      districts: [],

      submitted: false,
      isLoading: true
    };
  }

  // Load districts when component is rendered.
  componentDidMount() {
    this.retrieveDistricts();
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
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

  savePollingStation() {
    const pollingStation = {
      code: this.state.code,
      name: this.state.name,
      district: this.state.district,
    }

    PollingStationDataService.create(pollingStation).then(response => {
      this.setState({
        submitted: true
      });
    }).catch(e => { console.log(e) })
  }

  newPollingStation() {
    this.setState({
      id: null,
      code: "",
      name: "",
      district: "",
      districts: [],

      submitted: false
    });
  }

  submitted(isSubmitted) {
    if (isSubmitted) {
      return (
        <div className={"alert alert-success"}>
          <h4>{this.state.name} added successfully!</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <Loader
          type={"MutatingDots"}
          color={"Yellow"}
          secondaryColor={"Red"}
          visible={this.state.isLoading}
        />
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Add a new polling station</legend>
            <hr />
            { this.submitted(this.state.submitted) }
            {/* Code Field */}
            <div className={"form-group row"}>
              <label htmlFor={"code"} className={"col-lg-3 col-form-label"}>Code</label>
              <div>
                <input
                  type={"text"}
                  className={"form-control"}
                  id={"code"}
                  name={"code"}
                  placeholder={"Polling station code"}
                  value={this.state.code}
                  onChange={this.onChangeCode}
                  required
                />
              </div>
            </div>
            {/* Name Field */}
            <div className={"form-group row"}>
              <label htmlFor={"name"} className={"col-lg-3 col-form-label"}>Name</label>
              <div>
                <input
                  type={"text"}
                  className={"form-control"}
                  id={"name"}
                  name={"name"}
                  placeholder={"Polling station name"}
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>
            </div>
            {/* District Field */}
            <div className={"form-group row"}>
              <label htmlFor={"district"} className={"col-lg-3 col-form-label"}>District</label>
              <div>
                <select className={"form-control"} id={"district"} name={"district"} onChange={this.onChangeDistrict}>
                  <option defaultValue={""}>Choose District</option>
                  { this.state.districts && this.state.districts.map(district => (
                      <option key={ district._id } value={ district._id }>{ district.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row mt-3"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.savePollingStation} className="btn btn-success mr-half">
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
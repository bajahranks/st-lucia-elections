import React, { Component } from "react";
import PollingStationDataService from "../../services/polling-station";
import DistrictDataService from "../../services/district";

export default class EditPollingStation extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.getPollingStation = this.getPollingStation.bind(this);
    this.updatePollingStation = this.updatePollingStation.bind(this);
    this.deletePollingStation = this.deletePollingStation.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);

    // Defaults
    this.state = {
      currentPollingStation: {
        id: null,
        code: "",
        name: "",
        district: ""
      },
      districts: [],
      message: ""
    };
  }

  componentDidMount() {
    this.getPollingStation(this.props.match.params.id);
    this.retrieveDistricts();
  }

  onChangeCode(e) {
    const code = e.target.value;
    // Updates the state of the code value of the polling station.
    this.setState(prevState => ({
      currentPollingStation: {
        ...prevState.currentPollingStation,
        code: code
      }
    }));
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the polling station.
    this.setState(prevState => ({
      currentPollingStation: {
        ...prevState.currentPollingStation,
        name: name
      }
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;

    this.setState(prevState => ({
      currentPollingStation: {
        ...prevState.currentPollingStation,
        district: district
      }
    }));
  }

  getPollingStation(id) {
    PollingStationDataService.get(id)
      .then(response => {
        this.setState({
          currentPollingStation: response.data
        });
      }).catch(error => {
      console.log(error);
    });
  }

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data
        });
      }).catch(e => { console.log(e) });
  }

  updatePollingStation() {
    const currentPollingStation = this.state.currentPollingStation;

    PollingStationDataService.update(this.state.currentPollingStation._id, currentPollingStation)
      .then(() => {
        this.setState({
          message: "The Polling Station was updated successfully!"
        });
      }).catch(error => {
      console.log(error);
    });
  }

  deletePollingStation() {
    PollingStationDataService.delete(this.state.currentPollingStation._id)
      .then(() => {
        this.props.history.push('/pollingStations')
      }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { currentPollingStation, districts, message } = this.state;

    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Edit or delete Polling Station</legend>
            <hr />
            { message ? (
              <div className={"alert alert-success"}>
                <h4>{ message }</h4>
              </div>
            ): ("")}
            {/* Code Field */}
            <div className={"form-group row"}>
              <label htmlFor={"code"} className={"col-lg-3 col-form-label"}>Code</label>
              <div>
                <input
                  type={"text"}
                  className={"form-control"}
                  id={"code"}
                  name={"code"}
                  placeholder={"Polling Station code"}
                  value={currentPollingStation.code}
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
                  placeholder={"PollingStation name"}
                  value={currentPollingStation.name}
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
                  <option value={ currentPollingStation.district._id }>{ currentPollingStation.district.name }</option>
                  { districts && districts.map(district => (
                      <option key={ district._id } value={ district._id }>{ district.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.updatePollingStation} className="btn btn-success mr-2">
                  Edit
                </button>
                <button className="btn btn-danger mr-2" onClick={this.deletePollingStation}>
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
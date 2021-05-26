import React, { Component } from "react";
import CandidateDataService from "../../services/candidate";
import DistrictDataService from "../../services/district";
import PartyDataService from "../../services/party";

export default class EditCandidate extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeParty = this.onChangeParty.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.getCandidate = this.getCandidate.bind(this);
    this.updateCandidate = this.updateCandidate.bind(this);
    this.deleteCandidate = this.deleteCandidate.bind(this);
    this.formatDate = this.formatDate.bind(this);

    // Defaults
    this.state = {
      currentCandidate: {
        id: null,
        name: "",
        dob: "",
        gender: "",
        party:"",
        district: "",
        comments: ""
      },
      parties: [],
      districts: [],
      message: ""
    };
  }

  componentDidMount() {
    this.getCandidate(this.props.match.params.id);
    this.retrieveDistricts();
    this.retrieveParties();
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the candidate.
    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        name: name
      }
    }));
  }

  onChangeDob(e) {
    const dob = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        dob: dob
      }
    }));
  }

  onChangeGender(e) {
    const gender = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        gender: gender
      }
    }));
  }

  onChangeParty(e) {
    const party = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        party: party
      }
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        district: district
      }
    }));
  }

  onChangeComments(e) {
    const comments = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        comments: comments
      }
    }));
  }

  retrieveParties() {
    PartyDataService.getAll()
      .then(response => {
        this.setState({
          parties: response.data
        });
      }).catch(e => { console.log(e) });
  }

  getCandidate(id) {
    CandidateDataService.get(id)
      .then(response => {
        this.setState({
          currentCandidate: response.data
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

  updateCandidate() {
    const currentCandidate = this.state.currentCandidate;

    CandidateDataService.update(this.state.currentCandidate._id, currentCandidate)
      .then(() => {
        this.setState({
          message: "The candidate was updated successfully!"
        });
      }).catch(error => { console.log(error); });
  }

  deleteCandidate() {
    CandidateDataService.delete(this.state.currentCandidate._id)
      .then(() => {
        this.props.history.push('/candidates')
      }).catch(error => { console.log(error); });
  }

  formatDate(date) {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const formattedDate = year + '-' + month + '-' + day;

    return (formattedDate);
  }

  render() {
    const { currentCandidate, parties, districts, message } = this.state;

    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Edit or delete candidate</legend>
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
                  placeholder={"Candidate name"}
                  value={currentCandidate.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>
            </div>
            {/* DOB Field @todo: Find a datepicker that works with react states or replace with text field. */}
            <div className={"form-group row"}>
              <label htmlFor={"dob"} className={"col-lg-3 col-form-label"}>DOB</label>
              <div>
                <input
                  type={"date"}
                  className={"form-control"}
                  id={"dob"}
                  name={"dob"}
                  value={this.formatDate(currentCandidate.dob)}
                  onChange={this.onChangeDob}
                />
              </div>
            </div>
            {/* Gender Field */}
            <div className={"form-group row"}>
              <p className={"col-lg-3"}>Gender</p>
              <div className={"form-group custom-control custom-radio custom-control-inline"}>
                <input
                  type={"radio"}
                  id={"male"}
                  name={"gender"}
                  value={"Male"}
                  className={"custom-control-input"}
                  checked={currentCandidate.gender === "Male"}
                  onChange={this.onChangeGender}
                />
                <label htmlFor={"male"} className={"custom-control-label"}>Male</label>
              </div>{}
              <div className={"form-group custom-control custom-radio custom-control-inline"}>
                <input
                  type={"radio"}
                  id={"female"}
                  name={"gender"}
                  value={"Female"}
                  className={"custom-control-input"}
                  checked={currentCandidate.gender === "Female"}
                  onChange={this.onChangeGender}
                />
                <label htmlFor={"female"} className={"custom-control-label"}>Female</label>
              </div>
              <div className={"form-group custom-control custom-radio custom-control-inline"}>
                <input
                  type={"radio"}
                  id={"other"}
                  name={"gender"}
                  value={"Other"}
                  className={"custom-control-input"}
                  checked={currentCandidate.gender === "Other"}
                  onChange={this.onChangeGender}
                />
                <label htmlFor={"other"} className={"custom-control-label"}>Other</label>
              </div>
            </div>
            {/* Party Field */}
            <div className={"form-group row"}>
              <label htmlFor={"party"} className={"col-lg-3 col-form-label"}>Party</label>
              <div>
                <select className={"form-control"} id={"party"} name={"party"} onChange={this.onChangeParty}>
                  <option value={ currentCandidate.party._id }>{ currentCandidate.party.name }</option>
                  { parties && parties.map(party => (
                      <option key={party._id} value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* District Field */}
            <div className={"form-group row"}>
              <label htmlFor={"district"} className={"col-lg-3 col-form-label"}>District</label>
              <div>
                <select className={"form-control"} id={"district"} name={"district"} onChange={this.onChangeDistrict}>
                  <option value={ currentCandidate.district._id }>{ currentCandidate.district.name }</option>
                  { districts && districts.map(district => (
                      <option key={district._id} value={ district._id }>{ district.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* Comments Field */}
            <div className={"form-group row"}>
              <label htmlFor={"comments"} className={"col-lg-3 col-form-label"}>Comments</label>
              <div>
                <textarea
                  className={"form-control"}
                  id={"comments"}
                  name={"comments"}
                  placeholder={"Say something about the candidate"}
                  rows={"5"} cols={"30"}
                  onChange={this.onChangeComments}
                  defaultValue={currentCandidate.comments}
                ></textarea>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.updateCandidate} className="btn btn-success mr-2">
                  Edit
                </button>
                <button className="btn btn-danger mr-2" onClick={this.deleteCandidate}>
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
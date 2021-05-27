import React, { Component } from "react";
import CandidateDataService from "../../services/candidate";
import LookupService from "../../services/lookup";

export default class AddCandidate extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeParty = this.onChangeParty.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.saveCandidate = this.saveCandidate.bind(this);
    this.newCandidate = this.newCandidate.bind(this);
    this.submitted = this.submitted.bind(this);
    this.retrievePartiesDistricts = this.retrievePartiesDistricts.bind(this);

    // Defaults
    this.state = {
      id: null,
      name: "",
      dob: "",
      gender: "",
      party:"",
      district: "",
      comments: "",
      parties: [],
      districts: [],

      submitted: false
    };
  }

  // Load districts and parties when component is rendered.
  componentDidMount() {
    this.retrievePartiesDistricts();
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDob(e) {
    this.setState({
      dob: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeParty(e) {
    this.setState({
      party: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    });
  }

  retrievePartiesDistricts() {
    LookupService.getAll()
      .then(response => {
        this.setState({
          parties: response.data.parties,
          districts: response.data.districts
        });
      }).catch(e => { console.log(e) });
  }

  saveCandidate() {
    const candidate = {
      name: this.state.name,
      dob: this.state.dob,
      gender: this.state.gender ,
      party: this.state.party,
      district: this.state.district,
      comments: this.state.comments,
    }

    CandidateDataService.create(candidate).then(response => {
      this.setState({
        submitted: response.data.message
      });
    }).catch(e => { console.log(e) });
  }

  newCandidate() {
    this.retrievePartiesDistricts()

    this.setState({
      id: null,
      name: "",
      dob: "",
      gender: "",
      party:"",
      district: "",
      comments: "",
      parties: this.state.parties,
      districts: this.state.districts,

      submitted: ""
    });
  }

  submitted(message) {
    if (message) {
      return (
        <div className={"alert alert-success"}>
          <h4>{message}</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Add a new candidate</legend>
            <hr />
            { this.submitted(this.state.submitted, this.state.name) }
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
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>
            </div>
            {/* DOB Field
            <div className={"form-group row"}>
              <label htmlFor={"dob"} className={"col-lg-3 col-form-label"}>DOB</label>
              <div>
                <input
                  type={"date"}
                  className={"form-control"}
                  id={"dob"}
                  name={"dob"}
                  value={this.state.dob}
                  onChange={this.onChangeDob}
                />
              </div>
            </div>*/}
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
                  checked={this.state.gender === "Male"}
                  onChange={this.onChangeGender}
                />
                <label htmlFor={"male"} className={"custom-control-label"}>Male</label>
              </div>
              <div className={"form-group custom-control custom-radio custom-control-inline"}>
                <input
                  type={"radio"}
                  id={"female"}
                  name={"gender"}
                  value={"Female"}
                  className={"custom-control-input"}
                  checked={this.state.gender === "Female"}
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
                  checked={this.state.gender === "Other"}
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
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id } value={ party._id }>{ party.name }</option>
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
                  <option defaultValue={""}>Choose District</option>
                  { this.state.districts && this.state.districts.map(district => (
                    <option key={ district._id } value={ district._id }>{ district.name }</option>
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
                  defaultValue={this.state.comments}
                ></textarea>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.saveCandidate} className="btn btn-success mr-1">
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
import React, { Component } from "react";
import PartyDataService from "../../services/party";
import {getToken, getUserFromToken} from "../../helpers/util";

export default class AddParty extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAbbreviation = this.onChangeAbbreviation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeColour = this.onChangeColour.bind(this);
    this.saveParty = this.saveParty.bind(this);
    this.newParty = this.newParty.bind(this);
    this.submitted = this.submitted.bind(this);

    // Defaults
    this.state = {
      id: null,
      name: "",
      abbreviation: "",
      description: "",
      colour: "",

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAbbreviation(e) {
    this.setState({
      abbreviation: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeColour(e) {
    this.setState({
      colour: e.target.value
    });
  }

  saveParty() {
    const party = {
      name: this.state.name,
      abbreviation: this.state.abbreviation,
      description: this.state.description,
      colour: this.state.colour
    }

    PartyDataService.create(party, getToken()).then(response => {
      this.setState({
        submitted: true
      });
    }).catch(e => { console.log(e); })
  }

  newParty() {
    this.setState({
      id: null,
      name: "",
      abbreviation: "",
      description: "",
      colour: "",

      submitted: false
    });
  }

  submitted(isSubmitted) {
    if (isSubmitted) {
      return (
        <div className={"alert alert-success"}>
          <h4>Party added successfully!</h4>
        </div>
      );
    }
  }

  render() {
    const user = getUserFromToken();

    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Add a new party</legend>
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
                  placeholder={"Party name"}
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>
            </div>
            {/* Abbreviation Field */}
            <div className={"form-group row"}>
              <label htmlFor={"abbreviation"} className={"col-lg-3 col-form-label"}>Abbreviation</label>
              <div>
                <input
                  type={"text"}
                  className={"form-control"}
                  id={"abbreviation"}
                  name={"abbreviation"}
                  placeholder={"Party abbreviation"}
                  value={this.state.abbreviation}
                  onChange={this.onChangeAbbreviation}
                />
              </div>
            </div>
            {/* Description Field */}
            <div className={"form-group row"}>
              <label htmlFor={"description"} className={"col-lg-3 col-form-label"}>Description</label>
              <div>
                <textarea
                  className={"form-control"}
                  id={"description"}
                  name={"description"}
                  placeholder={"Party description"}
                  rows={"5"} cols={"30"}
                  onChange={this.onChangeDescription}
                  defaultValue={this.state.description}
                ></textarea>
              </div>
            </div>
            {/* Colour Field */}
            <div className={"form-group row"}>
              <label htmlFor={"colour"} className={"col-lg-3 col-form-label"}>Colour</label>
              <div>
                <input
                  type={"color"}
                  className={"form-control"}
                  id={"colour"}
                  name={"colour"}
                  value={this.state.colour}
                  onChange={this.onChangeColour}
                />
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row mt-3"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                {user.role === 'Admin' &&
                  <button onClick={this.saveParty} className="btn btn-success mr-half">
                    Save
                  </button>
                }
                <a className={"btn btn-danger"} href={"/"}>Cancel</a>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
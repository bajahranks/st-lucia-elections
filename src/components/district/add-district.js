import React, { Component } from "react";
import DistrictDataService from "../../services/district";

export default class AddDistrict extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveDistrict = this.saveDistrict.bind(this);
    this.newDistrict = this.newDistrict.bind(this);
    this.submitted = this.submitted.bind(this);

    // Defaults
    this.state = {
      id: null,
      code: "",
      name: "",
      description: "",

      submitted: false
    };
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

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveDistrict() {
    const district = {
      code: this.state.code,
      name: this.state.name,
      description: this.state.description,
    }

    DistrictDataService.create(district).then(response => {
      this.setState({
        submitted: true
      });
    }).catch(e => { console.log(e); })
  }

  newDistrict() {
    this.setState({
      id: null,
      code: "",
      name: "",
      description: "",

      submitted: false
    });
  }

  submitted(isSubmitted) {
    if (isSubmitted) {
      return (
        <div className={"alert alert-success"}>
          <h4>District added successfully!</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Add a new district</legend>
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
                  placeholder={"District code"}
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
                  placeholder={"District name"}
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
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
                  placeholder={"District description"}
                  rows={"5"} cols={"30"}
                  onChange={this.onChangeDescription}
                  defaultValue={this.state.description}
                ></textarea>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row mt-3"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.saveDistrict} className="btn btn-success mr-half">
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
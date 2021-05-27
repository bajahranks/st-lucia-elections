import React, { Component } from "react";
import DistrictDataService from "../../services/district";

export default class EditDistrict extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getDistrict = this.getDistrict.bind(this);
    this.updateDistrict = this.updateDistrict.bind(this);
    this.deleteDistrict = this.deleteDistrict.bind(this);

    // Defaults
    this.state = {
      currentDistrict: {
        id: null,
        code: "",
        name: "",
        description: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDistrict(this.props.match.params.id);
  }

  onChangeCode(e) {
    const code = e.target.value;
    // Updates the state of the code value of the district.
    this.setState(prevState => ({
      currentDistrict: {
        ...prevState.currentDistrict,
        code: code
      }
    }));
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the district.
    this.setState(prevState => ({
      currentDistrict: {
        ...prevState.currentDistrict,
        name: name
      }
    }));
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentDistrict: {
        ...prevState.currentDistrict,
        description: description
      }
    }));
  }

  getDistrict(id) {
    DistrictDataService.get(id)
      .then(response => {
        this.setState({
          currentDistrict: response.data
        });
      }).catch(error => {
        console.log(error);
      });
  }

  updateDistrict() {
    const currentDistrict = this.state.currentDistrict;

    DistrictDataService.update(this.state.currentDistrict._id, currentDistrict)
      .then(() => {
        this.setState({
          message: "The district was updated successfully!"
        });
      }).catch(error => {
        console.log(error);
      });
  }

  deleteDistrict() {
    DistrictDataService.delete(this.state.currentDistrict._id)
      .then(() => {
        this.props.history.push('/districts')
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    const { currentDistrict, message } = this.state;

    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Edit or delete district</legend>
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
                  placeholder={"District code"}
                  value={currentDistrict.code}
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
                  value={currentDistrict.name}
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
                  value={currentDistrict.description}
                >''</textarea>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.updateDistrict} className="btn btn-success mr-2">
                  Edit
                </button>
                <button className="btn btn-danger mr-2" onClick={this.deleteDistrict}>
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
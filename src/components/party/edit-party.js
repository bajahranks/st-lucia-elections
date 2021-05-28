import React, { Component } from "react";
import PartyDataService from "../../services/party";
import Loader from "react-loader-spinner";

export default class EditParty extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAbbreviation = this.onChangeAbbreviation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeColour = this.onChangeColour.bind(this);
    this.getParty = this.getParty.bind(this);
    this.updateParty = this.updateParty.bind(this);
    this.deleteParty = this.deleteParty.bind(this);

    // Defaults
    this.state = {
      currentParty: {
        id: null,
        name: "",
        abbreviation: "",
        description: "",
        colour: ""
      },
      message: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getParty(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the party.
    this.setState(prevState => ({
      currentParty: {
        ...prevState.currentParty,
        name: name
      }
    }));
  }

  onChangeAbbreviation(e) {
    const abbreviation = e.target.value;

    this.setState(prevState => ({
      currentParty: {
        ...prevState.currentParty,
        abbreviation: abbreviation
      }
    }));
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentParty: {
        ...prevState.currentParty,
        description: description
      }
    }));
  }

  onChangeColour(e) {
    const colour = e.target.value;
    // Updates the state of the name value of the party.
    this.setState(prevState => ({
      currentParty: {
        ...prevState.currentParty,
        colour: colour
      }
    }));
  }

  getParty(id) {
    PartyDataService.get(id)
      .then(response => {
        this.setState({
          currentParty: response.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateParty() {
    const currentParty = this.state.currentParty;

    PartyDataService.update(this.state.currentParty._id, currentParty)
      .then(() => {
        this.setState({
          message: "The party was updated successfully!"
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteParty() {
    PartyDataService.delete(this.state.currentParty._id)
      .then(() => {
        this.props.history.push('/parties')
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { currentParty, message } = this.state;

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
            <legend>Edit or delete party</legend>
            <hr />
            {message ? (
            <div className={"alert alert-success"}>
              <h4>{message}</h4>
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
                    placeholder={"Party name"}
                    value={currentParty.name}
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
                    value={currentParty.abbreviation}
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
                  defaultValue={currentParty.description}
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
                    value={currentParty.colour}
                    onChange={this.onChangeColour}
                  />
                </div>
              </div>
              {/* Buttons */}
              <div className={"form-group row mt-3"}>
                <div className={"col-lg-10 col-lg-offset-2"}>
                  <button onClick={this.updateParty} className="btn btn-success mr-half">
                    Edit
                  </button>
                  <button className="btn btn-danger mr-half" onClick={this.deleteParty}>
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
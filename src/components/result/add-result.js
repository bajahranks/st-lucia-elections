import React, { Component } from "react";
import ResultDataService from "../../services/result";
import DistrictDataService from "../../services/district";
//import PartyDataService from "../../services/party";
import CandidateDataService from "../../services/candidate";
import SectionDataService from "../../services/section";
import PollingStationDataService from "../../services/polling-station";

export default class AddResult extends Component {
  constructor(props) {
    super(props);
    // Methods
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangePollingStation = this.onChangePollingStation.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onChangeCandidate1 = this.onChangeCandidate1.bind(this);
    this.onChangeCandidate1Votes = this.onChangeCandidate1Votes.bind(this);
    //this.onChangeCandidate1Party = this.onChangeCandidate1Party.bind(this);
    this.onChangeCandidate2 = this.onChangeCandidate2.bind(this);
    this.onChangeCandidate2Votes = this.onChangeCandidate2Votes.bind(this);
    //this.onChangeCandidate2Party = this.onChangeCandidate2Party.bind(this);
    this.onChangeCandidate3 = this.onChangeCandidate3.bind(this);
    this.onChangeCandidate3Votes = this.onChangeCandidate3Votes.bind(this);
    //this.onChangeCandidate3Party = this.onChangeCandidate3Party.bind(this);
    this.onChangeCandidate4 = this.onChangeCandidate4.bind(this);
    this.onChangeCandidate4Votes = this.onChangeCandidate4Votes.bind(this);
    //this.onChangeCandidate4Party = this.onChangeCandidate4Party.bind(this);
    this.onChangeCandidate5 = this.onChangeCandidate5.bind(this);
    this.onChangeCandidate5Votes = this.onChangeCandidate5Votes.bind(this);
    //this.onChangeCandidate5Party = this.onChangeCandidate5Party.bind(this);
    this.onChangeCandidate6 = this.onChangeCandidate6.bind(this);
    this.onChangeCandidate6Votes = this.onChangeCandidate6Votes.bind(this);
    this.onChangeRegisteredVoters = this.onChangeRegisteredVoters.bind(this);
    this.onChangeVotesCast = this.onChangeVotesCast.bind(this);
    this.onChangeRejectedVotes = this.onChangeRejectedVotes.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.saveResult = this.saveResult.bind(this);
    this.newResult = this.newResult.bind(this);
    this.submitted = this.submitted.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);
    //this.retrieveParties = this.retrieveParties.bind(this);
    this.retrievePollingStations = this.retrievePollingStations.bind(this);
    this.retrieveSections = this.retrieveSections.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);

    // Defaults
    this.state = {
      id: null,
      year: "",
      district: "",
      pollingStation: "",
      section:"",
      candidate1: "",
      candidate1Votes: "",
      //candidate1Party: "",
      candidate2: "",
      candidate2Votes: "",
      //candidate2Party: "",
      candidate3: "",
      candidate3Votes: "",
      //candidate3Party: "",
      candidate4: "",
      candidate4Votes: "",
      //candidate4Party: "",
      candidate5: "",
      candidate5Votes: "",
      //candidate5Party: "",
      candidate6: "",
      candidate6Votes: "",
      //candidate6Party: "",
      registeredVoters: "",
      votesCast:"",
      rejectedVotes:"",
      comments: "",
      //parties: [],
      districts: [],
      pollingStations: [],
      sections: [],
      candidates: [],

      submitted: false
    };
  }

  // Load districts when component is rendered.
  componentDidMount() {
    this.retrieveDistricts();
    //this.retrieveParties();
    this.retrievePollingStations();
    this.retrieveSections();
    this.retrieveCandidates();
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  }

  onChangePollingStation(e) {
    this.setState({
      pollingStation: e.target.value
    });
  }

  onChangeSection(e) {
    this.setState({
      section: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  onChangeCandidate1(e) {
    this.setState({
      candidate1: e.target.value
    });
  }

  onChangeCandidate1Votes(e) {
    this.setState({
      candidate1Votes: e.target.value
    });
  }

  /*onChangeCandidate1Party(e) {
    this.setState({
      candidate1Party: e.target.value
    });
  }*/

  onChangeCandidate2(e) {
    this.setState({
      candidate2: e.target.value
    });
  }

  onChangeCandidate2Votes(e) {
    this.setState({
      candidate2Votes: e.target.value
    });
  }

  /*onChangeCandidate2Party(e) {
    this.setState({
      candidate2Party: e.target.value
    });
  }*/

  onChangeCandidate3(e) {
    this.setState({
      candidate3: e.target.value
    });
  }

  onChangeCandidate3Votes(e) {
    this.setState({
      candidate3Votes: e.target.value
    });
  }

  /*onChangeCandidate3Party(e) {
    this.setState({
      candidate3Party: e.target.value
    });
  }*/

  onChangeCandidate4(e) {
    this.setState({
      candidate4: e.target.value
    });
  }

  onChangeCandidate4Votes(e) {
    this.setState({
      candidate4Votes: e.target.value
    });
  }

  /*onChangeCandidate4Party(e) {
    this.setState({
      candidate4Party: e.target.value
    });
  }*/

  onChangeCandidate5(e) {
    this.setState({
      candidate5: e.target.value
    });
  }

  onChangeCandidate5Votes(e) {
    this.setState({
      candidate5Votes: e.target.value
    });
  }

  /*onChangeCandidate5Party(e) {
    this.setState({
      candidate5Party: e.target.value
    });
  }*/

  onChangeCandidate6(e) {
    this.setState({
      candidate6: e.target.value
    });
  }

  onChangeCandidate6Votes(e) {
    this.setState({
      candidate6Votes: e.target.value
    });
  }

  /*onChangeCandidate6Party(e) {
    this.setState({
      candidate6Party: e.target.value
    });
  }*/

  onChangeRegisteredVoters(e) {
    this.setState({
      registeredVoters: e.target.value
    });
  }

  onChangeVotesCast(e) {
    this.setState({
      votesCast: e.target.value
    });
  }

  onChangeRejectedVotes(e) {
    this.setState({
      rejectedVotes: e.target.value
    });
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    });
  }

  /*retrieveParties() {
    PartyDataService.getAll()
      .then(response => {
        this.setState({
          parties: response.data
        });
      }).catch(e => { console.log(e) });
  }*/

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data
        });
      }).catch(e => { console.log(e) });
  }

  retrievePollingStations() {
    PollingStationDataService.getAll()
      .then(response => {
        this.setState({
          pollingStations: response.data
        });
      }).catch(e => { console.log(e) });
  }

  retrieveSections() {
    SectionDataService.getAll()
      .then(response => {
        this.setState({
          sections: response.data
        });
      }).catch(e => { console.log(e) });
  }

  retrieveCandidates() {
    CandidateDataService.getAll()
      .then(response => {
        this.setState({
          candidates: response.data
        });
      }).catch(e => { console.log(e) });
  }

  saveResult() {
    const result = {
      year: this.state.year,
      pollingStation: this.state.pollingStation,
      section: this.state.section,
      district: this.state.district,
      candidate1: this.state.candidate1,
      candidate1Votes: this.state.candidate1Votes,
      //candidate1Party: this.state.candidate1Party,
      candidate2: this.state.candidate2,
      candidate2Votes: this.state.candidate2Votes,
      //candidate2Party: this.state.candidate2Party,
      candidate3: this.state.candidate3,
      candidate3Votes: this.state.candidate3Votes,
      //candidate3Party: this.state.candidate3Party,
      candidate4: this.state.candidate4,
      candidate4Votes: this.state.candidate4Votes,
      //candidate4Party: this.state.candidate4Party,
      candidate5: this.state.candidate5,
      candidate5Votes: this.state.candidate5Votes,
      //candidate5Party: this.state.candidate5Party,
      candidate6: this.state.candidate6,
      candidate6Votes: this.state.candidate6Votes,
      registeredVoters: this.state.registeredVoters,
      votesCast: this.state.votesCast,
      rejectedVotes: this.state.rejectedVotes,
      comments: this.state.comments,
    }

    ResultDataService.create(result).then(response => {
      console.log(response.data.result._id)
      this.setState({
        id: response.data.result._id,
        submitted: true
      });
    }).catch(e => { console.log(e) })
  }

  newResult() {
    this.setState({
      id: null,
      year: "",
      district: "",
      pollingStation: "",
      section:"",
      candidate1: "",
      candidate1Votes: "",
      //candidate1Party: "",
      candidate2: "",
      candidate2Votes: "",
      //candidate2Party: "",
      candidate3: "",
      candidate3Votes: "",
      //candidate3Party: "",
      candidate4: "",
      candidate4Votes: "",
      //candidate4Party: "",
      candidate5: "",
      candidate5Votes: "",
      //candidate5Party: "",
      candidate6: "",
      candidate6Votes: "",
      registeredVoters: "",
      votesCast:"",
      rejectedVotes:"",
      comments: "",
      parties: [],
      districts: [],
      pollingStations: [],
      sections: [],
      candidates: [],

      submitted: false
    });
  }

  submitted(isSubmitted, id) {
    if (isSubmitted) {
      return (
        <div className={"alert alert-success"}>
          <h4>Result {id} added successfully!</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"container col-md-8 col-md-offset-2 mt-3"}>
        <div className={"card card-body bg-light"}>
          <fieldset>
            <legend>Add a new result</legend>
            <hr />

            {/* Year Field */}
            <div className={"form-group row"}>
              <label htmlFor={"name"} className={"col-lg-3 col-form-label"}>Year</label>
              <div>
                <input
                  type={"text"}
                  className={"form-control"}
                  id={"year"}
                  name={"year"}
                  placeholder={"Election year"}
                  value={this.state.year}
                  onChange={this.onChangeYear}
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
            {/* Polling Station Field */}
            <div className={"form-group row"}>
              <label htmlFor={"pollingStation"} className={"col-lg-3 col-form-label"}>Polling Station</label>
              <div>
                <select className={"form-control"} id={"pollingStation"} name={"pollingStation"} onChange={this.onChangePollingStation}>
                  <option defaultValue={""}>Choose Polling Station</option>
                  { this.state.pollingStations && this.state.pollingStations.map(pollingStation => {
                    return (pollingStation.district._id === this.state.district) ?
                        <option key={ pollingStation._id } value={ pollingStation._id }>
                          { pollingStation.name }
                        </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Sections Field */}
            <div className={"form-group row"}>
              <label htmlFor={"section"} className={"col-lg-3 col-form-label"}>Section</label>
              <div>
                <select className={"form-control"} id={"section"} name={"section"} onChange={this.onChangeSection}>
                  <option defaultValue={""}>Choose Section</option>
                  { this.state.sections && this.state.sections.map(section => {
                    return (section.pollingStation._id === this.state.pollingStation) ?
                      <option key={ section._id} value={ section._id }>
                        { section.name }
                      </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Candidate1 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate1"} className={"col-lg-3 col-form-label"}>SLP Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate1"} name={"candidate1"} onChange={this.onChangeCandidate1}>
                  <option defaultValue={""}>Choose Candidate</option>
                  { this.state.candidates && this.state.candidates.map(candidate => {
                    return (candidate.district._id === this.state.district) ?
                      <option key={ candidate._id } value={ candidate._id }>
                        { candidate.name }
                      </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Candidate1 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate1Party"} className={"col-lg-3 col-form-label"}> Candidate 1 Party</label>
              <div>
                <select className={"form-control"} id={"candidate1Party"} name={"candidate1Party"} onChange={this.onChangeCandidate1Party}>
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id } value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate1 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate1Votes"} className={"col-lg-3 col-form-label"}>SLP Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate1Votes"}
                  name={"candidate1Votes"}
                  value={this.state.candidate1Votes}
                  onChange={this.onChangeCandidate1Votes}
                  required
                />
              </div>
            </div>
            {/* Candidate2 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate2"} className={"col-lg-3 col-form-label"}>UWP Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate2"} name={"candidate2"} onChange={this.onChangeCandidate2}>
                  <option defaultValue={""}>Choose Candidate</option>
                  { this.state.candidates && this.state.candidates.map(candidate => {
                    return (candidate.district._id === this.state.district) ?
                      <option key={ candidate._id } value={ candidate._id }>
                        { candidate.name }
                      </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Candidate2 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate2Party"} className={"col-lg-3 col-form-label"}> Candidate 2 Party</label>
              <div>
                <select className={"form-control"} id={"candidate2Party"} name={"candidate2Party"} onChange={this.onChangeCandidate2Party}>
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id } value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate2 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate2Votes"} className={"col-lg-3 col-form-label"}>UWP Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate2Votes"}
                  name={"candidate2Votes"}
                  value={this.state.candidate2Votes}
                  onChange={this.onChangeCandidate2Votes}
                  required
                />
              </div>
            </div>
            {/* Candidate3 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate3"} className={"col-lg-3 col-form-label"}>LPM Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate3"} name={"candidate3"} onChange={this.onChangeCandidate3}>
                  <option defaultValue={""}>Choose Candidate</option>
                  { this.state.candidates && this.state.candidates.map(candidate => {
                    return (candidate.district._id === this.state.district) ?
                      <option key={ candidate._id } value={ candidate._id }>
                        { candidate.name }
                      </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Candidate3 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate3Party"} className={"col-lg-3 col-form-label"}> Candidate 3 Party</label>
              <div>
                <select className={"form-control"} id={"candidate3Party"} name={"candidate3Party"} onChange={this.onChangeCandidate3Party}>
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id} value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate3 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate3Votes"} className={"col-lg-3 col-form-label"}>LPM Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate3Votes"}
                  name={"candidate3Votes"}
                  value={this.state.candidate3Votes}
                  onChange={this.onChangeCandidate3Votes}
                />
              </div>
            </div>
            {/* Candidate4 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate4"} className={"col-lg-3 col-form-label"}>LG Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate4"} name={"candidate4"} onChange={this.onChangeCandidate4}>
                  <option defaultValue={""}>Choose Candidate</option>
                  { this.state.candidates && this.state.candidates.map(candidate => {
                    return (candidate.district._id === this.state.district) ?
                      <option key={ candidate._id } value={ candidate._id }>
                        { candidate.name }
                      </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Candidate4 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate4Party"} className={"col-lg-3 col-form-label"}> Candidate 4 Party</label>
              <div>
                <select className={"form-control"} id={"candidate4Party"} name={"candidate4Party"} onChange={this.onChangeCandidate4Party}>
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id} value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate4 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate4Votes"} className={"col-lg-3 col-form-label"}>LG Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate4Votes"}
                  name={"candidate4Votes"}
                  value={this.state.candidate4Votes}
                  onChange={this.onChangeCandidate4Votes}
                />
              </div>
            </div>
            {/* Candidate5 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate5"} className={"col-lg-3 col-form-label"}>Indep. Candidate 1</label>
              <div>
                <select className={"form-control"} id={"candidate5"} name={"candidate5"} onChange={this.onChangeCandidate5}>
                  <option defaultValue={""}>Choose Candidate</option>
                  { this.state.candidates && this.state.candidates.map(candidate => {
                    return (candidate.district._id === this.state.district) ?
                      <option key={ candidate._id } value={ candidate._id }>
                        { candidate.name }
                      </option> : ''
                    })
                  }
                </select>
              </div>
            </div>
            {/* Candidate5 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate5Party"} className={"col-lg-3 col-form-label"}> Candidate 5 Party</label>
              <div>
                <select className={"form-control"} id={"candidate5Party"} name={"candidate5Party"} onChange={this.onChangeCandidate5Party}>
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id} value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate5 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate5Votes"} className={"col-lg-3 col-form-label"}>Indep. 1 Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate5Votes"}
                  name={"candidate5Votes"}
                  value={this.state.candidate5Votes}
                  onChange={this.onChangeCandidate5Votes}
                />
              </div>
            </div>
            {/* Candidate6 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate6"} className={"col-lg-3 col-form-label"}>Indep. Candidate 2</label>
              <div>
                <select className={"form-control"} id={"candidate6"} name={"candidate6"} onChange={this.onChangeCandidate6}>
                  <option defaultValue={""}>Choose Candidate</option>
                  { this.state.candidates && this.state.candidates.map(candidate => {
                    return (candidate.district._id === this.state.district) ?
                      <option key={ candidate._id } value={ candidate._id }>
                        { candidate.name }
                      </option> : ''
                  })
                  }
                </select>
              </div>
            </div>
            {/* Candidate5 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate5Party"} className={"col-lg-3 col-form-label"}> Candidate 5 Party</label>
              <div>
                <select className={"form-control"} id={"candidate5Party"} name={"candidate5Party"} onChange={this.onChangeCandidate5Party}>
                  <option defaultValue={""}>Choose Party</option>
                  { this.state.parties && this.state.parties.map(party => (
                      <option key={ party._id} value={ party._id }>{ party.name }</option>
                    ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate6 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate6Votes"} className={"col-lg-3 col-form-label"}>Indep. 2 Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate6Votes"}
                  name={"candidate6Votes"}
                  value={this.state.candidate6Votes}
                  onChange={this.onChangeCandidate6Votes}
                />
              </div>
            </div>
            {/* Registered Voters Field */}
            <div className={"form-group row"}>
              <label htmlFor={"registeredVoters"} className={"col-lg-3 col-form-label"}>Registered Voters</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"registeredVoters"}
                  name={"registeredVoters"}
                  value={this.state.registeredVoters}
                  onChange={this.onChangeRegisteredVoters}
                  required
                />
              </div>
            </div>
            {/* Votes Cast Field */}
            <div className={"form-group row"}>
              <label htmlFor={"votesCast"} className={"col-lg-3 col-form-label"}>Votes Cast</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"votesCast"}
                  name={"votesCast"}
                  value={this.state.votesCast}
                  onChange={this.onChangeVotesCast}
                  required
                />
              </div>
            </div>
            {/* Rejected Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"rejectedVotes"} className={"col-lg-3 col-form-label"}>Rejected Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"rejectedVotes"}
                  name={"rejectedVotes"}
                  value={this.state.rejectedVotes}
                  onChange={this.onChangeRejectedVotes}
                  required
                />
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
                  placeholder={"Say something about the result"}
                  rows={"5"} cols={"30"}
                  onChange={this.onChangeComments}
                  defaultValue={this.state.comments}
                ></textarea>
              </div>
            </div>
            { this.submitted(this.state.submitted, this.state.id) }
            {/* Buttons */}
            <div className={"form-group row"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.saveResult} className="btn btn-success mr-1">
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
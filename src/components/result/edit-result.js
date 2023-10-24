import React, { Component } from "react";
import ResultDataService from "../../services/result";
import DistrictDataService from "../../services/district";
import PollingStationDataService from "../../services/polling-station";
import SectionDataService from "../../services/section";
import CandidateDataService from "../../services/candidate";
import Loader from "react-loader-spinner";
import { getToken } from '../../helpers/util';

export default class EditResult extends Component{
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
    this.getResult = this.getResult.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.deleteResult = this.deleteResult.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);
    //this.retrieveParties = this.retrieveParties.bind(this);
    this.retrievePollingStations = this.retrievePollingStations.bind(this);
    this.retrieveSections = this.retrieveSections.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);

    // Defaults
    this.state = {
      currentResult: {
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
        votesCast: "",
        rejectedVotes: "",
        comments: ""
      },
      //parties: [],
      districts: [],
      pollingStations: [],
      sections: [],
      candidates: [],
      message: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getResult(this.props.match.params.id);
    this.retrieveDistricts();
    this.retrieveCandidates();
    //this.retrieveParties();
    this.retrievePollingStations();
    this.retrieveSections();
  }

  onChangeYear(e) {
    const year = e.target.value;
    // Updates the state of the year value of the result.
    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        year: year
      }
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;
    // Updates the state of the district value of the result.
    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        district: district
      }
    }));
  }

  onChangePollingStation(e) {
    const pollingStation = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        pollingStation: pollingStation
      }
    }));
  }

  onChangeSection(e) {
    const section = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        section: section
      }
    }));
  }

  onChangeCandidate1(e) {
    const candidate1 = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate1: candidate1
      }
    }));
  }

  onChangeCandidate1Votes(e) {
    const candidate1Votes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate1Votes: candidate1Votes
      }
    }));
  }

  /*onChangeCandidate1Party(e) {
    const candidate1Party = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate1Party: candidate1Party
      }
    }));
  }*/

  onChangeCandidate2(e) {
    const candidate2 = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate2: candidate2
      }
    }));
  }

  onChangeCandidate2Votes(e) {
    const candidate2Votes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate2Votes: candidate2Votes
      }
    }));
  }

  /*onChangeCandidate2Party(e) {
    const candidate2Party = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate2Party: candidate2Party
      }
    }));
  }*/

  onChangeCandidate3(e) {
    const candidate3 = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate3: candidate3
      }
    }));
  }

  onChangeCandidate3Votes(e) {
    const candidate3Votes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate3Votes: candidate3Votes
      }
    }));
  }

  /*onChangeCandidate3Party(e) {
    const candidate3Party = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate3Party: candidate3Party
      }
    }));
  }*/

  onChangeCandidate4(e) {
    const candidate4 = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate4: candidate4
      }
    }));
  }

  onChangeCandidate4Votes(e) {
    const candidate4Votes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate4Votes: candidate4Votes
      }
    }));
  }

  /*onChangeCandidate4Party(e) {
    const candidate4Party = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate4Party: candidate4Party
      }
    }));
  }*/

  onChangeCandidate5(e) {
    const candidate5 = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate5: candidate5
      }
    }));
  }

  onChangeCandidate5Votes(e) {
    const candidate5Votes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate5Votes: candidate5Votes
      }
    }));
  }

  /*onChangeCandidate5Party(e) {
    const candidate5Party = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate5Party: candidate5Party
      }
    }));
  }*/

  onChangeCandidate6(e) {
    const candidate6 = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate6: candidate6
      }
    }));
  }

  onChangeCandidate6Votes(e) {
    const candidate6Votes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        candidate6Votes: candidate6Votes
      }
    }));
  }

  onChangeRegisteredVoters(e) {
    const registeredVoters = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        registeredVoters: registeredVoters
      }
    }));
  }

  onChangeVotesCast(e) {
    const votesCast = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        votesCast: votesCast
      }
    }));
  }

  onChangeRejectedVotes(e) {
    const rejectedVotes = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        rejectedVotes: rejectedVotes
      }
    }));
  }

  onChangeComments(e) {
    const comments = e.target.value;

    this.setState(prevState => ({
      currentResult: {
        ...prevState.currentResult,
        comments: comments
      }
    }));
  }

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data
        });
      }).catch(e => { console.log(e) });
  }

  /*retrieveParties() {
    PartyDataService.getAll()
      .then(response => {
        this.setState({
          parties: response.data
        });
      }).catch(e => { console.log(e) });
  }*/

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
          sections: response.data,
          isLoading: false
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

  getResult(id) {
    ResultDataService.get(id)
      .then(response => {
        this.setState({
          currentResult: response.data
        });
      }).catch(error => { console.log(error); });
  }

  updateResult() {
    const currentResult = this.state.currentResult;

    ResultDataService.update(this.state.currentResult._id, currentResult, getToken())
      .then(() => {
        this.setState({
          message: "The result was updated successfully!"
        });
      }).catch(error => { console.log(error + ' failed to update result') });
  }

  deleteResult() {
    ResultDataService.delete(this.state.currentResult._id, getToken())
      .then(() => {
        this.props.history.push('/results')
      }).catch(error => { console.log(error); });
  }

  render() {
    const { currentResult, districts, pollingStations, sections, candidates, message } = this.state;

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
            <legend>Edit or delete result</legend>
            <hr />
            { message ? (
              <div className={"alert alert-success"}>
                <h4>{ message }</h4>
              </div>
            ): ("")}
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
                  value={currentResult.year}
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
                  <option value={currentResult.district._id} key={currentResult.district._id}>{ currentResult.district.name }</option>
                  { districts && districts.map(district => (
                    <option value={district._id} key={district._id}>{ district.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Polling Station Field */}
            <div className={"form-group row"}>
              <label htmlFor={"pollingStation"} className={"col-lg-3 col-form-label"}>Polling Station</label>
              <div>
                <select className={"form-control"} id={"pollingStation"} name={"pollingStation"} onChange={this.onChangePollingStation}
                        value={currentResult.pollingStation._id} key={currentResult.pollingStation._id}>
                  { currentResult.pollingStation.name }
                  { pollingStations && pollingStations.map(pollingStation => (
                    <option value={pollingStation._id} key={pollingStation._id}>{ pollingStation.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Sections Field */}
            <div className={"form-group row"}>
              <label htmlFor={"section"} className={"col-lg-3 col-form-label"}>Section</label>
              <div>
                <select className={"form-control"} id={"section"} name={"section"} onChange={this.onChangeSection}>
                  <option value={currentResult.section._id} key={currentResult.section._id}>{ currentResult.section.name }</option>
                  { sections && sections.map(section => (
                    <option value={section._id} key={section._id}>{ section.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate1 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate1"} className={"col-lg-3 col-form-label"}>SLP Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate1"} name={"candidate1"} onChange={this.onChangeCandidate1}
                        value={currentResult.candidate1._id} key={currentResult.candidate1._id}>
                  { currentResult.candidate1.name }
                  {/*<option defaultValue={""}>{}</option>*/}
                  {/*<option value={currentResult.candidate1._id} key={currentResult.candidate1._id}>{ currentResult.candidate1.name }</option>*/}
                  { candidates && candidates.map(candidate => (
                    <option value={candidate._id} key={candidate._id}>{ candidate.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate1 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate1Party"} className={"col-lg-3 col-form-label"}> Candidate 1 Party</label>
              <div>
                <select className={"form-control"} id={"candidate1Party"} name={"candidate1Party"} onChange={this.onChangeCandidate1Party}>
                  <option value={currentResult.candidate1Party._id} key={currentResult.candidate1Party._id}>{ currentResult.candidate1Party.name }</option>
                  { parties && parties.map(party => (
                    <option value={party._id} key={party._id}>{ party.name }</option>
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
                  value={currentResult.candidate1Votes}
                  onChange={this.onChangeCandidate1Votes}
                  required
                />
              </div>
            </div>
            {/* Candidate2 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate2"} className={"col-lg-3 col-form-label"}>UWP Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate2"} name={"candidate2"} onChange={this.onChangeCandidate2}
                        value={currentResult.candidate2._id} key={currentResult.candidate2._id}>
                  { currentResult.candidate2.name }
                  {/*<option value={currentResult.candidate2._id} key={currentResult.candidate2._id}>{ currentResult.candidate2.name }</option>*/}
                  {/*<option defaultValue={""}>{}</option>*/}
                  { candidates && candidates.map(candidate => (
                    <option value={candidate._id} key={candidate._id}>{ candidate.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate2 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate2Party"} className={"col-lg-3 col-form-label"}> Candidate 2 Party</label>
              <div>
                <select className={"form-control"} id={"candidate2Party"} name={"candidate2Party"} onChange={this.onChangeCandidate2Party}>
                  <option value={currentResult.candidate2Party._id} key={currentResult.candidate2Party._id}>{ currentResult.candidate2Party.name }</option>
                  { parties && parties.map(party => (
                    <option value={party._id} key={party._id}>{ party.name }</option>
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
                  value={currentResult.candidate2Votes}
                  onChange={this.onChangeCandidate2Votes}
                  required
                />
              </div>
            </div>
            {/* Candidate3 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate3"} className={"col-lg-3 col-form-label"}>LPM Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate3"} name={"candidate3"} onChange={this.onChangeCandidate3}
                        value={currentResult.candidate3 && currentResult.candidate3._id}
                        key={currentResult.candidate3 && currentResult.candidate3._id}>
                  { currentResult.candidate3 && currentResult.candidate3.name }
                  {/*<option
                    value={currentResult.candidate3 && currentResult.candidate3._id}
                    key={currentResult.candidate3 && currentResult.candidate3._id}>
                    { currentResult.candidate3 && currentResult.candidate3.name }
                  </option>*/}
                  <option>{}</option>
                  { candidates && candidates.map(candidate => (
                    <option value={candidate._id} key={candidate._id}>{ candidate.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate3 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate3Party"} className={"col-lg-3 col-form-label"}> Candidate 3 Party</label>
              <div>
                <select className={"form-control"} id={"candidate3Party"} name={"candidate3Party"} onChange={this.onChangeCandidate3Party}>
                  <option
                    value={currentResult.candidate3Party && currentResult.candidate3Party._id}
                    key={currentResult.candidate3Party && currentResult.candidate3Party._id}>
                    { currentResult.candidate3Party && currentResult.candidate3Party.name }
                  </option>
                  { parties && parties.map(party => (
                    <option value={party._id} key={party._id}>{ party.name }</option>
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
                  value={currentResult.candidate3Votes}
                  onChange={this.onChangeCandidate3Votes}
                />
              </div>
            </div>
            {/* Candidate4 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate4"} className={"col-lg-3 col-form-label"}>LG Candidate</label>
              <div>
                <select className={"form-control"} id={"candidate4"} name={"candidate4"} onChange={this.onChangeCandidate4}
                        value={currentResult.candidate4 && currentResult.candidate4._id}
                        key={currentResult.candidate4 && currentResult.candidate4._id}>
                  { currentResult.candidate4 && currentResult.candidate4.name }
                  <option>{}</option>
                  { candidates && candidates.map(candidate => (
                    <option value={candidate._id} key={candidate._id}>{ candidate.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate4 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate4Party"} className={"col-lg-3 col-form-label"}> Candidate 4 Party</label>
              <div>
                <select className={"form-control"} id={"candidate4Party"} name={"candidate4Party"} onChange={this.onChangeCandidate4Party}>
                  <option
                    value={currentResult.candidate4Party && currentResult.candidate4Party._id}
                    key={currentResult.candidate4Party && currentResult.candidate4Party._id}>
                    { currentResult.candidate4Party && currentResult.candidate4Party.name }
                  </option>
                  { parties && parties.map(party => (
                    <option value={party._id} key={party._id}>{ party.name }</option>
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
                  value={currentResult.candidate4Votes}
                  onChange={this.onChangeCandidate4Votes}
                />
              </div>
            </div>
            {/* Candidate5 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate5"} className={"col-lg-3 col-form-label"}>Indep. Candidate 1</label>
              <div>
                <select className={"form-control"} id={"candidate5"} name={"candidate5"} onChange={this.onChangeCandidate5}
                        value={currentResult.candidate5 && currentResult.candidate5._id}
                        key={currentResult.candidate5 && currentResult.candidate5._id}>
                  { currentResult.candidate5 && currentResult.candidate5.name }
                  <option>{}</option>
                  { candidates && candidates.map(candidate => (
                    <option value={candidate._id} key={candidate._id}>{ candidate.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate5 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate5Party"} className={"col-lg-3 col-form-label"}> Candidate 5 Party</label>
              <div>
                <select className={"form-control"} id={"candidate5Party"} name={"candidate5Party"} onChange={this.onChangeCandidate5Party}>
                  <option
                    value={currentResult.candidate5Party && currentResult.candidate5Party._id}
                    key={currentResult.candidate5Party && currentResult.candidate5Party._id}>
                    { currentResult.candidate5Party && currentResult.candidate5Party.name }
                  </option>
                  { parties && parties.map(party => (
                    <option value={party._id} key={party._id}>{ party.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate5 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate5Votes"} className={"col-lg-3 col-form-label"}>Indep. Candidate 1 Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate5Votes"}
                  name={"candidate5Votes"}
                  value={currentResult.candidate5Votes}
                  onChange={this.onChangeCandidate5Votes}
                />
              </div>
            </div>
            {/* Candidate6 Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate6"} className={"col-lg-3 col-form-label"}>Indep. Candidate 2</label>
              <div>
                <select className={"form-control"} id={"candidate6"} name={"candidate6"} onChange={this.onChangeCandidate6}
                        value={currentResult.candidate6 && currentResult.candidate6._id}
                        key={currentResult.candidate6 && currentResult.candidate6._id}>
                  { currentResult.candidate6 && currentResult.candidate6.name }
                  <option>{}</option>
                  { candidates && candidates.map(candidate => (
                    <option value={candidate._id} key={candidate._id}>{ candidate.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>
            {/* Candidate5 Party Field
            <div className={"form-group row"}>
              <label htmlFor={"candidate5Party"} className={"col-lg-3 col-form-label"}> Candidate 5 Party</label>
              <div>
                <select className={"form-control"} id={"candidate5Party"} name={"candidate5Party"} onChange={this.onChangeCandidate5Party}>
                  <option
                    value={currentResult.candidate5Party && currentResult.candidate5Party._id}
                    key={currentResult.candidate5Party && currentResult.candidate5Party._id}>
                    { currentResult.candidate5Party && currentResult.candidate5Party.name }
                  </option>
                  { parties && parties.map(party => (
                    <option value={party._id} key={party._id}>{ party.name }</option>
                  ))
                  }
                </select>
              </div>
            </div>*/}
            {/* Candidate6 Votes Field */}
            <div className={"form-group row"}>
              <label htmlFor={"candidate6Votes"} className={"col-lg-3 col-form-label"}>Indep. Candidate 2 Votes</label>
              <div>
                <input
                  type={"number"}
                  className={"form-control"}
                  id={"candidate6Votes"}
                  name={"candidate6Votes"}
                  value={currentResult.candidate6Votes}
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
                  value={currentResult.registeredVoters}
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
                  value={currentResult.votesCast}
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
                  value={currentResult.rejectedVotes}
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
                  value={currentResult.comments}
                >''</textarea>
              </div>
            </div>
            {/* Buttons */}
            <div className={"form-group row mt-3"}>
              <div className={"col-lg-10 col-lg-offset-2"}>
                <button onClick={this.updateResult} className="btn btn-success mr-half">
                  Edit
                </button>
                <button className="btn btn-danger mr-half" onClick={this.deleteResult}>
                  Delete
                </button>
                <a className={"btn btn-warning"} href={"/results"}>Cancel</a>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
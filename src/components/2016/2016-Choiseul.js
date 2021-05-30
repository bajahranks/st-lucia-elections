import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

export default class Choiseul2016 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.resultsByYear(2016)
  }

  resultsByYear(year) {
    ResultDataService.findByYear(year)
      .then(response => {
        this.setState({
          results: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const slpCandidate = 'L. Theophilus';
    const uwpCandidate = 'J. Felix';

    return (
      <div>
        <section className={"container"}>
          <Loader
            type={"MutatingDots"}
            color={"Yellow"}
            secondaryColor={"Red"}
            visible={this.state.isLoading}
          />
          <h2>Choiseul 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* I1 - Delcer Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I1 - Delcer Combined School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-K</th>
                    <th scope="col">L-M</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I1', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'F-K', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'L-M', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I1', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'F-K', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'L-M', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I1', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I1')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I1', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I1', 'F-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I1', 'L-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I1', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I1')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I1', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I1', 'F-K')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I1', 'L-M')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I1', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I1')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I1', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I1', 'F-K')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I1', 'L-M')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I1', 'S-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I2 - Mongouge Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I2 - Mongouge Infant School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-L</th>
                    <th scope="col">M-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I2', 1)}
                    {Elections.votesBySection(this.state.results, 'I', 'I2', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results, 'I', 'I2', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results, 'I', 'I2', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I2', 2)}
                    {Elections.votesBySection(this.state.results, 'I', 'I2', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results, 'I', 'I2', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results, 'I', 'I2', 'M-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'I', 'I2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'I', 'I2', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results, 'I', 'I2', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'I', 'I2', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'I', 'I2')}
                    {Elections.votesCastBySection(this.state.results, 'I', 'I2', 'A-E')}
                    {Elections.votesCastBySection(this.state.results, 'I', 'I2', 'F-L')}
                    {Elections.votesCastBySection(this.state.results, 'I', 'I2', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'I', 'I2')}
                    {Elections.registeredVotersBySection(this.state.results, 'I', 'I2', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results, 'I', 'I2', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'I', 'I2', 'M-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I3 - Choiseul Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I3 - Choiseul Secondary School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-L</th>
                    <th scope="col">M-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I3', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'M-R', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I3', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'M-R', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I3', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I3')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I3', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I3', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I3', 'M-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I3')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I3', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I3', 'F-L')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I3', 'M-R')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I3')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I3', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I3', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I3', 'M-R')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I3', 'S-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I4 - Dacretin Community Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I4 - Dacretin Community Centre</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-I</th>
                    <th scope="col">J-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I4', 1)}
                    {Elections.votesBySection(this.state.results, 'I', 'I4', 'A-I', 1)}
                    {Elections.votesBySection(this.state.results, 'I', 'I4', 'J-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I4', 2)}
                    {Elections.votesBySection(this.state.results, 'I', 'I4', 'A-I', 2)}
                    {Elections.votesBySection(this.state.results, 'I', 'I4', 'J-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'I', 'I4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'I', 'I4', 'A-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'I', 'I4', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'I', 'I4')}
                    {Elections.votesCastBySection(this.state.results, 'I', 'I4', 'A-I')}
                    {Elections.votesCastBySection(this.state.results, 'I', 'I4', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'I', 'I4')}
                    {Elections.registeredVotersBySection(this.state.results, 'I', 'I4', 'A-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'I', 'I4', 'J-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I5 - Roblot Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I5 - Roblot Combined School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-L</th>
                    <th scope="col">M-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I5', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I5', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I5', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I5', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I5', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I5', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I5', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I5', 'M-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I5')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I5', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I5', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I5', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I5')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I5', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I5', 'F-L')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I5', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I5')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I5', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I5', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I5', 'M-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I6 - Dugard Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I6 - Dugard Combined School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I6', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I6', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I6', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I6', 'A-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I6')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I6', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I6')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I6', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I6')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I6', 'A-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I7 - Hang Out Bar, Jetrine */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I7 - Hang Out Bar, Jetrine</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-F</th>
                    <th scope="col">G-M</th>
                    <th scope="col">N-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I7', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I7', 'A-F', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I7', 'G-M', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I7', 'N-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I7', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I7', 'A-F', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I7', 'G-M', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I7', 'N-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I7')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I7', 'A-F')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I7', 'G-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I7', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I7')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I7', 'A-F')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I7', 'G-M')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I7', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I7')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I7', 'A-F')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I7', 'G-M')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I7', 'N-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I8 - Saltibus Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I8 - Saltibus Combined School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-F</th>
                    <th scope="col">G-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I8', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I8', 'A-F', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I8', 'G-R', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I8', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I8', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I8', 'A-F', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I8', 'G-R', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I8', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I8')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I8', 'A-F')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I8', 'G-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I8', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I8')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I8', 'A-F')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I8', 'G-R')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I8', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I8')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I8', 'A-F')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I8', 'G-R')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I8', 'S-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* I9 - Piaye Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>I9 - Piaye Combined School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-JN</th>
                    <th scope="col">JO-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'I', 'I9', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I9', 'A-JN', 1)}
                    {Elections.votesBySection(this.state.results,'I', 'I9', 'JO-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'I', 'I9', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I9', 'A-JN', 2)}
                    {Elections.votesBySection(this.state.results,'I', 'I9', 'JO-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'I', 'I9')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I9', 'A-JN')}
                    {Elections.rejectedVotesBySection(this.state.results,'I', 'I9', 'JO-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'I', 'I9')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I9', 'A-JN')}
                    {Elections.votesCastBySection(this.state.results,'I', 'I9', 'JO-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'I', 'I9')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I9', 'A-JN')}
                    {Elections.registeredVotersBySection(this.state.results,'I', 'I9', 'JO-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
            {/*  */}
            <div className={"col-sm-12 col-md-6"}>

            </div>
          </div>
        </section>
      </div>
    )
  }
}
import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class CastriesEast2016 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.resultsByYear(2016)
  }

  resultsByYear(year) {
    ResultDataService.findByYear(year)
      .then(response => {
        this.setState({
          results: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const slpCandidate = 'P. Pierre';
    const uwpCandidate = 'F. Belrose';

    return (
      <div>
        <section className={"container"}>
          <h2>Castries East 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* D1 - Bocage Government School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D1 - Bocage Government School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-G</th>
                    <th scope="col">H-M</th>
                    <th scope="col">N-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D1', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D1', 'A-G', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D1', 'H-M', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D1', 'N-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D1', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D1', 'A-G', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D1', 'H-M', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D1', 'N-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'D', 'D1')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D1', 'A-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D1', 'H-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D1', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'D', 'D1')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D1', 'A-G')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D1', 'H-M')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D1', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'D', 'D1')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D1', 'A-G')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D1', 'H-M')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D1', 'N-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D2 - Entrepot Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D2 - Entrepot Secondary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">E-F</th>
                    <th scope="col">G-I</th>
                    <th scope="col">J-K</th>
                    <th scope="col">L-MAY</th>
                    <th scope="col">MC-P</th>
                    <th scope="col">Q-STA</th>
                    <th scope="col">STE-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D2', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'E-F', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'G-I', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'J-K', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'L-MAY', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'MC-P', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'Q-STA', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'STE-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D2', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'E-F', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'G-I', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'J-K', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'L-MAY', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'MC-P', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'Q-STA', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D2', 'STE-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'D', 'D2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'E-F')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'G-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'J-K')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'L-MAY')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'MC-P')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'Q-STA')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D2', 'STE-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'D', 'D2')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'A-B')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'C-D')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'E-F')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'G-I')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'J-K')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'L-MAY')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'MC-P')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'Q-STA')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D2', 'STE-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'D', 'D2')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'E-F')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'G-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'J-K')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'L-MAY')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'MC-P')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'Q-STA')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D2', 'STE-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D3 - Marchand Parish Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D3 - Marchand Parish Centre</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-J</th>
                    <th scope="col">K-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D3', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D3', 'A-J', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D3', 'K-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D3', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D3', 'A-J', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D3', 'K-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'D', 'D3')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D3', 'A-J')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D3', 'K-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'D', 'D3')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D3', 'A-J')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D3', 'K-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'D', 'D3')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D3', 'A-J')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D3', 'K-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D4 - Marchand Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D4 - Marchand Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A</th>
                    <th scope="col">B-C</th>
                    <th scope="col">D-E</th>
                    <th scope="col">F-G</th>
                    <th scope="col">H-JN</th>
                    <th scope="col">JOH-L</th>
                    <th scope="col">M-O</th>
                    <th scope="col">P-R</th>
                    <th scope="col">S</th>
                    <th scope="col">T-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D4', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'A', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'B-C', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'D-E', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'F-G', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'H-JN', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'JOH-L', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'M-O', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'P-R', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'S', 1)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'T-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D4', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'A', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'B-C', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'D-E', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'F-G', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'H-JN', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'JOH-L', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'M-O', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'P-R', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'S', 2)}
                    {Elections.votesBySection(this.state.results, 'D', 'D4', 'T-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'D', 'D4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'A')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'B-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'D-E')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'F-G')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'H-JN')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'JOH-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'M-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'P-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'S')}
                    {Elections.rejectedVotesBySection(this.state.results, 'D', 'D4', 'T-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'D', 'D4')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'A')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'B-C')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'D-E')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'F-G')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'H-JN')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'JOH-L')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'M-O')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'P-R')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'S')}
                    {Elections.votesCastBySection(this.state.results, 'D', 'D4', 'T-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'D', 'D4')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'A')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'B-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'D-E')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'F-G')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'H-JN')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'JOH-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'M-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'P-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'S')}
                    {Elections.registeredVotersBySection(this.state.results, 'D', 'D4', 'T-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D5 (a) - Mindoo Phillip Park */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D5 (a) - Mindoo Phillip Park</h3>
                <table className="table table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-F</th>
                    <th scope="col">G-J</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D5 (a)', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (a)', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (a)', 'D-F', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (a)', 'G-J', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D5 (a)', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (a)', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (a)', 'D-F', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (a)', 'G-J', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'D', 'D5 (a)')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D5 (a)', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D5 (a)', 'D-F')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D5 (a)', 'G-J')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'D', 'D5 (a)')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D5 (a)', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D5 (a)', 'D-F')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D5 (a)', 'G-J')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'D', 'D5 (a)')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D5 (a)', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D5 (a)', 'D-F')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D5 (a)', 'G-J')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D5 (b) - Cadet Pavillion */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D5 (b) - Cadet Pavillion</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">K-O</th>
                    <th scope="col">P-SP</th>
                    <th scope="col">ST-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D5 (b)', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (b)', 'K-O', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (b)', 'P-SP', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (b)', 'ST-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D5 (b)', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (b)', 'K-O', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (b)', 'P-SP', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D5 (b)', 'ST-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'D', 'D5 (b)')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D5 (b)', 'K-O')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D5 (b)', 'P-SP')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D5 (b)', 'ST-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'D', 'D5 (b)')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D5 (b)', 'K-O')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D5 (b)', 'P-SP')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D5 (b)', 'ST-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'D', 'D5 (b)')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D5 (b)', 'K-O')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D5 (b)', 'P-SP')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D5 (b)', 'ST-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D6 - Police Auditorium */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>D6 - Police Auditorium</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-G</th>
                    <th scope="col">H-M</th>
                    <th scope="col">N-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'D', 'D6', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D6', 'A-G', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D6', 'H-M', 1)}
                    {Elections.votesBySection(this.state.results,'D', 'D6', 'N-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'D', 'D6', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D6', 'A-G', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D6', 'H-M', 2)}
                    {Elections.votesBySection(this.state.results,'D', 'D6', 'N-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'D', 'D6')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D6', 'A-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D6', 'H-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'D', 'D6', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'D', 'D6')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D6', 'A-G')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D6', 'H-M')}
                    {Elections.votesCastBySection(this.state.results,'D', 'D6', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'D', 'D6')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D6', 'A-G')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D6', 'H-M')}
                    {Elections.registeredVotersBySection(this.state.results,'D', 'D6', 'N-Z')}
                  </tr>
                  </tbody>
                </table>
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
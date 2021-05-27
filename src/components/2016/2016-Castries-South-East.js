import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class CastriesSouthEast2016 extends Component {
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
    const slpCandidate = 'J. Henry';
    const uwpCandidate = 'G. Joseph';

    return (
      <div>
        <section className={"container"}>
          <h2>Castries South East 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* Q1 - Sir Arthur Lewis Community College */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q1 - Sir Arthur Lewis Community College</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-E</th>
                    <th scope="col">F-I</th>
                    <th scope="col">J-L</th>
                    <th scope="col">M-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q1', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'C-E', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'F-I', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'M-P', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q1', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'C-E', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'F-I', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'M-P', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q1', 'Q-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'Q', 'Q1')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q1', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q1', 'C-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q1', 'F-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q1', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q1', 'M-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q1', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'Q', 'Q1')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q1', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q1', 'C-E')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q1', 'F-I')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q1', 'J-L')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q1', 'M-P')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q1', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'Q', 'Q1')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q1', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q1', 'C-E')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q1', 'F-I')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q1', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q1', 'M-P')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q1', 'Q-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q2 - Ti Rocher Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q2 - Ti Rocher Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">J-L</th>
                    <th scope="col">M-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'Q', 'Q2', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'M-R', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'Q', 'Q2', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'M-R', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q2', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'Q', 'Q2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q2', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q2', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q2', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q2', 'M-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q2', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'Q', 'Q2')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q2', 'A-D')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q2', 'E-I')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q2', 'J-L')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q2', 'M-R')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q2', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'Q', 'Q2')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q2', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q2', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q2', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q2', 'M-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q2', 'S-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q3 - Bexon Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q3 - Bexon Primary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-E</th>
                    <th scope="col">F-JN</th>
                    <th scope="col">JO-M</th>
                    <th scope="col">N-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                      {Elections.votes(this.state.results,'Q', 'Q3', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'D-E', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'F-JN', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'JO-M', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'N-R', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q3', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'D-E', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'F-JN', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'JO-M', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'N-R', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q3', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'Q', 'Q3')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q3', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q3', 'D-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q3', 'F-JN')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q3', 'JO-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q3', 'N-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'Q', 'Q3')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q3', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q3', 'D-E')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q3', 'F-JN')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q3', 'JO-M')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q3', 'N-R')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'Q', 'Q3')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q3', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q3', 'D-E')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q3', 'F-JN')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q3', 'JO-M')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q3', 'N-R')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q3', 'S-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q4 - Ravine Poisson SDA School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q4 - Ravine Poisson SDA School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-I</th>
                    <th scope="col">J-M</th>
                    <th scope="col">N-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'Q', 'Q4', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'D-I', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'J-M', 1)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'N-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'Q', 'Q4', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'D-I', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'J-M', 2)}
                    {Elections.votesBySection(this.state.results, 'Q', 'Q4', 'N-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'Q', 'Q4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q4', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q4', 'D-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q4', 'J-M')}
                    {Elections.rejectedVotesBySection(this.state.results, 'Q', 'Q4', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'Q', 'Q4')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q4', 'A-C')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q4', 'D-I')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q4', 'J-M')}
                    {Elections.votesCastBySection(this.state.results, 'Q', 'Q4', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'Q', 'Q4')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q4', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q4', 'D-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q4', 'J-M')}
                    {Elections.registeredVotersBySection(this.state.results, 'Q', 'Q4', 'N-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q5 - Bexon Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q5 - Bexon Infant School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-CHAR</th>
                    <th scope="col">CHAS-FE</th>
                    <th scope="col">FI-JON</th>
                    <th scope="col">JOS-O</th>
                    <th scope="col">P-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'Q', 'Q5', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'A-CHAR', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'CHAS-FE', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'FI-JON', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'JOS-O', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'P-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q5', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'A-CHAR', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'CHAS-FE', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'FI-JON', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'JOS-O', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q5', 'P-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'Q', 'Q5')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q5', 'A-CHAR')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q5', 'CHAS-FE')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q5', 'FI-JON')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q5', 'JOS-O')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q5', 'P-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'Q', 'Q5')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q5', 'A-CHAR')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q5', 'CHAS-FE')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q5', 'FI-JON')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q5', 'JOS-O')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q5', 'P-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'Q', 'Q5')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q5', 'A-CHAR')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q5', 'CHAS-FE')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q5', 'FI-JON')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q5', 'JOS-O')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q5', 'P-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q6 (a) - La Croix Maingot (Hess) School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q6 (a) - La Croix Maingot (Hess) School</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'Q', 'Q6 (a)', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (a)', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (a)', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (a)', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q6 (a)', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (a)', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (a)', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (a)', 'M-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'Q', 'Q6 (a)')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q6 (a)', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q6 (a)', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q6 (a)', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'Q', 'Q6 (a)')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q6 (a)', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q6 (a)', 'F-L')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q6 (a)', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'Q', 'Q6 (a)')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q6 (a)', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q6 (a)', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q6 (a)', 'M-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q6 (b) - Belair Community Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q6 (b) - Belair Community Centre</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'Q', 'Q6 (b)', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (b)', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q6 (b)', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q6 (b)', 'A-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'Q', 'Q6 (b)')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q6 (b)', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'Q', 'Q6 (b)')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q6 (b)', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'Q', 'Q6 (b)')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q6 (b)', 'A-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* Q7 - Odsan Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>Q7 - Odsan Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-G</th>
                    <th scope="col">H-JOR</th>
                    <th scope="col">JOS-L</th>
                    <th scope="col">M-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'Q', 'Q7', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'D-G', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'H-JOR', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'JOS-L', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'M-P', 1)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'Q', 'Q7', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'D-G', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'H-JOR', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'JOS-L', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'M-P', 2)}
                    {Elections.votesBySection(this.state.results,'Q', 'Q7', 'Q-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'Q', 'Q7')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q7', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q7', 'D-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q7', 'H-JOR')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q7', 'JOS-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q7', 'M-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'Q', 'Q7', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'Q', 'Q7')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q7', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q7', 'D-G')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q7', 'H-JOR')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q7', 'JOS-L')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q7', 'M-P')}
                    {Elections.votesCastBySection(this.state.results,'Q', 'Q7', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'Q', 'Q7')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q7', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q7', 'D-G')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q7', 'H-JOR')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q7', 'JOS-L')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q7', 'M-P')}
                    {Elections.registeredVotersBySection(this.state.results,'Q', 'Q7', 'Q-Z')}
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
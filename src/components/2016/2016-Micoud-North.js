import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class MicoudNorth2016 extends Component {
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
    const slpCandidate = 'N. Roserie';
    const uwpCandidate = 'G. Rigobert';
    const indepCandidate = 'J. Compton-Antoine';
    const indepCandidate2 = 'M. Alexander';
    

    return (
      <div>
        <section className={"container"}>
          <h2>Micoud North 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* N1 - Praslin Community Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>N1 - Praslin Community Centre</h3>
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
                    {Elections.votes(this.state.results, 'N', 'N1', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N1', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N1', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N1', 'A-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N1', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N1', 'A-Z', 5)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate2}</td>
                    {Elections.votes(this.state.results,'N', 'N1', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N1', 'A-Z', 6)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'N', 'N1')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N1', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'N', 'N1')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N1', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'N', 'N1')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N1', 'A-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* N2 - Mon Repos Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>N2 - Mon Repos Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-JN</th>
                    <th scope="col">JO-M</th>
                    <th scope="col">N-SM</th>
                    <th scope="col">SO-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N2', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'F-JN', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'JO-M', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'N-SM', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'SO-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N2', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'F-JN', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'JO-M', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'N-SM', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'SO-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N2', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'A-E', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'F-JN', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'JO-M', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'N-SM', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'SO-Z', 5)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate2}</td>
                    {Elections.votes(this.state.results,'N', 'N2', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'A-E', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'F-JN', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'JO-M', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'N-SM', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N2', 'SO-Z', 6)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'N', 'N2')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N2', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N2', 'F-JN')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N2', 'JO-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N2', 'N-SM')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N2', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'N', 'N2')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N2', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N2', 'F-JN')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N2', 'JO-M')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N2', 'N-SM')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N2', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'N', 'N2')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N2', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N2', 'F-JN')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N2', 'JO-M')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N2', 'N-SM')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N2', 'SO-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* N3 - Patience Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>N3 - Patience Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-I</th>
                    <th scope="col">J-L</th>
                    <th scope="col">M-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N3', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'D-I', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'M-R', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N3', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'D-I', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'M-R', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'S-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N3', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'A-C', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'D-I', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'J-L', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'M-R', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'S-Z', 5)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate2}</td>
                    {Elections.votes(this.state.results, 'N', 'N3', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'A-C', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'D-I', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'J-L', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'M-R', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N3', 'S-Z', 6)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'N', 'N3')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N3', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N3', 'D-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N3', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N3', 'M-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'N', 'N3')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N3', 'A-C')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N3', 'D-I')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N3', 'J-L')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N3', 'M-R')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'N', 'N3')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N3', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N3', 'D-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N3', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N3', 'M-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N3', 'S-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* N4 - Micoud Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>N4 - Micoud Infant School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-I</th>
                    <th scope="col">J-L</th>
                    <th scope="col">M-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N4', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'D-I', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N4', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'D-I', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'M-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N4', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'A-C', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'D-I', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'J-L', 5)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'M-Z', 5)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate2}</td>
                    {Elections.votes(this.state.results, 'N', 'N4', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'A-C', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'D-I', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'J-L', 6)}
                    {Elections.votesBySection(this.state.results, 'N', 'N4', 'M-Z', 6)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'N', 'N4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N4', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N4', 'D-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N4', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'N', 'N4', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'N', 'N4')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N4', 'A-C')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N4', 'D-I')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N4', 'J-L')}
                    {Elections.votesCastBySection(this.state.results, 'N', 'N4', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'N', 'N4')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N4', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N4', 'D-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N4', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'N', 'N4', 'M-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* N5 - Micoud Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>N5 - Micoud Secondary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-G</th>
                    <th scope="col">H-MA</th>
                    <th scope="col">MC-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'N', 'N5', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'D-G', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'H-MA', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'MC-R', 1)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N5', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'D-G', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'H-MA', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'MC-R', 2)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'S-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results,'N', 'N5', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'A-C', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'D-G', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'H-MA', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'MC-R', 5)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'S-Z', 5)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate2}</td>
                    {Elections.votes(this.state.results,'N', 'N5', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'A-C', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'D-G', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'H-MA', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'MC-R', 6)}
                    {Elections.votesBySection(this.state.results,'N', 'N5', 'S-Z', 6)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'N', 'N5')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N5', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N5', 'D-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N5', 'H-MA')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N5', 'MC-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'N', 'N5', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'N', 'N5')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N5', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N5', 'D-G')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N5', 'H-MA')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N5', 'MC-R')}
                    {Elections.votesCastBySection(this.state.results,'N', 'N5', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'N', 'N5')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N5', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N5', 'D-G')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N5', 'H-MA')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N5', 'MC-R')}
                    {Elections.registeredVotersBySection(this.state.results,'N', 'N5', 'S-Z')}
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
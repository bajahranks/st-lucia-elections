import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class Soufriere2016 extends Component {
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
    const slpCandidate = 'H. Dalson';
    const uwpCandidate = 'H. Stanislas';
    const lgCandidate = 'S. Gajadhar';

    return (
      <div>
        <section className={"container"}>
          <h2>Soufriere 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* H1 - Soufriere Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H1 - Soufriere Primary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-E</th>
                    <th scope="col">F-H</th>
                    <th scope="col">I-K</th>
                    <th scope="col">L-O</th>
                    <th scope="col">P-SM</th>
                    <th scope="col">SO-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H1', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'C-E', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'F-H', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'I-K', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'L-O', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'P-SM', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'SO-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H1', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'C-E', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'F-H', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'I-K', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'L-O', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'P-SM', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'SO-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H1', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'A-B', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'C-E', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'F-H', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'I-K', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'L-O', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'P-SM', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H1', 'SO-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'H', 'H1')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'C-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'F-H')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'I-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'L-O')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'P-SM')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H1', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'H', 'H1')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'C-E')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'F-H')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'I-K')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'L-O')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'P-SM')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H1', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'H', 'H1')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'C-E')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'F-H')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'I-K')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'L-O')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'P-SM')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H1', 'SO-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* H2 - Soufriere Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H2 - Soufriere Infant School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-I</th>
                    <th scope="col">J-L</th>
                    <th scope="col">M-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'H', 'H2', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'D-I', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'M-P', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'H', 'H2', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'D-I', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'M-P', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'Q-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results, 'H', 'H2', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'A-C', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'D-I', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'J-L', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'M-P', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H2', 'Q-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'H', 'H2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H2', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H2', 'D-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H2', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H2', 'M-P')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H2', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'H', 'H2')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H2', 'A-C')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H2', 'D-I')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H2', 'J-L')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H2', 'M-P')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H2', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'H', 'H2')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H2', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H2', 'D-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H2', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H2', 'M-P')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H2', 'Q-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* H3 - St. Isidore's Hall */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H3 - St. Isidore's Hall</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-J</th>
                    <th scope="col">L-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H3', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'F-J', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'L-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H3', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'F-J', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'L-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H3', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'A-E', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'F-J', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H3', 'L-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'H', 'H3')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H3', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H3', 'F-J')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H3', 'L-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'H', 'H3')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H3', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H3', 'F-J')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H3', 'L-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'H', 'H3')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H3', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H3', 'F-J')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H3', 'L-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* H4 - Etangs Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H4 - Etangs Combined School</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'H', 'H4', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H4', 'A-I', 1)}
                    {Elections.votesBySection(this.state.results, 'H', 'H4', 'J-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'H', 'H4', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H4', 'A-I', 2)}
                    {Elections.votesBySection(this.state.results, 'H', 'H4', 'J-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results, 'H', 'H4', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H4', 'A-I', 4)}
                    {Elections.votesBySection(this.state.results, 'H', 'H4', 'J-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'H', 'H4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H4', 'A-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'H', 'H4', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'H', 'H4')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H4', 'A-I')}
                    {Elections.votesCastBySection(this.state.results, 'H', 'H4', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'H', 'H4')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H4', 'A-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'H', 'H4', 'J-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* H5 - Bouton Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H5 - Bouton Combined School</h3>
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
                    {Elections.votes(this.state.results, 'H', 'H5', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H5', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H5', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H5', 'A-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H5', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H5', 'A-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'H', 'H5')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H5', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'H', 'H5')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H5', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'H', 'H5')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H5', 'A-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* H6 - Fond St. Jacques Primary School (A) */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H6 - Fond St. Jacques Primary School (A)</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'H', 'H6', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H6', 'A-JN', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H6', 'JO-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H6', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H6', 'A-JN', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H6', 'JO-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H6', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H6', 'A-JN', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H6', 'JO-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'H', 'H6')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H6', 'A-JN')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H6', 'JO-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'H', 'H6')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H6', 'A-JN')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H6', 'JO-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'H', 'H6')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H6', 'A-JN')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H6', 'JO-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* H7 - Fond St. Jacques Primary School (B) */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>H7 - Fond St. Jacques Primary School (B)</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'H', 'H7', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H7', 'A-I', 1)}
                    {Elections.votesBySection(this.state.results,'H', 'H7', 'J-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H7', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H7', 'A-I', 2)}
                    {Elections.votesBySection(this.state.results,'H', 'H7', 'J-Z', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>{lgCandidate}</td>
                    {Elections.votes(this.state.results,'H', 'H7', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H7', 'A-I', 4)}
                    {Elections.votesBySection(this.state.results,'H', 'H7', 'J-Z', 4)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'H', 'H7')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H7', 'A-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'H', 'H7', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'H', 'H7')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H7', 'A-I')}
                    {Elections.votesCastBySection(this.state.results,'H', 'H7', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'H', 'H7')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H7', 'A-I')}
                    {Elections.registeredVotersBySection(this.state.results,'H', 'H7', 'J-Z')}
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
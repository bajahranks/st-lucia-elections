import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

export default class GrosIslet2016 extends Component {
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
          isLoading: true
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const slpCandidate = 'A. Hippolyte';
    const uwpCandidate = 'L. Montoute';
    const lpmCandidate = 'T. Prudent';

    return (
      <div>
        <section className={"container"}>
          <Loader
            type={"MutatingDots"}
            color={"Yellow"}
            secondaryColor={"Red"}
            visible={this.state.isLoading}
          />
          <h2>Castries Central 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* A1 (a) - Gros Islet Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A1 (a) - Gros Islet Primary School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">A-G</th>
                    <th scope="col">H-K</th>
                    <th scope="col">L-M</th>
                    <th scope="col">N-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A1 (a)', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'A-G', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'H-K', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'L-M', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'N-R', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A1 (a)', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'A-G', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'H-K', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'L-M', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'N-R', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'S-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A1 (a)', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'A-B', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'C-D', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'A-G', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'H-K', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'L-M', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'N-R', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (a)', 'S-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'A', 'A1 (a)')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'A-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'H-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'L-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'N-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (a)', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'A', 'A1 (a)')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'C-D')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'A-G')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'H-K')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'L-M')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'N-R')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (a)', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'A', 'A1 (a)')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'A-G')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'H-K')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'L-M')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'N-R')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (a)', 'S-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A1 (b) - Gros Islet Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A1 (b) - Gros Islet Secondary School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">E-F</th>
                    <th scope="col">G-JN</th>
                    <th scope="col">JO-L</th>
                    <th scope="col">M-O</th>
                    <th scope="col">P-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A1 (b)', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'E-F', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'G-JN', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'JO-L', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'M-O', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'P-R', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A1 (b)', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'E-F', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'G-JN', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'JO-L', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'M-O', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'P-R', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'S-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A1 (b)', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'A-B', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'C-D', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'E-F', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'G-JN', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'JO-L', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'M-O', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'P-R', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (b)', 'S-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'A', 'A1 (b)')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'E-F')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'G-JN')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'JO-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'M-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'P-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (b)', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'A', 'A1 (b)')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'A-B')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'C-D')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'E-F')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'G-JN')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'JO-L')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'M-O')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'P-R')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (b)', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'A', 'A1 (b)')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'E-F')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'G-JN')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'JO-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'M-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'P-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (b)', 'S-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A1 (c) - Johnsons Centre Rodney Bay */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A1 (c) - Johnsons Centre Rodney Bay</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">J-M</th>
                    <th scope="col">N-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A1 (c)', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'J-M', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'N-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A1 (c)', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'J-M', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'N-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A1 (c)', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'A-D', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'E-I', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'J-M', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A1 (c)', 'N-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'A', 'A1 (c)')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (c)', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (c)', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (c)', 'J-M')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A1 (c)', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'A', 'A1 (c)')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (c)', 'A-D')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (c)', 'E-I')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (c)', 'J-M')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A1 (c)', 'N-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'A', 'A1 (c)')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (c)', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (c)', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (c)', 'J-M')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A1 (c)', 'N-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A1 (d) - Johnsons Centre Rodney Bay */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A1 (d) - Johnsons Centre Rodney Bay</h3>
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
                    {Elections.votes(this.state.results, 'A', 'A1 (d)', 1)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (d)', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A1 (d)', 2)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (d)', 'A-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A1 (d)', 3)}
                    {Elections.votesBySection(this.state.results, 'A', 'A1 (d)', 'A-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'A', 'A1 (d)')}
                    {Elections.rejectedVotesBySection(this.state.results, 'A', 'A1 (d)', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'A', 'A1 (d)')}
                    {Elections.votesCastBySection(this.state.results, 'A', 'A1 (d)', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'A', 'A1 (d)')}
                    {Elections.registeredVotersBySection(this.state.results, 'A', 'A1 (d)', 'A-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A2 (a) - Monchy Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A2 (a) - Monchy Combined School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">M-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A2 (a)', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'M-P', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A2 (a)', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'M-P', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'Q-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A2 (a)', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'A-B', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'C-D', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'E-I', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'M-P', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (a)', 'Q-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'A', 'A2 (a)')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (a)', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (a)', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (a)', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (a)', 'M-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (a)', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'A', 'A2 (a)')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (a)', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (a)', 'C-D')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (a)', 'E-I')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (a)', 'M-P')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (a)', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'A', 'A2 (a)')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (a)', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (a)', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (a)', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (a)', 'M-P')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (a)', 'Q-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A2 (b) - Darren Sammy Stadium (Beausejour) */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A2 (b) - Darren Sammy Stadium (Beausejour)</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-F</th>
                    <th scope="col">G-K</th>
                    <th scope="col">L-P</th>
                    <th scope="col">R-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A2 (b)', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'D-F', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'G-K', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'L-P', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'R-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A2 (b)', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'D-F', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'G-K', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'L-P', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'R-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A2 (b)', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'A-C', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'D-F', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'G-K', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'L-P', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A2 (b)', 'R-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'A', 'A2 (b)')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (b)', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (b)', 'D-F')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (b)', 'G-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (b)', 'L-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A2 (b)', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'A', 'A2 (b)')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (b)', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (b)', 'D-F')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (b)', 'G-K')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (b)', 'L-P')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A2 (b)', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'A', 'A2 (b)')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (b)', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (b)', 'D-F')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (b)', 'G-K')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (b)', 'L-P')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A2 (b)', 'R-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A3 Grande Riviere Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A3 Grande Riviere Primary School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A</th>
                    <th scope="col">B-C</th>
                    <th scope="col">D-E</th>
                    <th scope="col">F-H</th>
                    <th scope="col">I-JON</th>
                    <th scope="col">JOR-K</th>
                    <th scope="col">L</th>
                    <th scope="col">M</th>
                    <th scope="col">N-PL</th>
                    <th scope="col">PO-S</th>
                    <th scope="col">T-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A3', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'A', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'B-C', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'D-E', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'F-H', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'I-JON', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'JOR-K', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'L', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'M', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'N-PL', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'PO-S', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'T-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A3', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'A', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'B-C', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'D-E', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'F-H', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'I-JON', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'JOR-K', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'L', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'M', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'N-PL', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'PO-S', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'T-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A3', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'A', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'B-C', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'D-E', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'F-H', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'I-JON', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'JOR-K', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'L', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'M', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'N-PL', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'PO-S', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A3', 'T-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'A', 'A3')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'A')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'B-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'D-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'F-H')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'I-JON')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'JOR-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'L')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'M')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'N-PL')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'PO-S')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A3', 'T-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'A', 'A3')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'A')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'B-C')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'D-E')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'F-H')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'I-JON')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'JOR-K')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'L')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'M')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'N-PL')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'PO-S')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A3', 'T-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'A', 'A3')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'A')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'B-C')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'D-E')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'F-H')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'I-JON')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'JOR-K')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'L')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'M')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'N-PL')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'PO-S')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A3', 'T-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* A4 Corinth Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>A4 Corinth Secondary School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A</th>
                    <th scope="col">B-CH</th>
                    <th scope="col">CI-D</th>
                    <th scope="col">E-FO</th>
                    <th scope="col">FR-HE</th>
                    <th scope="col">HI-JOR</th>
                    <th scope="col">JOS-L</th>
                    <th scope="col">M</th>
                    <th scope="col">N-Q</th>
                    <th scope="col">R-ST.J</th>
                    <th scope="col">ST.L-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'A', 'A4', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'A', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'B-CH', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'CI-D', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'E-FO', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'FR-HE', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'HI-JOR', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'JOS-L', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'M', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'N-Q', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'R-ST.J', 1)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'ST.L-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A4', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'A', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'B-CH', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'CI-D', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'E-FO', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'FR-HE', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'HI-JOR', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'JOS-L', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'M', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'N-Q', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'R-ST.J', 2)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'ST.L-Z', 2)}
                  </tr>
                  <tr className={"lpm-border"}>
                    <td>{lpmCandidate}</td>
                    {Elections.votes(this.state.results,'A', 'A4', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'A', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'B-CH', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'CI-D', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'E-FO', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'FR-HE', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'HI-JOR', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'JOS-L', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'M', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'N-Q', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'R-ST.J', 3)}
                    {Elections.votesBySection(this.state.results,'A', 'A4', 'ST.L-Z', 3)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'A', 'A4')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'A')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'B-CH')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'CI-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'E-FO')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'FR-HE')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'HI-JOR')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'JOS-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'M')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'N-Q')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'R-ST.J')}
                    {Elections.rejectedVotesBySection(this.state.results,'A', 'A4', 'ST.L-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'A', 'A4')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'A')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'B-CH')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'CI-D')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'E-FO')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'FR-HE')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'HI-JOR')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'JOS-L')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'M')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'N-Q')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'R-ST.J')}
                    {Elections.votesCastBySection(this.state.results,'A', 'A4', 'ST.L-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'A', 'A4')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'A')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'B-CH')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'CI-D')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'E-FO')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'FR-HE')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'HI-JOR')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'JOS-L')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'M')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'N-Q')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'R-ST.J')}
                    {Elections.registeredVotersBySection(this.state.results,'A', 'A4', 'ST.L-Z')}
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
import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

export default class Babonneau2016 extends Component {
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
    const slpCandidate = 'A. Reynolds';
    const uwpCandidate = 'E. Joseph';

    return (
      <section className={"container"}>
        <Loader
          type={"MutatingDots"}
          color={"Yellow"}
          secondaryColor={"Red"}
          visible={this.state.isLoading}
        />
        <h2>Babonneau 2016 Results</h2>
        <hr />
        <div className={"row"}>
          {/* B1 (a) - Balata Combined School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B1 (a) - Balata Combined School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-D</th>
                  <th scope="col">E-I</th>
                  <th scope="col">J-L</th>
                  <th scope="col">M-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B1 (a)', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'A-D', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'E-I', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'J-L', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'M-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B1 (a)', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'A-D', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'E-I', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'J-L', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B1 (a)', 'M-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B1 (a)')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B1 (a)', 'A-D')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B1 (a)', 'E-I')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B1 (a)', 'J-L')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B1 (a)', 'M-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B1 (a)')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B1 (a)', 'A-D')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B1 (a)', 'E-I')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B1 (a)', 'J-L')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B1 (a)', 'M-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B1 (a)')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B1 (a)', 'A-D')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B1 (a)', 'E-I')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B1 (a)', 'J-L')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B1 (a)', 'M-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B1 (b) - Babonneau Primary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B1 (b) - Babonneau Primary School</h3>
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
                  {Elections.votes(this.state.results, 'B', 'B1 (b)', 1)}
                  {Elections.votesBySection(this.state.results, 'B', 'B1 (b)', 'A-I', 1)}
                  {Elections.votesBySection(this.state.results, 'B', 'B1 (b)', 'J-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B1 (b)', 2)}
                  {Elections.votesBySection(this.state.results, 'B', 'B1 (b)', 'A-I', 2)}
                  {Elections.votesBySection(this.state.results, 'B', 'B1 (b)', 'J-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results, 'B', 'B1 (b)')}
                  {Elections.rejectedVotesBySection(this.state.results, 'B', 'B1 (b)', 'A-I')}
                  {Elections.rejectedVotesBySection(this.state.results, 'B', 'B1 (b)', 'J-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results, 'B', 'B1 (b)')}
                  {Elections.votesCastBySection(this.state.results, 'B', 'B1 (b)', 'A-I')}
                  {Elections.votesCastBySection(this.state.results, 'B', 'B1 (b)', 'J-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results, 'B', 'B1 (b)')}
                  {Elections.registeredVotersBySection(this.state.results, 'B', 'B1 (b)', 'A-I')}
                  {Elections.registeredVotersBySection(this.state.results, 'B', 'B1 (b)', 'J-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B2 (a) - La Guerre Combined School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B2 (a) - La Guerre Combined School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-B</th>
                  <th scope="col">C-E</th>
                  <th scope="col">F-I</th>
                  <th scope="col">J-K</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B2 (a)', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'A-B', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'C-E', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'F-I', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'J-K', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B2 (a)', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'A-B', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'C-E', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'F-I', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B2 (a)', 'J-K', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B2 (a)')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B2 (a)', 'A-B')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B2 (a)', 'C-E')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B2 (a)', 'F-I')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B2 (a)', 'J-K')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B2 (a)')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B2 (a)', 'A-B')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B2 (a)', 'C-E')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B2 (a)', 'F-I')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B2 (a)', 'J-K')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B2 (a)')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B2 (a)', 'A-B')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B2 (a)', 'C-E')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B2 (a)', 'F-I')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B2 (a)', 'J-K')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B2 (b) - La Guerre Community Centre */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B2 (b) - La Guerre Community Centre</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">L-O</th>
                  <th scope="col">P-R</th>
                  <th scope="col">S-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B2 (b)', 1)}
                  {Elections.votesBySection(this.state.results, 'B', 'B2 (b)', 'L-O', 1)}
                  {Elections.votesBySection(this.state.results, 'B', 'B2 (b)', 'P-R', 1)}
                  {Elections.votesBySection(this.state.results, 'B', 'B2 (b)', 'S-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B2 (b)', 2)}
                  {Elections.votesBySection(this.state.results, 'B', 'B2 (b)', 'L-O', 2)}
                  {Elections.votesBySection(this.state.results, 'B', 'B2 (b)', 'P-R', 2)}
                  {Elections.votesBySection(this.state.results, 'B', 'B2 (b)', 'S-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results, 'B', 'B2 (b)')}
                  {Elections.rejectedVotesBySection(this.state.results, 'B', 'B2 (b)', 'L-O')}
                  {Elections.rejectedVotesBySection(this.state.results, 'B', 'B2 (b)', 'P-R')}
                  {Elections.rejectedVotesBySection(this.state.results, 'B', 'B2 (b)', 'S-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results, 'B', 'B2 (b)')}
                  {Elections.votesCastBySection(this.state.results, 'B', 'B2 (b)', 'L-O')}
                  {Elections.votesCastBySection(this.state.results, 'B', 'B2 (b)', 'P-R')}
                  {Elections.votesCastBySection(this.state.results, 'B', 'B2 (b)', 'S-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results, 'B', 'B2 (b)')}
                  {Elections.registeredVotersBySection(this.state.results, 'B', 'B2 (b)', 'L-O')}
                  {Elections.registeredVotersBySection(this.state.results, 'B', 'B2 (b)', 'P-R')}
                  {Elections.registeredVotersBySection(this.state.results, 'B', 'B2 (b)', 'S-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B3 - Boguis Combined School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B3 - Boguis Combined School</h3>
              <Table className="table-bordered table-sm">
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
                  {Elections.votes(this.state.results, 'B', 'B3', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B3', 'A-J', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B3', 'K-Z', 1)}
                  </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B3', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B3', 'A-J', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B3', 'K-Z', 2)}
                  </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B3')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B3', 'A-J')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B3', 'K-Z')}
                  </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B3')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B3', 'A-J')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B3', 'K-Z')}
                  </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B3')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B3', 'A-J')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B3', 'K-Z')}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B4 - Des Barra Combined School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B4 - Des Barra Combined School</h3>
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
                  {Elections.votes(this.state.results, 'B', 'B4', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B4', 'A-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B4', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B4', 'A-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B4')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B4', 'A-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B4')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B4', 'A-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B4')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B4', 'A-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B5 (a) - Fond Assau Combined School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B5 (a) - Fond Assau Combined School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-C</th>
                  <th scope="col">D-F</th>
                  <th scope="col">G-K</th>
                  <th scope="col">L-O</th>
                  <th scope="col">P-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B5 (a)', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'A-C', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'D-F', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'G-K', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'L-O', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'P-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B5 (a)', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'A-C', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'D-F', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'G-K', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'L-O', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (a)', 'P-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B5 (a)')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (a)', 'A-C')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (a)', 'D-F')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (a)', 'G-K')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (a)', 'L-O')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (a)', 'P-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B5 (a)')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (a)', 'A-C')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (a)', 'D-F')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (a)', 'G-K')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (a)', 'L-O')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (a)', 'P-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B5 (a)')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (a)', 'A-C')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (a)', 'D-F')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (a)', 'G-K')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (a)', 'L-O')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (a)', 'P-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B5 (b) - Garrand Mothers & Fathers Hall */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B5 (b) - Garrand Mothers & Fathers Hall</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-E</th>
                  <th scope="col">F-J</th>
                  <th scope="col">K-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B5 (b)', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (b)', 'A-E', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (b)', 'F-J', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (b)', 'K-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B5 (b)', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (b)', 'A-E', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (b)', 'F-J', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B5 (b)', 'K-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B5 (b)')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (b)', 'A-E')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (b)', 'F-J')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B5 (b)', 'K-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B5 (b)')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (b)', 'A-E')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (b)', 'F-J')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B5 (b)', 'K-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B5 (b)')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (b)', 'A-E')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (b)', 'F-J')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B5 (b)', 'K-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B6 (a) - Babonneau Secondary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B6 (a) - Babonneau Secondary School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-B</th>
                  <th scope="col">C-D</th>
                  <th scope="col">E-G</th>
                  <th scope="col">H-JOY</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B6 (a)', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'A-B', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'C-D', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'E-G', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'H-JOY', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B6 (a)', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'A-B', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'C-D', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'E-G', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (a)', 'H-JOY', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B6 (a)')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (a)', 'A-B')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (a)', 'C-D')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (a)', 'E-G')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (a)', 'H-JOY')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B6 (a)')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (a)', 'A-B')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (a)', 'C-D')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (a)', 'E-G')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (a)', 'H-JOY')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B6 (a)')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (a)', 'A-B')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (a)', 'C-D')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (a)', 'E-G')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (a)', 'H-JOY')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* B6 (b) - Babonneau Multi-Purpose Centre */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>B6 (b) - Babonneau Multi-Purpose Centre</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">JUL-L</th>
                  <th scope="col">M-O</th>
                  <th scope="col">P-R</th>
                  <th scope="col">S-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'B', 'B6 (b)', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'JUL-L', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'M-O', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'P-R', 1)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'S-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'B', 'B6 (b)', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'JUL-L', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'M-O', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'P-R', 2)}
                  {Elections.votesBySection(this.state.results,'B', 'B6 (b)', 'S-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'B', 'B6 (b)')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (b)', 'JUL-L')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (b)', 'M-O')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (b)', 'P-R')}
                  {Elections.rejectedVotesBySection(this.state.results,'B', 'B6 (b)', 'S-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'B', 'B6 (b)')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (b)', 'JUL-L')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (b)', 'M-O')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (b)', 'P-R')}
                  {Elections.votesCastBySection(this.state.results,'B', 'B6 (b)', 'S-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'B', 'B6 (b)')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (b)', 'JUL-L')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (b)', 'M-O')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (b)', 'P-R')}
                  {Elections.registeredVotersBySection(this.state.results,'B', 'B6 (b)', 'S-Z')}
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
    )
  }
}
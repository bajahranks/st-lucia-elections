import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

export default class CastriesCentral2016 extends Component {
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
    const slpCandidate = 'S. Felix';
    const uwpCandidate = 'S. Flood-Beaubrun';
    const indepCandidate = 'T. James';

    return (
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
          {/* E1 - Carmen Rene Memorial School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E1 - Carmen Rene Memorial School</h3>
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
                  {Elections.votes(this.state.results,'E', 'E1', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'A-E', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'F-L', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'M-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E1', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'A-E', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'F-L', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'M-Z', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E1', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'A-E', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'F-L', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E1', 'M-Z', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'E', 'E1')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E1', 'A-E')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E1', 'F-L')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E1', 'M-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'E', 'E1')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E1', 'A-E')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E1', 'F-L')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E1', 'M-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'E', 'E1')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E1', 'A-E')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E1', 'F-L')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E1', 'M-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* E2 - Anglican Infant School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E2 - Anglican Infant School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-E</th>
                  <th scope="col">F-K</th>
                  <th scope="col">L-R</th>
                  <th scope="col">S-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E2', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'A-E', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'F-K', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'L-R', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'S-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E2', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'A-E', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'F-K', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'L-R', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'S-Z', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E2', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'A-E', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'F-K', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'L-R', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E2', 'S-Z', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results, 'E', 'E2')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E2', 'A-E')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E2', 'F-K')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E2', 'L-R')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E2', 'S-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results, 'E', 'E2')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E2', 'A-E')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E2', 'F-K')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E2', 'L-R')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E2', 'S-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results, 'E', 'E2')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E2', 'A-E')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E2', 'F-K')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E2', 'L-R')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E2', 'S-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* E3 - R.C. Boys Primary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E3 - R.C. Boys Primary School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-E</th>
                  <th scope="col">F-J</th>
                  <th scope="col">K-Q</th>
                  <th scope="col">R-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E3', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'A-E', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'F-J', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'K-Q', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'R-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E3', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'A-E', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'F-J', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'K-Q', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'R-Z', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E3', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'A-E', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'F-J', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'K-Q', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E3', 'R-Z', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'E', 'E3')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E3', 'A-E')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E3', 'F-J')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E3', 'K-Q')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E3', 'R-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'E', 'E3')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E3', 'A-E')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E3', 'F-J')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E3', 'K-Q')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E3', 'R-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'E', 'E3')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E3', 'A-E')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E3', 'F-J')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E3', 'K-Q')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E3', 'R-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* E4 - R.C. Boys Infant School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E4 - R.C. Boys Infant School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-C</th>
                  <th scope="col">D-G</th>
                  <th scope="col">H-K</th>
                  <th scope="col">L-Q</th>
                  <th scope="col">R-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E4', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'A-C', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'D-G', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'H-K', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'L-Q', 1)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'R-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E4', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'A-C', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'D-G', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'H-K', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'L-Q', 2)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'R-Z', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E4', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'A-C', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'D-G', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'H-K', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'L-Q', 5)}
                  {Elections.votesBySection(this.state.results, 'E', 'E4', 'R-Z', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results, 'E', 'E4')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E4', 'A-C')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E4', 'D-G')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E4', 'H-K')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E4', 'L-Q')}
                  {Elections.rejectedVotesBySection(this.state.results, 'E', 'E4', 'R-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results, 'E', 'E4')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E4', 'A-C')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E4', 'D-G')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E4', 'H-K')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E4', 'L-Q')}
                  {Elections.votesCastBySection(this.state.results, 'E', 'E4', 'R-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results, 'E', 'E4')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E4', 'A-C')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E4', 'D-G')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E4', 'H-K')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E4', 'L-Q')}
                  {Elections.registeredVotersBySection(this.state.results, 'E', 'E4', 'R-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* E5 (a) - Ave Maria Primary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E5 (a) - Ave Maria Primary School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-CI</th>
                  <th scope="col">CL-E</th>
                  <th scope="col">F-I</th>
                  <th scope="col">J-K</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E5 (a)', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'A-CI', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'CL-E', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'F-I', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'J-K', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E5 (a)', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'A-CI', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'CL-E', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'F-I', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'J-K', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E5 (a)', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'A-CI', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'CL-E', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'F-I', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (a)', 'J-K', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'E', 'E5 (a)')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (a)', 'A-CI')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (a)', 'CL-E')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (a)', 'F-I')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (a)', 'J-K')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'E', 'E5 (a)')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (a)', 'A-CI')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (a)', 'CL-E')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (a)', 'F-I')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (a)', 'J-K')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'E', 'E5 (a)')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (a)', 'A-CI')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (a)', 'CL-E')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (a)', 'F-I')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (a)', 'J-K')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* E5 (b) - Ave Maria Infant School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E5 (b) - Ave Maria Infant School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">L-O</th>
                  <th scope="col">P-SP</th>
                  <th scope="col">ST-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>{slpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E5 (b)', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'L-O', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'P-SP', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'ST-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E5 (b)', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'L-O', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'P-SP', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'ST-Z', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results, 'E', 'E5 (b)', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'L-O', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'P-SP', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E5 (b)', 'ST-Z', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'E', 'E5 (b)')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (b)', 'L-O')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (b)', 'P-SP')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E5 (b)', 'ST-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'E', 'E5 (b)')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (b)', 'L-O')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (b)', 'P-SP')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E5 (b)', 'ST-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'E', 'E5 (b)')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (b)', 'L-O')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (b)', 'P-SP')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E5 (b)', 'ST-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* E6 Methodist Parish Hall */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>E6 Methodist Parish Hall</h3>
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
                  {Elections.votes(this.state.results, 'E', 'E6', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'A-D', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'E-I', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'J-M', 1)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'N-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>{uwpCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E6', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'A-D', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'E-I', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'J-M', 2)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'N-Z', 2)}
                </tr>
                <tr className={"indep-border"}>
                  <td>{indepCandidate}</td>
                  {Elections.votes(this.state.results,'E', 'E6', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'A-D', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'E-I', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'J-M', 5)}
                  {Elections.votesBySection(this.state.results,'E', 'E6', 'N-Z', 5)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {Elections.rejectedVotes(this.state.results,'E', 'E6')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E6', 'A-D')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E6', 'E-I')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E6', 'J-M')}
                  {Elections.rejectedVotesBySection(this.state.results,'E', 'E6', 'N-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {Elections.votesCast(this.state.results,'E', 'E6')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E6', 'A-D')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E6', 'E-I')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E6', 'J-M')}
                  {Elections.votesCastBySection(this.state.results,'E', 'E6', 'N-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {Elections.registeredVoters(this.state.results,'E', 'E6')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E6', 'A-D')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E6', 'E-I')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E6', 'J-M')}
                  {Elections.registeredVotersBySection(this.state.results,'E', 'E6', 'N-Z')}
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
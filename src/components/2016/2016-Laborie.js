import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

export default class Laborie2016 extends Component {
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
    const slpCandidate = 'A. Baptiste';
    const uwpCandidate = 'F. Jn. Pierre';

    return (
      <div>
        <section className={"container"}>
          <Loader
            type={"MutatingDots"}
            color={"Yellow"}
            secondaryColor={"Red"}
            visible={this.state.isLoading}
          />
          <h2>Laborie 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* J1 - Augier Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>J1 - Augier Combined School</h3>
                <Table className={"table-bordered table-sm"}>
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">J-K</th>
                    <th scope="col">L-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'J', 'J1', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'J-K', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'L-P', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'J', 'J1', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'J-K', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'L-P', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J1', 'Q-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'J', 'J1')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J1', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J1', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J1', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J1', 'J-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J1', 'L-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J1', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'J', 'J1')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J1', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J1', 'C-D')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J1', 'E-I')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J1', 'J-K')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J1', 'L-P')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J1', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'J', 'J1')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J1', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J1', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J1', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J1', 'J-K')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J1', 'L-P')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J1', 'Q-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* J2 - Laborie Boys School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>J2 - Laborie Boys School</h3>
                <Table className="table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'J', 'J2', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'D-I', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'M-R', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'J', 'J2', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'D-I', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'M-R', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J2', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'J', 'J2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J2', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J2', 'D-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J2', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J2', 'M-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J2', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'J', 'J2')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J2', 'A-C')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J2', 'D-I')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J2', 'J-L')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J2', 'M-R')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J2', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'J', 'J2')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J2', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J2', 'D-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J2', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J2', 'M-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J2', 'S-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* J3 - Laborie Girls Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>J3 - Laborie Girls Primary School</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-G</th>
                    <th scope="col">H-L</th>
                    <th scope="col">M-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'J', 'J3', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J3', 'A-G', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J3', 'H-L', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J3', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'J', 'J3', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J3', 'A-G', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J3', 'H-L', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J3', 'M-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'J', 'J3')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J3', 'A-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J3', 'H-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J3', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'J', 'J3')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J3', 'A-G')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J3', 'H-L')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J3', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'J', 'J3')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J3', 'A-G')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J3', 'H-L')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J3', 'M-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* J4 - La Grace Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>J4 - La Grace Combined School</h3>
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
                    {Elections.votes(this.state.results, 'J', 'J4', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J4', 'A-I', 1)}
                    {Elections.votesBySection(this.state.results, 'J', 'J4', 'J-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'J', 'J4', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J4', 'A-I', 2)}
                    {Elections.votesBySection(this.state.results, 'J', 'J4', 'J-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'J', 'J4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J4', 'A-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'J', 'J4', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'J', 'J4')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J4', 'A-I')}
                    {Elections.votesCastBySection(this.state.results, 'J', 'J4', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'J', 'J4')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J4', 'A-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'J', 'J4', 'J-Z')}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* J5 - Teaser's Dance Hall (Banse) */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>J5 - Teaser's Dance Hall (Banse)</h3>
                <Table className="table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-K</th>
                    <th scope="col">L-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'J', 'J5', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J5', 'A-K', 1)}
                    {Elections.votesBySection(this.state.results,'J', 'J5', 'L-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'J', 'J5', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J5', 'A-K', 2)}
                    {Elections.votesBySection(this.state.results,'J', 'J5', 'L-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'J', 'J5')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J5', 'A-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'J', 'J5', 'L-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'J', 'J5')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J5', 'A-K')}
                    {Elections.votesCastBySection(this.state.results,'J', 'J5', 'L-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'J', 'J5')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J5', 'A-K')}
                    {Elections.registeredVotersBySection(this.state.results,'J', 'J5', 'L-Z')}
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
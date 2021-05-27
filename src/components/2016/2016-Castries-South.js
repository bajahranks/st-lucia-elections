import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class CastriesSouth2016 extends Component {
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
    const slpCandidate = 'E. Hiliare';
    const uwpCandidate = 'M. Isaac';

    return (
      <div>
        <section className={"container"}>
          <h2>Castries South 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* F1 - SLASPA Ferry Terminal */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>F1 - SLASPA Ferry Terminal</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">E-G</th>
                    <th scope="col">H-JOR</th>
                    <th scope="col">M-Q</th>
                    <th scope="col">R-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'F', 'F1', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'E-G', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'H-JOR', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'M-Q', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'R-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'F', 'F1', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'E-G', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'H-JOR', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'M-Q', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F1', 'R-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'F', 'F1')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F1', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F1', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F1', 'E-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F1', 'H-JOR')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F1', 'M-Q')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F1', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'F', 'F1')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F1', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F1', 'C-D')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F1', 'E-G')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F1', 'H-JOR')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F1', 'M-Q')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F1', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'F', 'F1')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F1', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F1', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F1', 'E-G')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F1', 'H-JOR')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F1', 'M-Q')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F1', 'R-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* F2 - Ciceron Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>F2 - Ciceron Combined School</h3>
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
                    <th scope="col">J</th>
                    <th scope="col">K-MO</th>
                    <th scope="col">MU-R</th>
                    <th scope="col">S</th>
                    <th scope="col">T-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'F', 'F2', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'E-F', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'G-I', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'J', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'K-MO', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'MU-R', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'S', 1)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'T-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'F', 'F2', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'E-F', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'G-I', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'J', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'K-MO', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'MU-R', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'S', 2)}
                    {Elections.votesBySection(this.state.results, 'F', 'F2', 'T-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'F', 'F2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'E-F')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'G-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'J')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'K-MO')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'MU-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'S')}
                    {Elections.rejectedVotesBySection(this.state.results, 'F', 'F2', 'T-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'F', 'F2')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'A-B')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'C-D')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'E-F')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'G-I')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'J')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'K-MO')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'MU-R')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'S')}
                    {Elections.votesCastBySection(this.state.results, 'F', 'F2', 'T-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'F', 'F2')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'E-F')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'G-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'J')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'K-MO')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'MU-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'S')}
                    {Elections.registeredVotersBySection(this.state.results, 'F', 'F2', 'T-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            {/* F3 - La Croix Maingot (Hess School) */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>F3 - La Croix Maingot (Hess School)</h3>
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
                    {Elections.votes(this.state.results,'F', 'F3', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'M-R', 1)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'F', 'F3', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'M-R', 2)}
                    {Elections.votesBySection(this.state.results,'F', 'F3', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'F', 'F3')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F3', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F3', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F3', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F3', 'M-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'F', 'F3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'F', 'F3')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F3', 'A-D')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F3', 'E-I')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F3', 'J-L')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F3', 'M-R')}
                    {Elections.votesCastBySection(this.state.results,'F', 'F3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'F', 'F3')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F3', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F3', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F3', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F3', 'M-R')}
                    {Elections.registeredVotersBySection(this.state.results,'F', 'F3', 'S-Z')}
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
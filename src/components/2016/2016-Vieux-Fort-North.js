import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class VieuxFortNorth2016 extends Component {
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
    const slpCandidate = 'L. Jn. Baptiste';
    const uwpCandidate = 'P. Ambrose';

    return (
      <div>
        <section className={"container"}>
          <h2>Vieux-Fort North 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* L1 - Vigier Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>L1 - Vigier Combined School</h3>
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
                    {Elections.votes(this.state.results,'L', 'L1', 1)}
                    {Elections.votesBySection(this.state.results,'L', 'L1', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'L', 'L1', 2)}
                    {Elections.votesBySection(this.state.results,'L', 'L1', 'A-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'L', 'L1')}
                    {Elections.rejectedVotesBySection(this.state.results,'L', 'L1', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'L', 'L1')}
                    {Elections.votesCastBySection(this.state.results,'L', 'L1', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'L', 'L1')}
                    {Elections.registeredVotersBySection(this.state.results,'L', 'L1', 'A-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* L2 - Pierrot Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>L2 - Pierrot Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-CE</th>
                    <th scope="col">CH-D</th>
                    <th scope="col">E-G</th>
                    <th scope="col">H-JN</th>
                    <th scope="col">JO-L</th>
                    <th scope="col">M-O</th>
                    <th scope="col">P-SM</th>
                    <th scope="col">SO-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'L', 'L2', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'A-CE', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'CH-D', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'E-G', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'H-JN', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'JO-L', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'M-O', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'P-SM', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'SO-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'L', 'L2', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'A-CE', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'CH-D', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'E-G', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'H-JN', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'JO-L', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'M-O', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'P-SM', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L2', 'SO-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'L', 'L2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'A-CE')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'CH-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'E-G')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'H-JN')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'JO-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'M-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'P-SM')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L2', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'L', 'L2')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'A-CE')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'CH-D')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'E-G')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'H-JN')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'JO-L')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'M-O')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'P-SM')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L2', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'L', 'L2')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'A-CE')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'CH-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'E-G')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'H-JN')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'JO-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'M-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'P-SM')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L2', 'SO-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* L3 - Belle Vue Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>L3 - Belle Vue Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-L</th>
                    <th scope="col">M-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'L', 'L3', 1)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'M-P', 1)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'L', 'L3', 2)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'M-P', 2)}
                    {Elections.votesBySection(this.state.results,'L', 'L3', 'Q-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'L', 'L3')}
                    {Elections.rejectedVotesBySection(this.state.results,'L', 'L3', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'L', 'L3', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'L', 'L3', 'M-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'L', 'L3', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'L', 'L3')}
                    {Elections.votesCastBySection(this.state.results,'L', 'L3', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'L', 'L3', 'F-L')}
                    {Elections.votesCastBySection(this.state.results,'L', 'L3', 'M-P')}
                    {Elections.votesCastBySection(this.state.results,'L', 'L3', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'L', 'L3')}
                    {Elections.registeredVotersBySection(this.state.results,'L', 'L3', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'L', 'L3', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results,'L', 'L3', 'M-P')}
                    {Elections.registeredVotersBySection(this.state.results,'L', 'L3', 'Q-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* L4 - Grace Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>L4 - Grace Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-CH</th>
                    <th scope="col">CL-I</th>
                    <th scope="col">J-O</th>
                    <th scope="col">P-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'L', 'L4', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'A-CH', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'CL-I', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'J-O', 1)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'P-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'L', 'L4', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'A-CH', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'CL-I', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'J-O', 2)}
                    {Elections.votesBySection(this.state.results, 'L', 'L4', 'P-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'L', 'L4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L4', 'A-CH')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L4', 'CL-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L4', 'J-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'L', 'L4', 'P-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'L', 'L4')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L4', 'A-CH')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L4', 'CL-I')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L4', 'J-O')}
                    {Elections.votesCastBySection(this.state.results, 'L', 'L4', 'P-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'L', 'L4')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L4', 'A-CH')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L4', 'CL-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L4', 'J-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'L', 'L4', 'P-Z')}
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
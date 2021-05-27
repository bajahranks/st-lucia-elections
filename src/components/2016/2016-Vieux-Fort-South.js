import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class VieuxFortSouth2016 extends Component {
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
    const slpCandidate = 'K. Anthony';
    const uwpCandidate = 'U. Mondesir';

    return (
      <div>
        <section className={"container"}>
          <h2>Vieux-Fort South 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* K1 - Vieux-Fort Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>K1 - Vieux-Fort Primary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-G</th>
                    <th scope="col">H-K</th>
                    <th scope="col">K-O</th>
                    <th scope="col">P-Q</th>
                    <th scope="col">R-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'K', 'K1', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'D-G', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'H-K', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'K-O', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'P-Q', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'R-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'K', 'K1', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'D-G', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'H-K', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'K-O', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'P-Q', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K1', 'R-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'K', 'K1')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K1', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K1', 'D-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K1', 'H-K')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K1', 'K-O')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K1', 'P-Q')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K1', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'K', 'K1')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K1', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K1', 'D-G')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K1', 'H-K')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K1', 'K-O')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K1', 'P-Q')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K1', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'K', 'K1')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K1', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K1', 'D-G')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K1', 'H-K')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K1', 'K-O')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K1', 'P-Q')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K1', 'R-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* K2 - Vieux-Fort Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>K2 - Vieux-Fort Infant School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">J-L</th>
                    <th scope="col">M-Q</th>
                    <th scope="col">R-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'K', 'K2', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'J-L', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'M-Q', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'R-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'K', 'K2', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'J-L', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'M-Q', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K2', 'R-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'K', 'K2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K2', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K2', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K2', 'J-L')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K2', 'M-Q')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K2', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'K', 'K2')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K2', 'A-D')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K2', 'E-I')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K2', 'J-L')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K2', 'M-Q')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K2', 'R-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'K', 'K2')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K2', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K2', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K2', 'J-L')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K2', 'M-Q')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K2', 'R-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* K3 - Plain View Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>K3 - Plain View Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-D</th>
                    <th scope="col">E-F</th>
                    <th scope="col">G-JI</th>
                    <th scope="col">JN-L</th>
                    <th scope="col">M-O</th>
                    <th scope="col">P-SM</th>
                    <th scope="col">SO-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'K', 'K3', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'C-D', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'E-F', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'G-JI', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'JN-L', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'M-O', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'P-SM', 1)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'SO-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'K', 'K3', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'C-D', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'E-F', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'G-JI', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'JN-L', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'M-O', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'P-SM', 2)}
                    {Elections.votesBySection(this.state.results,'K', 'K3', 'SO-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'K', 'K3')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'C-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'E-F')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'G-JI')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'JN-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'M-O')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'P-SM')}
                    {Elections.rejectedVotesBySection(this.state.results,'K', 'K3', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'K', 'K3')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'A-B')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'C-D')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'E-F')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'G-JI')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'JN-L')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'M-O')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'P-SM')}
                    {Elections.votesCastBySection(this.state.results,'K', 'K3', 'SO-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'K', 'K3')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'C-D')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'E-F')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'G-JI')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'JN-L')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'M-O')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'P-SM')}
                    {Elections.registeredVotersBySection(this.state.results,'K', 'K3', 'SO-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* K4 - Vieux-Fort Secondary Campus B */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>K4 - Vieux-Fort Secondary Campus B</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-JN</th>
                    <th scope="col">JO-N</th>
                    <th scope="col">O-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'K', 'K4', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'F-JN', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'JO-N', 1)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'O-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'K', 'K4', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'F-JN', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'JO-N', 2)}
                    {Elections.votesBySection(this.state.results, 'K', 'K4', 'O-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'K', 'K4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K4', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K4', 'F-JN')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K4', 'JO-N')}
                    {Elections.rejectedVotesBySection(this.state.results, 'K', 'K4', 'O-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'K', 'K4')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K4', 'A-E')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K4', 'F-JN')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K4', 'JO-N')}
                    {Elections.votesCastBySection(this.state.results, 'K', 'K4', 'O-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'K', 'K4')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K4', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K4', 'F-JN')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K4', 'JO-N')}
                    {Elections.registeredVotersBySection(this.state.results, 'K', 'K4', 'O-Z')}
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
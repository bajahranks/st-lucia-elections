import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class DennerySouth2016 extends Component {
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
    const slpCandidate = 'J.Gedeon';
    const uwpCandidate = 'E.Estephane';
    const indepCandidate = 'C.Celestin';

    return (
      <div>
        <section className={"container"}>
          <h2>Dennery South 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* O1 - La Caye Day CAre Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>O1 - La Caye Day Care Centre</h3>
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
                    {Elections.votes(this.state.results,'O', 'O1', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'O', 'O1', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'M-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results,'O', 'O1', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'A-E', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'F-L', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O1', 'M-Z', 5)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'O', 'O1')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O1', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O1', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O1', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'O', 'O1')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O1', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O1', 'F-L')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O1', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'O', 'O1')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O1', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O1', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O1', 'M-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* O2 - Dennery Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>O2 - Dennery Infant School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-E</th>
                    <th scope="col">F-G</th>
                    <th scope="col">H-K</th>
                    <th scope="col">L-O</th>
                    <th scope="col">P-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'O', 'O2', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'D-E', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'F-G', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'H-K', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'L-O', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'P-R', 1)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'O', 'O2', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'D-E', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'F-G', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'H-K', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'L-O', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'P-R', 2)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'S-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results, 'O', 'O2', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'A-C', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'D-E', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'F-G', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'H-K', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'L-O', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'P-R', 5)}
                    {Elections.votesBySection(this.state.results, 'O', 'O2', 'S-Z', 5)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'O', 'O2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'D-E')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'F-G')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'H-K')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'L-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'P-R')}
                    {Elections.rejectedVotesBySection(this.state.results, 'O', 'O2', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'O', 'O2')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'A-C')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'D-E')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'F-G')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'H-K')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'L-O')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'P-R')}
                    {Elections.votesCastBySection(this.state.results, 'O', 'O2', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'O', 'O2')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'D-E')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'F-G')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'H-K')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'L-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'P-R')}
                    {Elections.registeredVotersBySection(this.state.results, 'O', 'O2', 'S-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* O3 - Dennery Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>O3 - Dennery Secondary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-J</th>
                    <th scope="col">K-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'O', 'O3', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'F-J', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'K-R', 1)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'O', 'O3', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'F-J', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'K-R', 2)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'S-Z', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>{indepCandidate}</td>
                    {Elections.votes(this.state.results,'O', 'O3', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'A-E', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'F-J', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'K-R', 5)}
                    {Elections.votesBySection(this.state.results,'O', 'O3', 'S-Z', 5)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'O', 'O3')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O3', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O3', 'F-J')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O3', 'K-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'O', 'O3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'O', 'O3')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O3', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O3', 'F-J')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O3', 'K-R')}
                    {Elections.votesCastBySection(this.state.results,'O', 'O3', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'O', 'O3')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O3', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O3', 'F-J')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O3', 'K-R')}
                    {Elections.registeredVotersBySection(this.state.results,'O', 'O3', 'S-Z')}
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
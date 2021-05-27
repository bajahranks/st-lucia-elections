import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class DenneryNorth2016 extends Component {
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
    const slpCandidate = 'S. Edward';
    const uwpCandidate = 'J. Henry';

    return (
      <div>
        <section className={"container"}>
          <h2>Dennery North 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* P1 - Grande Riviere Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>P1 - Grande Riviere Secondary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-G</th>
                    <th scope="col">H-MO</th>
                    <th scope="col">MY-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'P', 'P1', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'E-G', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'H-MO', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'MY-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'P', 'P1', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'E-G', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'H-MO', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P1', 'MY-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'P', 'P1')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P1', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P1', 'E-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P1', 'H-MO')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P1', 'MY-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'P', 'P1')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P1', 'A-D')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P1', 'E-G')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P1', 'H-MO')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P1', 'MY-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'P', 'P1')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P1', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P1', 'E-G')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P1', 'H-MO')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P1', 'MY-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* P2 - Richfond Infant School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>P2 - Richfond Infant School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-JON</th>
                    <th scope="col">JOS-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'P', 'P2', 1)}
                    {Elections.votesBySection(this.state.results, 'P', 'P2', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results, 'P', 'P2', 'E-JON', 1)}
                    {Elections.votesBySection(this.state.results, 'P', 'P2', 'JOS-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'P', 'P2', 2)}
                    {Elections.votesBySection(this.state.results, 'P', 'P2', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results, 'P', 'P2', 'E-JON', 2)}
                    {Elections.votesBySection(this.state.results, 'P', 'P2', 'JOS-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'P', 'P2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'P', 'P2', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results, 'P', 'P2', 'E-JON')}
                    {Elections.rejectedVotesBySection(this.state.results, 'P', 'P2', 'JOS-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'P', 'P2')}
                    {Elections.votesCastBySection(this.state.results, 'P', 'P2', 'A-D')}
                    {Elections.votesCastBySection(this.state.results, 'P', 'P2', 'E-JON')}
                    {Elections.votesCastBySection(this.state.results, 'P', 'P2', 'JOS-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'P', 'P2')}
                    {Elections.registeredVotersBySection(this.state.results, 'P', 'P2', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results, 'P', 'P2', 'E-JON')}
                    {Elections.registeredVotersBySection(this.state.results, 'P', 'P2', 'JOS-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* P3 - Derniere Riviere Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>P3 - Derniere Riviere Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-FO</th>
                    <th scope="col">FR-JOH</th>
                    <th scope="col">JOS-P</th>
                    <th scope="col">Q-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'P', 'P3', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'D-FO', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'FR-JOH', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'JOS-P', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'Q-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'P', 'P3', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'D-FO', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'FR-JOH', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'JOS-P', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P3', 'Q-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'P', 'P3')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P3', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P3', 'D-FO')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P3', 'FR-JOH')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P3', 'JOS-P')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P3', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'P', 'P3')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P3', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P3', 'D-FO')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P3', 'FR-JOH')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P3', 'JOS-P')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P3', 'Q-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'P', 'P3')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P3', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P3', 'D-FO')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P3', 'FR-JOH')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P3', 'JOS-P')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P3', 'Q-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* P4 - La Ressource Combined Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>P4 - La Ressource Combined Centre</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-F</th>
                    <th scope="col">G-J</th>
                    <th scope="col">K-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'P', 'P4', 1)}
                    {Elections.votesBySection(this.state.results, 'P', 'P4', 'A-F', 1)}
                    {Elections.votesBySection(this.state.results, 'P', 'P4', 'G-J', 1)}
                    {Elections.votesBySection(this.state.results, 'P', 'P4', 'K-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'P', 'P4', 2)}
                    {Elections.votesBySection(this.state.results, 'P', 'P4', 'A-F', 2)}
                    {Elections.votesBySection(this.state.results, 'P', 'P4', 'G-J', 2)}
                    {Elections.votesBySection(this.state.results, 'P', 'P4', 'K-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'P', 'P4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'P', 'P4', 'A-F')}
                    {Elections.rejectedVotesBySection(this.state.results, 'P', 'P4', 'G-J')}
                    {Elections.rejectedVotesBySection(this.state.results, 'P', 'P4', 'K-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'P', 'P4')}
                    {Elections.votesCastBySection(this.state.results, 'P', 'P4', 'A-F')}
                    {Elections.votesCastBySection(this.state.results, 'P', 'P4', 'G-J')}
                    {Elections.votesCastBySection(this.state.results, 'P', 'P4', 'K-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'P', 'P4')}
                    {Elections.registeredVotersBySection(this.state.results, 'P', 'P4', 'A-F')}
                    {Elections.registeredVotersBySection(this.state.results, 'P', 'P4', 'G-J')}
                    {Elections.registeredVotersBySection(this.state.results, 'P', 'P4', 'K-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* P5 - Au Leon Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>P5 - Au Leon Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-C</th>
                    <th scope="col">D-G</th>
                    <th scope="col">H-L</th>
                    <th scope="col">M-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'P', 'P5', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'A-C', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'D-G', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'H-L', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'M-R', 1)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'P', 'P5', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'A-C', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'D-G', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'H-L', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'M-R', 2)}
                    {Elections.votesBySection(this.state.results,'P', 'P5', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'P', 'P5')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P5', 'A-C')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P5', 'D-G')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P5', 'H-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P5', 'M-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'P', 'P5', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'P', 'P5')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P5', 'A-C')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P5', 'D-G')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P5', 'H-L')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P5', 'M-R')}
                    {Elections.votesCastBySection(this.state.results,'P', 'P5', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'P', 'P5')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P5', 'A-C')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P5', 'D-G')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P5', 'H-L')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P5', 'M-R')}
                    {Elections.registeredVotersBySection(this.state.results,'P', 'P5', 'S-Z')}
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
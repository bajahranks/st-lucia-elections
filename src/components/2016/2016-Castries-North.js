import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class CastriesNorth2016 extends Component {
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
    const slpCandidate = 'S. Charlery';
    const uwpCandidate = 'S. King';

    return (
      <div>
        <section className={"container"}>
          <h2>Castries North 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* C1 - Castries Comprehensive School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>C1 - Castries Comprehensive School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-CHAR</th>
                    <th scope="col">CHAS-E</th>
                    <th scope="col">F-JN</th>
                    <th scope="col">MI-R</th>
                    <th scope="col">S-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'C', 'C1', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'A-CHAR', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'CHAS-E', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'F-JN', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'MI-R', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'S-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'C', 'C1', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'A-CHAR', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'CHAS-E', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'F-JN', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'MI-R', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C1', 'S-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'C', 'C1')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C1', 'A-CHAR')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C1', 'CHAS-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C1', 'F-JN')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C1', 'MI-R')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C1', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'C', 'C1')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C1', 'A-CHAR')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C1', 'CHAS-E')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C1', 'F-JN')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C1', 'MI-R')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C1', 'S-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'C', 'C1')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C1', 'A-CHAR')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C1', 'CHAS-E')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C1', 'F-JN')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C1', 'MI-R')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C1', 'S-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* D2 - Entrepot Secondary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>C2 - Vide Bouteille Secondary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-BO</th>
                    <th scope="col">BR-DA</th>
                    <th scope="col">DE-FO</th>
                    <th scope="col">FR-JI</th>
                    <th scope="col">JN-LE</th>
                    <th scope="col">LI-O</th>
                    <th scope="col">P-SM</th>
                    <th scope="col">NS-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'C', 'C2', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'A-BO', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'BR-DA', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'DE-FO', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'FR-JI', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'JN-LE', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'LI-O', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'P-SM', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'NS-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'C', 'C2', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'A-BO', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'BR-DA', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'DE-FO', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'FR-JI', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'JN-LE', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'LI-O', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'P-SM', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C2', 'NS-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'C', 'C2')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'A-BO')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'BR-DA')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'DE-FO')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'FR-JI')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'JN-LE')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'LI-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'P-SM')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C2', 'NS-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'C', 'C2')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'A-BO')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'BR-DA')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'DE-FO')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'FR-JI')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'JN-LE')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'LI-O')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'P-SM')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C2', 'NS-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'C', 'C2')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'A-BO')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'BR-DA')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'DE-FO')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'FR-JI')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'JN-LE')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'LI-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'P-SM')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C2', 'NS-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* C3 - Anglican Primary School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>C3 - Anglican Primary School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">J-O</th>
                    <th scope="col">P-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results,'C', 'C3', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'J-O', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'P-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'C', 'C3', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'J-O', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C3', 'P-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'C', 'C3')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C3', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C3', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C3', 'J-O')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C3', 'P-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'C', 'C3')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C3', 'A-D')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C3', 'E-I')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C3', 'J-O')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C3', 'P-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'C', 'C3')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C3', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C3', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C3', 'J-O')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C3', 'P-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* C4 - Morne Du Don Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>C4 - Morne Du Don Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-CHAN</th>
                    <th scope="col">CHAR-E</th>
                    <th scope="col">F-I</th>
                    <th scope="col">J-K</th>
                    <th scope="col">L-O</th>
                    <th scope="col">P-SI</th>
                    <th scope="col">SK-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'C', 'C4', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'A-CHAN', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'CHAR-E', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'F-I', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'J-K', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'L-O', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'P-SI', 1)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'SK-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'C', 'C4', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'A-CHAN', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'CHAR-E', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'F-I', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'J-K', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'L-O', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'P-SI', 2)}
                    {Elections.votesBySection(this.state.results, 'C', 'C4', 'SK-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'C', 'C4')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'A-CHAN')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'CHAR-E')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'F-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'J-K')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'L-O')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'P-SI')}
                    {Elections.rejectedVotesBySection(this.state.results, 'C', 'C4', 'SK-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'C', 'C4')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'A-CHAN')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'CHAR-E')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'F-I')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'J-K')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'L-O')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'P-SI')}
                    {Elections.votesCastBySection(this.state.results, 'C', 'C4', 'SK-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'C', 'C4')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'A-CHAN')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'CHAR-E')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'F-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'J-K')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'L-O')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'P-SI')}
                    {Elections.registeredVotersBySection(this.state.results, 'C', 'C4', 'SK-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* C5 - St. Joseph's Convent Pre-School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>C5 - St. Joseph's Convent Pre-School</h3>
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
                    {Elections.votes(this.state.results, 'C', 'C5', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C5', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C5', 'F-L', 1)}
                    {Elections.votesBySection(this.state.results,'C', 'C5', 'M-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'C', 'C5', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C5', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C5', 'F-L', 2)}
                    {Elections.votesBySection(this.state.results,'C', 'C5', 'M-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'C', 'C5')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C5', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C5', 'F-L')}
                    {Elections.rejectedVotesBySection(this.state.results,'C', 'C5', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'C', 'C5')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C5', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C5', 'F-L')}
                    {Elections.votesCastBySection(this.state.results,'C', 'C5', 'M-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'C', 'C5')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C5', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C5', 'F-L')}
                    {Elections.registeredVotersBySection(this.state.results,'C', 'C5', 'M-Z')}
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
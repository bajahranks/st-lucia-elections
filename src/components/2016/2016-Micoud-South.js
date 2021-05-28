import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Elections from "../../services/elections";

export default class MicoudSouth2016 extends Component {
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
    const slpCandidate = 'G. Ferdinand';
    const uwpCandidate = 'A. Chastanet';

    return (
      <div>
        <section className={"container"}>
          <h2>Micoud South 2016 Results</h2>
          <hr />
          <div className={"row"}>
            {/* M1 - Dugard Community Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>M1 - Dugard Community Centre</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results,'M', 'M1', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M1', 'A-I', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M1', 'J-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'M', 'M1', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M1', 'A-I', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M1', 'J-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'M', 'M1')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M1', 'A-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M1', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'M', 'M1')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M1', 'A-I')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M1', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'M', 'M1')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M1', 'A-I')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M1', 'J-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* M2 (a) - Ti Rocher Community Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>M2 (a) - Ti Rocher Community Centre</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-B</th>
                    <th scope="col">C-I</th>
                    <th scope="col">J-N</th>
                    <th scope="col">O-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'M', 'M2 (a)', 1)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'A-B', 1)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'C-I', 1)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'J-N', 1)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'O-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'M', 'M2 (a)', 2)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'A-B', 2)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'C-I', 2)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'J-N', 2)}
                    {Elections.votesBySection(this.state.results, 'M', 'M2 (a)', 'O-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'M', 'M2 (a)')}
                    {Elections.rejectedVotesBySection(this.state.results, 'M', 'M2 (a)', 'A-B')}
                    {Elections.rejectedVotesBySection(this.state.results, 'M', 'M2 (a)', 'C-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'M', 'M2 (a)', 'J-N')}
                    {Elections.rejectedVotesBySection(this.state.results, 'M', 'M2 (a)', 'O-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'M', 'M2 (a)')}
                    {Elections.votesCastBySection(this.state.results, 'M', 'M2 (a)', 'A-B')}
                    {Elections.votesCastBySection(this.state.results, 'M', 'M2 (a)', 'C-I')}
                    {Elections.votesCastBySection(this.state.results, 'M', 'M2 (a)', 'J-N')}
                    {Elections.votesCastBySection(this.state.results, 'M', 'M2 (a)', 'O-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'M', 'M2 (a)')}
                    {Elections.registeredVotersBySection(this.state.results, 'M', 'M2 (a)', 'A-B')}
                    {Elections.registeredVotersBySection(this.state.results, 'M', 'M2 (a)', 'C-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'M', 'M2 (a)', 'J-N')}
                    {Elections.registeredVotersBySection(this.state.results, 'M', 'M2 (a)', 'O-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* M2 (b) - La Cour Ville Community Centre */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>M2 (b) - La Cour Ville Community Centre</h3>
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
                    {Elections.votes(this.state.results,'M', 'M2 (b)', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M2 (b)', 'A-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'M', 'M2 (b)', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M2 (b)', 'A-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'M', 'M2 (b)')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M2 (b)', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'M', 'M2 (b)')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M2 (b)', 'A-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'M', 'M2 (b)')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M2 (b)', 'A-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* M3 (a) - Anse Ger Secondary Schoole */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>M3 (a) - Anse Ger Secondary School</h3>
                <table className="table table-bordered table-sm">
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
                    {Elections.votes(this.state.results, 'M', 'M3 (a)', 1)}
                    {Elections.votesBySection(this.state.results, 'M', 'M3 (a)', 'A-I', 1)}
                    {Elections.votesBySection(this.state.results, 'M', 'M3 (a)', 'J-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results, 'M', 'M3 (a)', 2)}
                    {Elections.votesBySection(this.state.results, 'M', 'M3 (a)', 'A-I', 2)}
                    {Elections.votesBySection(this.state.results, 'M', 'M3 (a)', 'J-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results, 'M', 'M3 (a)')}
                    {Elections.rejectedVotesBySection(this.state.results, 'M', 'M3 (a)', 'A-I')}
                    {Elections.rejectedVotesBySection(this.state.results, 'M', 'M3 (a)', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results, 'M', 'M3 (a)')}
                    {Elections.votesCastBySection(this.state.results, 'M', 'M3 (a)', 'A-I')}
                    {Elections.votesCastBySection(this.state.results, 'M', 'M3 (a)', 'J-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results, 'M', 'M3 (a)')}
                    {Elections.registeredVotersBySection(this.state.results, 'M', 'M3 (a)', 'A-I')}
                    {Elections.registeredVotersBySection(this.state.results, 'M', 'M3 (a)', 'J-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* M3 (b) - Desruisseaux Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>M3 (b) - Desruisseaux Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-D</th>
                    <th scope="col">E-I</th>
                    <th scope="col">J-MA</th>
                    <th scope="col">MC-SP</th>
                    <th scope="col">ST-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'M', 'M3 (b)', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'A-D', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'E-I', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'J-MA', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'MC-SP', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'ST-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'M', 'M3 (b)', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'A-D', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'E-I', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'J-MA', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'MC-SP', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (b)', 'ST-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'M', 'M3 (b)')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (b)', 'A-D')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (b)', 'E-I')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (b)', 'J-MA')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (b)', 'MC-SP')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (b)', 'ST-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'M', 'M3 (b)')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (b)', 'A-D')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (b)', 'E-I')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (b)', 'J-MA')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (b)', 'MC-SP')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (b)', 'ST-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'M', 'M3 (b)')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (b)', 'A-D')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (b)', 'E-I')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (b)', 'J-MA')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (b)', 'MC-SP')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (b)', 'ST-Z')}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {/* M3 (c) - Blanchard Combined School */}
            <div className={"max-width-max-content col-sm-12 col-md-12"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>M3 (c) - Blanchard Combined School</h3>
                <table className="table table-bordered table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Total Votes</th>
                    <th scope="col">A-E</th>
                    <th scope="col">F-J</th>
                    <th scope="col">K-PA</th>
                    <th scope="col">PE-Z</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>{slpCandidate}</td>
                    {Elections.votes(this.state.results, 'M', 'M3 (c)', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'A-E', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'F-J', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'K-PA', 1)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'PE-Z', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>{uwpCandidate}</td>
                    {Elections.votes(this.state.results,'M', 'M3 (c)', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'A-E', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'F-J', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'K-PA', 2)}
                    {Elections.votesBySection(this.state.results,'M', 'M3 (c)', 'PE-Z', 2)}
                  </tr>
                  <tr>
                    <td>Rejected Votes</td>
                    {Elections.rejectedVotes(this.state.results,'M', 'M3 (c)')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (c)', 'A-E')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (c)', 'F-J')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (c)', 'K-PA')}
                    {Elections.rejectedVotesBySection(this.state.results,'M', 'M3 (c)', 'PE-Z')}
                  </tr>
                  <tr>
                    <td>Votes Cast</td>
                    {Elections.votesCast(this.state.results,'M', 'M3 (c)')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (c)', 'A-E')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (c)', 'F-J')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (c)', 'K-PA')}
                    {Elections.votesCastBySection(this.state.results,'M', 'M3 (c)', 'PE-Z')}
                  </tr>
                  <tr>
                    <td>Registered Voters</td>
                    {Elections.registeredVoters(this.state.results,'M', 'M3 (c)')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (c)', 'A-E')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (c)', 'F-J')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (c)', 'K-PA')}
                    {Elections.registeredVotersBySection(this.state.results,'M', 'M3 (c)', 'PE-Z')}
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
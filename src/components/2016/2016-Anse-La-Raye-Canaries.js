import React, { Component } from "react";
import ResultDataService from "../../services/result";
import Table from "react-bootstrap/Table";
import Loader from "react-loader-spinner";

export default class AnseLaRayeCanaries2016 extends Component {
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

  votesPerc(votes, votesCast) {
    return Math.round((votes/votesCast) * 100)
  }

  votes(districtCode, pollingStationCode, candidateNumber) {
    let votes = 0;
    let votesCast = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
          result.pollingStation.code === pollingStationCode) {

        switch (candidateNumber) {
          case 1:
            votes += result.candidate1Votes;
            break;
          case 2:
            votes += result.candidate2Votes;
            break;
          case 3:
            votes += result.candidate3Votes;
            break;
          case 4:
            votes += result.candidate4Votes;
            break;
          case 5:
            votes += result.candidate5Votes;
            break;
          case 6:
            votes += result.candidate6Votes;
            break;
          default:
        }
        votesCast += result.votesCast;
      }
    })
    return (
      <>
        <th>{votes} {' '} ({this.votesPerc(votes, votesCast)}%)</th>
      </>
    )
  }

  votesBySection(districtCode, pollingStationCode, sectionCode, candidateNumber) {
    let votes = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
           result.pollingStation.code === pollingStationCode &&
           result.section.name === sectionCode) {

        switch (candidateNumber) {
          case 1:
            votes += result.candidate1Votes;
            break;
          case 2:
            votes += result.candidate2Votes;
            break;
          case 3:
            votes += result.candidate3Votes;
            break;
          case 4:
            votes += result.candidate4Votes;
            break;
          case 5:
            votes += result.candidate5Votes;
            break;
          case 6:
            votes += result.candidate6Votes;
            break;
          default:
        }
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }
// @todo import elections class and use the methods from there.
  rejectedVotes(districtCode, pollingStationCode) {
    let votes = 0;
    let votesCast = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        votes += result.rejectedVotes;
        votesCast += result.votesCast;
      }
    })
    return (
      <>
        <th>{votes} {' '} ({this.votesPerc(votes, votesCast)}%)</th>
      </>
    )
  }

  rejectedVotesBySection(districtCode, pollingStationCode, sectionCode) {
    let votes = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        votes = result.rejectedVotes;
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }

  votesCast(districtCode, pollingStationCode) {
    let votes = 0;
    let registeredVoters = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        votes += result.votesCast;
        registeredVoters += result.registeredVoters;
      }
    })
    return (
      <>
        <th>{votes} {' '} ({this.votesPerc(votes, registeredVoters)}%)</th>
      </>
    )
  }

  votesCastBySection(districtCode, pollingStationCode, sectionCode) {
    let votes = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        votes = result.votesCast;
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }

  registeredVoters(districtCode, pollingStationCode) {
    let votes = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        votes += result.registeredVoters;
      }
    })
    return (
      <>
        <th>{votes}</th>
      </>
    )
  }

  registeredVotersBySection(districtCode, pollingStationCode, sectionCode) {
    let votes = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        votes = result.registeredVoters;
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }

  render() {
    return (
      <section className={"container"}>
        <Loader
          type={"MutatingDots"}
          color={"Yellow"}
          secondaryColor={"Red"}
          visible={this.state.isLoading}
        />
        <h2>Anse La Raye/Canaries 2016 Results</h2>
        <hr />
        <div className={"row"}>
          {/* G1 - Roseau Combined School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>G1 - Roseau Combined School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-C</th>
                  <th scope="col">D-F</th>
                  <th scope="col">G-JOR</th>
                  <th scope="col">JOS-O</th>
                  <th scope="col">P-SO</th>
                  <th scope="col">ST-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>J. Victorin</td>
                  {this.votes('G', 'G1', 1)}
                  {this.votesBySection('G', 'G1', 'A-C', 1)}
                  {this.votesBySection('G', 'G1', 'D-F', 1)}
                  {this.votesBySection('G', 'G1', 'G-JOR', 1)}
                  {this.votesBySection('G', 'G1', 'JOS-O', 1)}
                  {this.votesBySection('G', 'G1', 'P-SO', 1)}
                  {this.votesBySection('G', 'G1', 'ST-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>D. Fedee</td>
                  {this.votes('G', 'G1', 2)}
                  {this.votesBySection('G', 'G1', 'A-C', 2)}
                  {this.votesBySection('G', 'G1', 'D-F', 2)}
                  {this.votesBySection('G', 'G1', 'G-JOR', 2)}
                  {this.votesBySection('G', 'G1', 'JOS-O', 2)}
                  {this.votesBySection('G', 'G1', 'P-SO', 2)}
                  {this.votesBySection('G', 'G1', 'ST-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {this.rejectedVotes('G', 'G1')}
                  {this.rejectedVotesBySection('G', 'G1', 'A-C')}
                  {this.rejectedVotesBySection('G', 'G1', 'D-F')}
                  {this.rejectedVotesBySection('G', 'G1', 'G-JOR')}
                  {this.rejectedVotesBySection('G', 'G1', 'JOS-O')}
                  {this.rejectedVotesBySection('G', 'G1', 'P-SO')}
                  {this.rejectedVotesBySection('G', 'G1', 'ST-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {this.votesCast('G', 'G1')}
                  {this.votesCastBySection('G', 'G1', 'A-C')}
                  {this.votesCastBySection('G', 'G1', 'D-F')}
                  {this.votesCastBySection('G', 'G1', 'G-JOR')}
                  {this.votesCastBySection('G', 'G1', 'JOS-O')}
                  {this.votesCastBySection('G', 'G1', 'P-SO')}
                  {this.votesCastBySection('G', 'G1', 'ST-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {this.registeredVoters('G', 'G1')}
                  {this.registeredVotersBySection('G', 'G1', 'A-C')}
                  {this.registeredVotersBySection('G', 'G1', 'D-F')}
                  {this.registeredVotersBySection('G', 'G1', 'G-JOR')}
                  {this.registeredVotersBySection('G', 'G1', 'JOS-O')}
                  {this.registeredVotersBySection('G', 'G1', 'P-SO')}
                  {this.registeredVotersBySection('G', 'G1', 'ST-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* G2 (a) - Millet Primary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>G2 (a) - Millet Primary School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-G</th>
                  <th scope="col">H-M</th>
                  <th scope="col">N-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>J. Victorin</td>
                  {this.votes('G', 'G2 (a)', 1)}
                  {this.votesBySection('G', 'G2 (a)', 'A-G', 1)}
                  {this.votesBySection('G', 'G2 (a)', 'H-M', 1)}
                  {this.votesBySection('G', 'G2 (a)', 'N-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>D. Fedee</td>
                  {this.votes('G', 'G2 (a)', 2)}
                  {this.votesBySection('G', 'G2 (a)', 'A-G', 2)}
                  {this.votesBySection('G', 'G2 (a)', 'H-M', 2)}
                  {this.votesBySection('G', 'G2 (a)', 'N-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {this.rejectedVotes('G', 'G2 (a)')}
                  {this.rejectedVotesBySection('G', 'G2 (a)', 'A-G')}
                  {this.rejectedVotesBySection('G', 'G2 (a)', 'H-M')}
                  {this.rejectedVotesBySection('G', 'G2 (a)', 'N-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {this.votesCast('G', 'G2 (a)')}
                  {this.votesCastBySection('G', 'G2 (a)', 'A-G')}
                  {this.votesCastBySection('G', 'G2 (a)', 'H-M')}
                  {this.votesCastBySection('G', 'G2 (a)', 'N-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {this.registeredVoters('G', 'G2 (a)')}
                  {this.registeredVotersBySection('G', 'G2 (a)', 'A-G')}
                  {this.registeredVotersBySection('G', 'G2 (a)', 'H-M')}
                  {this.registeredVotersBySection('G', 'G2 (a)', 'N-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* G2 (b) - Christian Faith Assembly< */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>G2 (b) - Christian Faith Assembly</h3>
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
                  <td>J. Victorin</td>
                  {this.votes('G', 'G2 (b)', 1)}
                  {this.votesBySection('G', 'G2 (b)', 'A-I', 1)}
                  {this.votesBySection('G', 'G2 (b)', 'J-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>D. Fedee</td>
                  {this.votes('G', 'G2 (b)', 2)}
                  {this.votesBySection('G', 'G2 (b)', 'A-I', 2)}
                  {this.votesBySection('G', 'G2 (b)', 'J-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {this.rejectedVotes('G', 'G2 (b)')}
                  {this.rejectedVotesBySection('G', 'G2 (b)', 'A-I')}
                  {this.rejectedVotesBySection('G', 'G2 (b)', 'J-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {this.votesCast('G', 'G2 (b)')}
                  {this.votesCastBySection('G', 'G2 (b)', 'A-I')}
                  {this.votesCastBySection('G', 'G2 (b)', 'J-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {this.registeredVoters('G', 'G2 (b)')}
                  {this.registeredVotersBySection('G', 'G2 (b)', 'A-I')}
                  {this.registeredVotersBySection('G', 'G2 (b)', 'J-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* G3 - Anse La Raye Primary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>G3 - Anse La Raye Primary School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-B</th>
                  <th scope="col">C-G</th>
                  <th scope="col">H-K</th>
                  <th scope="col">L-O</th>
                  <th scope="col">P-SM</th>
                  <th scope="col">SO-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>J. Victorin</td>
                  {this.votes('G', 'G3', 1)}
                  {this.votesBySection('G', 'G3', 'A-B', 1)}
                  {this.votesBySection('G', 'G3', 'C-G', 1)}
                  {this.votesBySection('G', 'G3', 'H-K', 1)}
                  {this.votesBySection('G', 'G3', 'L-O', 1)}
                  {this.votesBySection('G', 'G3', 'P-SM', 1)}
                  {this.votesBySection('G', 'G3', 'SO-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>D. Fedee</td>
                  {this.votes('G', 'G3', 2)}
                  {this.votesBySection('G', 'G3', 'A-B', 2)}
                  {this.votesBySection('G', 'G3', 'C-G', 2)}
                  {this.votesBySection('G', 'G3', 'H-K', 2)}
                  {this.votesBySection('G', 'G3', 'L-O', 2)}
                  {this.votesBySection('G', 'G3', 'P-SM', 2)}
                  {this.votesBySection('G', 'G3', 'SO-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {this.rejectedVotes('G', 'G3')}
                  {this.rejectedVotesBySection('G', 'G3', 'A-B')}
                  {this.rejectedVotesBySection('G', 'G3', 'C-G')}
                  {this.rejectedVotesBySection('G', 'G3', 'H-K')}
                  {this.rejectedVotesBySection('G', 'G3', 'L-O')}
                  {this.rejectedVotesBySection('G', 'G3', 'P-SM')}
                  {this.rejectedVotesBySection('G', 'G3', 'SO-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {this.votesCast('G', 'G3')}
                  {this.votesCastBySection('G', 'G3', 'A-B')}
                  {this.votesCastBySection('G', 'G3', 'C-G')}
                  {this.votesCastBySection('G', 'G3', 'H-K')}
                  {this.votesCastBySection('G', 'G3', 'L-O')}
                  {this.votesCastBySection('G', 'G3', 'P-SM')}
                  {this.votesCastBySection('G', 'G3', 'SO-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {this.registeredVoters('G', 'G3')}
                  {this.registeredVotersBySection('G', 'G3', 'A-B')}
                  {this.registeredVotersBySection('G', 'G3', 'C-G')}
                  {this.registeredVotersBySection('G', 'G3', 'H-K')}
                  {this.registeredVotersBySection('G', 'G3', 'L-O')}
                  {this.registeredVotersBySection('G', 'G3', 'P-SM')}
                  {this.registeredVotersBySection('G', 'G3', 'SO-Z')}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* G4 - Canaries Primary School */}
          <div className={"max-width-max-content col-sm-12 col-md-12"}>
            <div className={"district-results"}>
              <h3 className={"text-center"}>G4 - Canaries Primary School</h3>
              <Table className="table-bordered table-sm">
                <caption>100% reporting</caption>
                <thead>
                <tr>
                  <th scope="col">Candidates</th>
                  <th scope="col">Total Votes</th>
                  <th scope="col">A-C</th>
                  <th scope="col">D-G</th>
                  <th scope="col">H-JOH</th>
                  <th scope="col">JON-L</th>
                  <th scope="col">M-R</th>
                  <th scope="col">S-Z</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"slp-border"}>
                  <td>J. Victorin</td>
                  {this.votes('G', 'G4', 1)}
                  {this.votesBySection('G', 'G4', 'A-C', 1)}
                  {this.votesBySection('G', 'G4', 'D-G', 1)}
                  {this.votesBySection('G', 'G4', 'H-JOH', 1)}
                  {this.votesBySection('G', 'G4', 'JON-L', 1)}
                  {this.votesBySection('G', 'G4', 'M-R', 1)}
                  {this.votesBySection('G', 'G4', 'S-Z', 1)}
                </tr>
                <tr className={"uwp-border"}>
                  <td>D. Fedee</td>
                  {this.votes('G', 'G4', 2)}
                  {this.votesBySection('G', 'G4', 'A-C', 2)}
                  {this.votesBySection('G', 'G4', 'D-G', 2)}
                  {this.votesBySection('G', 'G4', 'H-JOH', 2)}
                  {this.votesBySection('G', 'G4', 'JON-L', 2)}
                  {this.votesBySection('G', 'G4', 'M-R', 2)}
                  {this.votesBySection('G', 'G4', 'S-Z', 2)}
                </tr>
                <tr>
                  <td>Rejected Votes</td>
                  {this.rejectedVotes('G', 'G4')}
                  {this.rejectedVotesBySection('G', 'G4', 'A-C')}
                  {this.rejectedVotesBySection('G', 'G4', 'D-G')}
                  {this.rejectedVotesBySection('G', 'G4', 'H-JOH')}
                  {this.rejectedVotesBySection('G', 'G4', 'JON-L')}
                  {this.rejectedVotesBySection('G', 'G4', 'M-R')}
                  {this.rejectedVotesBySection('G', 'G4', 'S-Z')}
                </tr>
                <tr>
                  <td>Votes Cast</td>
                  {this.votesCast('G', 'G4')}
                  {this.votesCastBySection('G', 'G4', 'A-C')}
                  {this.votesCastBySection('G', 'G4', 'D-G')}
                  {this.votesCastBySection('G', 'G4', 'H-JOH')}
                  {this.votesCastBySection('G', 'G4', 'JON-L')}
                  {this.votesCastBySection('G', 'G4', 'M-R')}
                  {this.votesCastBySection('G', 'G4', 'S-Z')}
                </tr>
                <tr>
                  <td>Registered Voters</td>
                  {this.registeredVoters('G', 'G4')}
                  {this.registeredVotersBySection('G', 'G4', 'A-C')}
                  {this.registeredVotersBySection('G', 'G4', 'D-G')}
                  {this.registeredVotersBySection('G', 'G4', 'H-JOH')}
                  {this.registeredVotersBySection('G', 'G4', 'JON-L')}
                  {this.registeredVotersBySection('G', 'G4', 'M-R')}
                  {this.registeredVotersBySection('G', 'G4', 'S-Z')}
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
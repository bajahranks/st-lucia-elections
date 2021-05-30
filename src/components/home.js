import React, { Component } from "react";
import ResultDataService from "../services/result";
import Link from "react-router-dom/Link";
import Table from "react-bootstrap/Table"
import Loader from "react-loader-spinner";

export default class Home extends Component {
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

  votesPerc(votes, votesCast) {
    return Math.round((votes/votesCast) * 100)
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

  votes(districtCode, candidateNumber) {
    let votes = 0;
    let votesCast = 0;

    this.state.results && this.state.results.forEach(result => {
      if (result.district.code === districtCode) {

        switch (candidateNumber) {
          case 1: votes += result.candidate1Votes; break;
          case 2: votes += result.candidate2Votes; break;
          case 3: votes += result.candidate3Votes; break;
          case 4: votes += result.candidate4Votes; break;
          case 5: votes += result.candidate5Votes; break;
          case 6: votes += result.candidate6Votes; break;
          default:
        }
        votesCast += result.votesCast;
      }
    })

    return (
      <>
        <td>{votes}</td>
        <td>{this.votesPerc(votes, votesCast)}</td>
      </>

    )
  }

  totalVotes(candidateNumber){
    let votes = 0;
    let votesCast = 0;

    this.state.results && this.state.results.forEach(result => {
      switch (candidateNumber) {
        case 1: votes += result.candidate1Votes; break;
        case 2: votes += result.candidate2Votes; break;
        default:
      }
      votesCast += result.votesCast;
    })

    return (
      <>
        <p className="lead">Votes {votes} ({this.votesPerc(votes, votesCast)}%)</p>
      </>
    )
  }

  render() {
    return (
      <>
        <Loader
          type={"MutatingDots"}
          color={"Yellow"}
          secondaryColor={"Red"}
          visible={this.state.isLoading}
        />
        <section>
          <div className={"text-center font-weight-bold"}>
            <h1>St. Lucia Election Results 2016</h1>
            Seats <span>(9 to win)</span></div>
          <div className={"row"}>
            <div className={"h-100 p-5 border rounded-3 col-sm-12 col-md-6 bg-warning text-black display-4"}>
              <div>UWP <span className={"float-inline-end"}>11</span>
                {this.totalVotes(2)}
              </div>
            </div>
            <div className={"h-100 p-5 border rounded-3 col-sm-12 col-md-6 bg-danger text-white display-4"}>
              <div>SLP <span className={"float-inline-end"}>6</span></div>
              {this.totalVotes(1)}
            </div>
          </div>
        </section>
        <section className={"container"}>
          <div className={"row"}>
            {/* Anse-La-Raye/Canaries */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-anse-la-raye-canaries"} className="nav-link">
                    Anse-La-Raye/Canaries
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>J. Victorin</td>
                    <td>SLP</td>
                    {this.votes('G', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>D. Fedee</td>
                    <td>UWP</td>
                    {this.votes('G', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Babonneau */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-babonneau"} className="nav-link">
                    Babonneau
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>A. Reynolds</td>
                    <td>SLP</td>
                    {this.votes('B', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>E. Joseph</td>
                    <td>UWP</td>
                    {this.votes('B', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Castries Central */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-castries-central"} className="nav-link">
                    Castries Central
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>S. Felix</td>
                    <td>SLP</td>
                    {this.votes('E', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>S. Flood-Beaubrun</td>
                    <td>UWP</td>
                    {this.votes('E', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>T. James</td>
                    <td>INDEP</td>
                    {this.votes('E', 5)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Castries East */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-castries-east"} className="nav-link">
                    Castries East
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>P. Pierre</td>
                    <td>SLP</td>
                    {this.votes('D', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>F. Belrose</td>
                    <td>UWP</td>
                    {this.votes('D', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Castries North */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-castries-north"} className="nav-link">
                    Castries North
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>S. Charlery</td>
                    <td>SLP</td>
                    {this.votes('C', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>S. King</td>
                    <td>UWP</td>
                    {this.votes('C', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Castries South */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-castries-south"} className="nav-link">
                    Castries South
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>E. Hiliare</td>
                    <td>SLP</td>
                    {this.votes('F', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>M. Isaac</td>
                    <td>UWP</td>
                    {this.votes('F', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Castries South East */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-castries-south-east"} className="nav-link">
                    Castries South East
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>J. Henry</td>
                    <td>SLP</td>
                    {this.votes('Q', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>G. Joseph</td>
                    <td>UWP</td>
                    {this.votes('Q', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Choiseul */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-choiseul"} className="nav-link">
                    Choiseul
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>L. Theophilus</td>
                    <td>SLP</td>
                    {this.votes('I', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>B. Felix</td>
                    <td>UWP</td>
                    {this.votes('I', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Dennery North */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-dennery-north"} className="nav-link">
                    Dennery North
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>S. Edward</td>
                    <td>SLP</td>
                    {this.votes('P', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>H. Jimmy</td>
                    <td>UWP</td>
                    {this.votes('P', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Dennery South */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-dennery-south"} className="nav-link">
                    Dennery South
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>J. Gedeon</td>
                    <td>SLP</td>
                    {this.votes('O', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>E. Estephane</td>
                    <td>UWP</td>
                    {this.votes('O', 2)}
                  </tr>
                  <tr>
                    <td className={"indep-border"}>C. Celestin</td>
                    <td>INDEP</td>
                    {this.votes('O', 5)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Gros Islet */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-gros-islet"} className="nav-link">
                    Gros Islet
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>E. Hippolyte</td>
                    <td>SLP</td>
                    {this.votes('A', 1)}
                  </tr>
                  <tr>
                    <td className={"uwp-border"}>L. Montoute</td>
                    <td>UWP</td>
                    {this.votes('A', 2)}
                  </tr>
                  <tr>
                    <td className={"lpm-border"}>T. Prudent</td>
                    <td>LPM</td>
                    {this.votes('A', 3)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Laborie */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-laborie"} className="nav-link">
                    Laborie
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>A. Baptiste</td>
                    <td>SLP</td>
                    {this.votes('J', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>F. Jean Pierre</td>
                    <td>UWP</td>
                    {this.votes('J', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Micoud North */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-micoud-north"} className="nav-link">
                    Micoud North
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>H. Roserie</td>
                    <td>SLP</td>
                    {this.votes('N', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>G. Rigobert</td>
                    <td>UWP</td>
                    {this.votes('N', 2)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>J. Compton-Antoine</td>
                    <td>INDEP</td>
                    {this.votes('N', 5)}
                  </tr>
                  <tr className={"indep-border"}>
                    <td>M. Alexander</td>
                    <td>INDEP</td>
                    {this.votes('N', 6)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Micoud South */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-micoud-south"} className="nav-link">
                    Micoud South
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>G. Ferdinand</td>
                    <td>SLP</td>
                    {this.votes('M', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>A. Chastanet</td>
                    <td>UWP</td>
                    {this.votes('M', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Soufriere */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-soufriere"} className="nav-link">
                    Soufriere
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>H. Dalson</td>
                    <td>SLP</td>
                    {this.votes('H', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>H. Stanislaus</td>
                    <td>UWP</td>
                    {this.votes('H', 2)}
                  </tr>
                  <tr className={"lg-border"}>
                    <td>S. Gajadhar</td>
                    <td>LG</td>
                    {this.votes('H', 4)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Vieux-Fort North */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-vieux-fort-north"} className="nav-link">
                    Vieux-Fort North
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>M. Jn. Baptiste</td>
                    <td>SLP</td>
                    {this.votes('L', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>P. Ambrose</td>
                    <td>UWP</td>
                    {this.votes('L', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* Vieux-Fort South */}
            <div className={"col-sm-12 col-md-6"}>
              <div className={"district-results"}>
                <h3 className={"text-center"}>
                  <Link to={"/2016-vieux-fort-south"} className="nav-link">
                    Vieux-Fort South
                  </Link>
                </h3>
                <Table className="table-sm">
                  <caption>100% reporting</caption>
                  <thead>
                  <tr>
                    <th scope="col">Candidates</th>
                    <th scope="col">Party</th>
                    <th scope="col">Votes</th>
                    <th scope="col">%</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={"slp-border"}>
                    <td>K. Anthony</td>
                    <td>SLP</td>
                    {this.votes('K', 1)}
                  </tr>
                  <tr className={"uwp-border"}>
                    <td>U. Mondesir</td>
                    <td>UWP</td>
                    {this.votes('K', 2)}
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
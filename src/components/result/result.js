import React, { Component } from "react";
import ResultDataService from "../../services/result";
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchYear = this.onChangeSearchYear.bind(this);
    this.retrieveResults = this.retrieveResults.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveResult = this.setActiveResult.bind(this);
    this.removeAllResults = this.removeAllResults.bind(this);
    this.searchYear = this.searchYear.bind(this);
    this.deleteResult = this.deleteResult.bind(this);
    this.editResult = this.editResult.bind(this);
    this.state = {
      results: [],
      currentResult: null,
      searchYear: "",
      isLoading: true
    };
  }


  // Load results when component is rendered.
  componentDidMount() {
    this.retrieveResults();
  }

  onChangeSearchYear(e) {
    const searchYear = e.target.value;

    this.setState({
      searchYear: searchYear
    });
  }

  editResult(id) {
    ResultDataService.get(id)
      .then()
      .catch(e => { console.log(e) });
  }

  retrieveResults() {
    ResultDataService.getAll()
      .then(response => {
        this.setState({
          results: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrieveResults();
    this.setState({
      currentResult: null,
    });
  }

  setActiveResult(result, index) {
    this.setState({
      currentResult: result,
    });
  }

  deleteResult(id) {
    ResultDataService.delete(id)
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllResults() {
    ResultDataService.deleteAll()
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchYear() {
    ResultDataService.findByYear(this.state.searchYear)
      .then(response => {
        this.setState({
          results: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const {results} = this.state;

    return (
      <section className={"ml-1 mr-1"}>
        <Link
          to={"/add-result/"}
          title={"Add Result"}
          aria-label={"Add Result"}
          className={"btn btn-primary mb-2"}
        ><span className={"mr-half"}>Add Result</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
        </Link>
        <MaterialTable
          isLoading={this.state.isLoading}
          title={"St. Lucia Election Data"}
          columns={[
            { field: '_id',  hidden: true },
            { title: 'Year', field: 'year', type: 'numeric'},
            { title: 'District', field: 'district.name' },
            { title: 'Polling Station', field: 'pollingStation.name' },
            { title: 'Section', field: 'section.name' },
            { title: 'Candidate', field: 'candidate1.name', tooltip: 'SLP' },
            {/* title: 'Party', field: 'candidate1Party.abbreviation' */},
            { title: 'Votes', field: 'candidate1Votes' },
            { title: 'Candidate', field: 'candidate2.name', tooltip: 'UWP' },
            {/* title: 'Party', field: 'candidate2Party.abbreviation' */},
            { title: 'Votes', field: 'candidate2Votes' },
            { title: 'Reg. Voters', field: 'registeredVoters' },
            { title: 'Votes Cast', field: 'votesCast' },
            { title: 'Rej. Votes', field: 'rejectedVotes' }
          ]}
          data={results}
          actions={[
            rowData => (
              {
                icon: () => <Link to={"/results/" + rowData._id} className="btn btn-sm btn-success mr-2" title="Edit" aria-label={"Edit"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                       className="bi bi-pencil" viewBox="0 0 16 16">
                    <path
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </Link>,
                tooltip: 'Edit',
                iconProps: { color: 'primary' },
                onClick: (rowData)
              }),
            {
              icon: 'delete',
              tooltip: 'Delete',
              iconProps: { color: 'error' },
              onClick: (event, rowData) => this.deleteResult(rowData._id)
            }
          ]}
          options={{
            filtering: true,
            exportButton: true,
            padding: 'dense',
            pageSize: 10
          }}
        />
      </section>
    )
  }
}

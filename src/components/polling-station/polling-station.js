import React, { Component } from "react";
import PollingStationDataService from "../../services/polling-station";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import {getToken, getUserFromToken} from "../../helpers/util";
import {Button, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";

export default class PollingStation extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrievePollingStations = this.retrievePollingStations.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.removeAllPollingStations = this.removeAllPollingStations.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deletePollingStation = this.deletePollingStation.bind(this);

    this.state = {
      pollingStations: [],
      searchName: "",
      isLoading: true
    };
  }

  // Load pollingStations when component is rendered.
  componentDidMount() {
    this.retrievePollingStations();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrievePollingStations() {
    PollingStationDataService.getAll()
      .then(response => {
        this.setState({
          pollingStations: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrievePollingStations();
  }

  deletePollingStation(id) {
    PollingStationDataService.delete(id, getToken())
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllPollingStations() {
    PollingStationDataService.deleteAll(getToken())
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    PollingStationDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          pollingStations: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const { searchName, pollingStations } = this.state;
    const user = getUserFromToken();

    return (
      <Container>
        <Row>
          <Col md={"8"}>
            <h4>Polling Station List</h4>
            <InputGroup className="mb-3">
              <FormControl
                placeholder={"Search by Name"}
                aria-label={"Search by Name"}
                value={searchName}
                onChange={this.onChangeSearchName}
              />
              <Button variant={"outline-secondary"} onClick={this.searchName}>
                Search
              </Button>
            </InputGroup>
            {(user && user.role === 'Admin') &&
              <>
                <Link
                  to={"/add-polling-station/"}
                  title={"Add Polling Station"}
                  aria-label={"Add Polling Station"}
                  className={"btn btn-primary mb-2 mr-half"}
                ><span className={"mr-half"}>Add Polling Station</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                  </svg>
                </Link>
                <Button variant={"danger"} className="mb-2" onClick={this.removeAllPollingStations}>
                  Remove All
                </Button>
              </>
              }
              <ListGroup as={"ul"}>
                <Loader
                  type={"MutatingDots"}
                  color={"Yellow"}
                  secondaryColor={"Red"}
                  visible={this.state.isLoading}
                />
                { pollingStations && pollingStations.map((pollingStation, index) => (
                  <ListGroup.Item as={"li"} key={index}>
                    {pollingStation.name} | {pollingStation.code} | {pollingStation.district.name}
                    <hr />
                    <span className="block-display">
                      {(user && (user.role === 'Admin' || user.role === 'Staff')) &&
                        <Link to={"/polling-stations/" + pollingStation._id} className="btn btn-success mr-half">
                          Edit
                        </Link>
                      }
                      {user && (user.role === 'Admin') &&
                        <Button variant={"danger"} className="mr-half" onClick={() => this.deletePollingStation(pollingStation._id)}>
                          Delete
                        </Button>
                      }
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

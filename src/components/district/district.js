import React, { Component } from 'react';
import DistrictDataService from '../../services/district';
import Link from 'react-router-dom/Link';
import Loader from 'react-loader-spinner';
import { Accordion, Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { getToken, getUserFromToken } from '../../helpers/util';

export default class District extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.removeAllDistricts = this.removeAllDistricts.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteDistrict = this.deleteDistrict.bind(this);

    this.state = {
      districts: [],
      searchName: "",
      isLoading: true
    };
  }

  // Load districts when component is rendered.
  componentDidMount() {
    this.retrieveDistricts();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  refreshList() {
    this.retrieveDistricts();
  }

  deleteDistrict(id) {
    DistrictDataService.delete(id, getToken())
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllDistricts() {
    DistrictDataService.deleteAll(getToken())
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    DistrictDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          districts: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const { searchName, districts } = this.state;
    const user = getUserFromToken();

    return (
      <Container>
        <Row>
          <Col md={'4'}>
            <InputGroup className={"mb-3"}>
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
                  to={"/add-district/"}
                  title={"Add District"}
                  aria-label={"Add District"}
                  className={"btn btn-primary mb-2 mr-half"}
                ><span className={"mr-half"}>Add District</span>
                  <svg xmlns={'http://www.w3.org/2000/svg'} width={'16'} height={'16'} fill={'currentColor'}
                       className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path
                      d={'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z'}/>
                  </svg>
                </Link>
                <Button variant={"danger"} className={"mb-2"} onClick={this.removeAllDistricts}>
                  Remove All
                </Button>
              </>
            }
          </Col>
          <Col md={'6'}>
            <h4>District List</h4>
            <Loader
              type={"MutatingDots"}
              color={"Yellow"}
              secondaryColor={"Red"}
              visible={this.state.isLoading}
            />
            <Accordion>
              { districts && districts.map((district, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{district.name}</Accordion.Header>
                  <Accordion.Body>
                    <p><strong>Code:</strong>{" "} {district.code}</p>
                    <p><strong>Description:</strong>{" "} {district.description}</p>
                    { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                      <Link to={"/districts/" + district._id} className={'btn btn-success mr-half'}>
                        Edit
                      </Link>
                    }
                    { (user && user.role === 'Admin') &&
                      <Button variant={"danger"} className={"mr-half"} onClick={() => this.deleteDistrict(district._id)}>
                        Delete
                      </Button>
                    }
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}

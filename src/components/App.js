import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/App.css";
import AddParty from "./party/add-party";
import Party from "./party/party";
import EditParty from "./party/edit-party";
import AddDistrict from "./district/add-district";
import District from "./district/district";
import EditDistrict from "./district/edit-district";
import AddPollingStation from "./polling-station/add-polling-station";
import PollingStation from "./polling-station/polling-station";
import EditPollingStation from "./polling-station/edit-polling-station";
import AddSection from "./section/add-section";
import Section from "./section/section";
import EditSection from "./section/edit-section";
import AddCandidate from "./candidate/add-candidate";
import Candidate from "./candidate/candidate";
import EditCandidate from "./candidate/edit-candidate";
import AddResult from "./result/add-result";
import Result from "./result/result";
import EditResult from "./result/edit-result";
import Home from "./home";
import AnseLaRayeCanaries2016 from "./2016/2016-Anse-La-Raye-Canaries";
import Babonneau2016 from "./2016/2016-Babonneau";
import CastriesCentral2016 from "./2016/2016-Castries-Central";
import CastriesEast2016 from "./2016/2016-Castries-East";
import CastriesNorth2016 from "./2016/2016-Castries-North";
import CastriesSouth2016 from "./2016/2016-Castries-South";
import CastriesSouthEast2016 from "./2016/2016-Castries-South-East";
import Choiseul2016 from "./2016/2016-Choiseul";
import Laborie2016 from "./2016/2016-Laborie";
import DenneryNorth2016 from "./2016/2016-Dennery-North";
import DennerySouth2016 from "./2016/2016-Dennery-South";
import GrosIslet2016 from "./2016/2016-Gros-Islet";
import MicoudSouth2016 from "./2016/2016-Micoud-South";
import VieuxFortNorth2016 from "./2016/2016-Vieux-Fort-North";
import VieuxFortSouth2016 from "./2016/2016-Vieux-Fort-South";
import Soufriere2016 from "./2016/2016-Soufriere";
import MicoudNorth2016 from "./2016/2016-Micoud-North";
import Login from "./login";
import Register from "./register";
import Nav from "./nav";
import Logout from "./logout";
import PrivateRoute from "../helpers/privateRoutes";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {<Route exact path={["/", "/home"]} component={Home} />}
          {<Route exact path={"/2016-anse-la-raye-canaries"} component={AnseLaRayeCanaries2016} />}
          {<Route exact path={"/2016-babonneau"} component={Babonneau2016} />}
          {<Route exact path={"/2016-castries-central"} component={CastriesCentral2016} />}
          {<Route exact path={"/2016-castries-east"} component={CastriesEast2016} />}
          {<Route exact path={"/2016-castries-north"} component={CastriesNorth2016} />}
          {<Route exact path={"/2016-castries-south"} component={CastriesSouth2016} />}
          {<Route exact path={"/2016-castries-south-east"} component={CastriesSouthEast2016} />}
          {<Route exact path={"/2016-choiseul"} component={Choiseul2016} />}
          {<Route exact path={"/2016-laborie"} component={Laborie2016} />}
          {<Route exact path={"/2016-dennery-north"} component={DenneryNorth2016} />}
          {<Route exact path={"/2016-dennery-south"} component={DennerySouth2016} />}
          {<Route exact path={"/2016-gros-islet"} component={GrosIslet2016} />}
          {<Route exact path={"/2016-micoud-south"} component={MicoudSouth2016} />}
          {<Route exact path={"/2016-vieux-fort-north"} component={VieuxFortNorth2016} />}
          {<Route exact path={"/2016-vieux-fort-south"} component={VieuxFortSouth2016} />}
          {<Route exact path={"/2016-soufriere"} component={Soufriere2016} />}
          {<Route exact path={"/2016-micoud-north"} component={MicoudNorth2016} />}
          {<Route exact path="/parties" component={Party} />}
          {<Route exact path="/results" component={Result} />}
          {<Route exact path="/candidates" component={Candidate} />}
          {<Route exact path="/districts" component={District} />}
          {<Route exact path="/polling-stations" component={PollingStation} />}
          {<PrivateRoute exact path="/sections" component={Section} />}
          {<Route exact path="/add-party" component={AddParty} />}
          {<Route exact path="/add-result" component={AddResult} />}
          {<Route exact path="/add-candidate" component={AddCandidate} />}
          {<Route exact path="/add-district" component={AddDistrict} />}
          {<Route exact path="/add-polling-station" component={AddPollingStation} />}
          {<Route exact path="/add-section" component={AddSection} />}
          {<Route path="/parties/:id" component={EditParty} />}
          {<Route path="/results/:id" component={EditResult} />}
          {<Route path="/candidates/:id" component={EditCandidate} />}
          {<Route path="/districts/:id" component={EditDistrict} />}
          {<Route path="/polling-stations/:id" component={EditPollingStation} />}
          {<Route path="/sections/:id" component={EditSection} />}
          {<Route exact path="/login" component={Login} />}
          {<Route exact path="/register" component={Register} />}
          {<Route exact path="/logout" component={Logout} />}
        </Switch>
      </Router>
    );
  }
}

export default App;

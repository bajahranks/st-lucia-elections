import {Switch, Route} from "react-router-dom";
import District from "./district/district";
//import PrivateRoute from "../helpers/privateRoutes";
import EditSection from "./section/edit-section";
import EditPollingStation from "./polling-station/edit-polling-station";
import EditDistrict from "./district/edit-district";
import EditCandidate from "./candidate/edit-candidate";
import EditResult from "./result/edit-result";
import EditParty from "./party/edit-party";
import AddSection from "./section/add-section";
import AddPollingStation from "./polling-station/add-polling-station";
import AddDistrict from "./district/add-district";
import AddCandidate from "./candidate/add-candidate";
import AddResult from "./result/add-result";
import AddParty from "./party/add-party";
import Section from "./section/section";
import PollingStation from "./polling-station/polling-station";
import Candidate from "./candidate/candidate";
import Result from "./result/result";
import Party from "./party/party";
import MicoudNorth2016 from "./2016/2016-Micoud-North";
import Soufriere2016 from "./2016/2016-Soufriere";
import VieuxFortSouth2016 from "./2016/2016-Vieux-Fort-South";
import VieuxFortNorth2016 from "./2016/2016-Vieux-Fort-North";
import MicoudSouth2016 from "./2016/2016-Micoud-South";
import GrosIslet2016 from "./2016/2016-Gros-Islet";
import DennerySouth2016 from "./2016/2016-Dennery-South";
import DenneryNorth2016 from "./2016/2016-Dennery-North";
import Laborie2016 from "./2016/2016-Laborie";
import Choiseul2016 from "./2016/2016-Choiseul";
import CastriesSouthEast2016 from "./2016/2016-Castries-South-East";
import CastriesSouth2016 from "./2016/2016-Castries-South";
import CastriesNorth2016 from "./2016/2016-Castries-North";
import CastriesEast2016 from "./2016/2016-Castries-East";
import CastriesCentral2016 from "./2016/2016-Castries-Central";
import Babonneau2016 from "./2016/2016-Babonneau";
import AnseLaRayeCanaries2016 from "./2016/2016-Anse-La-Raye-Canaries";
import Home from "./home";

const MyRoutes = () => {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path={"/2016-anse-la-raye-canaries"} component={AnseLaRayeCanaries2016} />
      <Route exact path={"/2016-babonneau"} component={Babonneau2016} />
      <Route exact path={"/2016-castries-central"} component={CastriesCentral2016} />
      <Route exact path={"/2016-castries-east"} component={CastriesEast2016} />
      <Route exact path={"/2016-castries-north"} component={CastriesNorth2016} />
      <Route exact path={"/2016-castries-south"} component={CastriesSouth2016} />
      <Route exact path={"/2016-castries-south-east"} component={CastriesSouthEast2016} />
      <Route exact path={"/2016-choiseul"} component={Choiseul2016} />
      <Route exact path={"/2016-laborie"} component={Laborie2016} />
      <Route exact path={"/2016-dennery-north"} component={DenneryNorth2016} />
      <Route exact path={"/2016-dennery-south"} component={DennerySouth2016} />
      <Route exact path={"/2016-gros-islet"} component={GrosIslet2016} />
      <Route exact path={"/2016-micoud-south"} component={MicoudSouth2016} />
      <Route exact path={"/2016-vieux-fort-north"} component={VieuxFortNorth2016} />
      <Route exact path={"/2016-vieux-fort-south"} component={VieuxFortSouth2016} />
      <Route exact path={"/2016-soufriere"} component={Soufriere2016} />
      <Route exact path={"/2016-micoud-north"} component={MicoudNorth2016} />
      <Route exact path="/parties" component={Party} />
      <Route exact path="/results" component={Result} />
      <Route exact path="/candidates" component={Candidate} />
      <Route exact path="/districts" component={District} />
      <Route exact path="/polling-stations" component={PollingStation} />
      <Route exact path="/sections" component={Section} />
      <Route exact path="/add-party" component={AddParty} />
      <Route exact path="/add-result" component={AddResult} />
      <Route exact path="/add-candidate" component={AddCandidate} />
      <Route exact path="/add-district" component={AddDistrict} />
      <Route exact path="/add-polling-station" component={AddPollingStation} />
      <Route exact path="/add-section" component={AddSection} />
      <Route path="/parties/:id" component={EditParty} />
      <Route path="/results/:id" component={EditResult} />
      <Route path="/candidates/:id" component={EditCandidate} />
      <Route path="/districts/:id" component={EditDistrict} />
      <Route path="/polling-stations/:id" component={EditPollingStation} />
      <Route path="/sections/:id" component={EditSection} />
    </Switch>
  )
}

export default MyRoutes;
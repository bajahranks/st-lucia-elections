import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./nav";
import District from "./district/district";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        {<Route exact path="/districts" component={District} />}
      </Switch>
    </Router>
  );
}

export default App;

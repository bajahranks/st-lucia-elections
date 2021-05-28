import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./nav";
import MyRoutes from "./myRoutes";

const App = () => {
  return (
    <Router>
      <Navigation />
      <MyRoutes />
    </Router>
  );
}

export default App;

import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./nav";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;

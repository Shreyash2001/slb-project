import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Crew from "./Crew";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/crew">
          <Layout child={<Crew />} />
        </Route>
        <Route path="/">
          <Layout child={<Home />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

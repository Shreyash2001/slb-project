import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import MaterialTable from "./MaterialTable";
import Crew from "./Crew";
import Dashboard from "./Dashboard";
import Risk from "./Risk";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/risk">
          <Layout child={<Risk />} />
        </Route>
        <Route path="/dashboard">
          <Layout child={<Dashboard />} />
        </Route>
        <Route path="/material">
          <Layout child={<MaterialTable />} />
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

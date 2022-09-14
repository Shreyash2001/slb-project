import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import MaterialTable from "./MaterialTable";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/material">
          <Layout child={<MaterialTable />} />
        </Route>
        <Route path="/">
          <Layout child={<Home />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

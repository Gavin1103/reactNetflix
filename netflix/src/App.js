import './App.scss';
import './Mediaqry.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Row from './components/Row';
import Login from './components/Login';
// import VerderKijkenRow from './components/VerderKijken';
// import Sidebar from './components/Sidebar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="App">

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/homepage">
            <Nav />
            <Header />
            <Row />
          </Route>
        </Switch>

        <Switch>
          <Route exact path='/anime'>
            <Row />
          </Route>
        </Switch>




      </div>
    </Router >
  );
}

export default App;

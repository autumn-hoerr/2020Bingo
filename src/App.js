import logo from './logo.svg';
import './app.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './game';
import Admin from './admin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Game />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;

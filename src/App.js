import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BackCase from './components/backCase';
import Signup from './components/Signup';
import ScreenProtector from './components/screenprotector';
import Login from './components/signin';
import Home from './components/home';

function App() {
 
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/signup">
          <Signup/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/screenprotector">
          <ScreenProtector/>
        </Route>

        <Route path="/backcase">
          <BackCase/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

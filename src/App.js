import {SegurancaProvider} from './context/context'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RoutePrivate from './components/RoutePrivate';
import Details from './pages/details';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register';


function App() {
  return (
    <SegurancaProvider>
      <Router>
        <Switch>
          <RoutePrivate path="/home" component={Home}/>
          <RoutePrivate path="/details" component={Details}/>
          <Route path="/login"><Login/></Route>
          <Route path="/register"><Register/></Route>

        </Switch>
      </Router>
    </SegurancaProvider>
  );
}

export default App;
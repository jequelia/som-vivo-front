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
import Email from './components/password';
import RecuperarSenha from './components/recuperar-senha/';

require('dotenv').config()

function App() {
  return (
    <SegurancaProvider>
      <Router>
        <Switch>
          <RoutePrivate path="/home" component={Home}/>
          <RoutePrivate path="/details/:id+" component={Details}/>
          <Route path="/"><Login/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/register"><Register/></Route>
          <Route path="/recuperar-senha/:id+"><RecuperarSenha/></Route>
          <Route path="/recuperar-senha"><Email/></Route>


        </Switch>
      </Router>
    </SegurancaProvider>
  );
}

export default App;
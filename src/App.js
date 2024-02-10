import './App.css';
import { Switch,BrowserRouter, Route } from 'react-router-dom'
import Login from './component/Login';
import Home from "./component/Home"
import Hostels from "./component/Hostels"

const App=()=> {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/hostels" component={Hostels}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

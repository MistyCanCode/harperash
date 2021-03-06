
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './Home/home';
import Pricing from './Pricing/pricing';
import Stylists from './Stylists/stylists';
import Site from './Site/site';
import Appointments from './Appointments/appointments';
import Inspiration from './Inspiration/inspiration';


const App = () => {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  </style>

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/site' component={Site} />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/stylists' component={Stylists} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/appointments' component={Appointments} />
        <Route path='/inspiration' component={Inspiration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

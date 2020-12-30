import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from "./components/PrivateRoute";
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Team from './components/Team';
import About from './components/About';
import Users from './components/Users';
import VolunteerPickup from './components/VolunteerPickup';
import VolunteerList from './components/VolunteerList';
import DonorsFood from './components/DonorsFood';
import DonorList from './components/DonorList';
import FoodItems from './food/FoodItems';
import { connect } from "react-redux";
import './App.css';
import './VolDonor.css';
import './design.css';
import Design from './components/Design';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/design' component={Design} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/teamup' component={Team} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/foodItems' component={FoodItems} />
          <Route exact path='/register' component={Registration} />
          <PrivateRoute exact path='/users' component={Users} />
          <PrivateRoute exact path='/volunteerPickup' component={VolunteerPickup} />
          <PrivateRoute exact path='/volunteerList' component={VolunteerList} />
          <PrivateRoute exact path='/donorsFood' component={DonorsFood} />
          <PrivateRoute exact path='/donorList' component={DonorList} />
          <Route path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.user.id,
  };
};

export default connect(mapStateToProps, {})(App);

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './Components/About/About';
import TimeTable from './Components/Appoinment/TimeTable';
import Services from './Components/Services/Services';
import Services2 from './Components/Services/Services2';
import Services3 from './Components/Services/Services3';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/login/Login'
import Signup from './Components/SignUp/SignUp'
import Private from "./Components/PrivateRoute/PrivateRoute"
import Appnt from "./Components/Appointment/Appointment"







const App = () => {


  return (
    <>
   
      <Router>
      <Navbar></Navbar>
        

          <Switch>
            <Route exact path="/">
              <Header></Header>
            </Route>
             <Route exact path="/home">
              <Header></Header>
            </Route>

            <Route  exact path="/about">
              <About/>

            </Route>
            
            <Route  exact path="/services">
              <Services/>

            </Route>
            
           
            <Private  exact path="/appointment">
             <Appnt></Appnt>

            </Private>
            <Private  exact path="/services3">
             <Services3></Services3>

            </Private>

            <Route  exact path="/time_table">
              <TimeTable/>

            </Route>
            <Route  exact path="/login">
              <Login/>

            </Route>
            <Route  exact path="/signup">
              <Signup/>

            </Route>

           
            <Route   path="">
              <Signup/>

            </Route>
          

          </Switch>
          <Footer></Footer>
        
      </Router>
     
      </>

    
  );
};

export default App;


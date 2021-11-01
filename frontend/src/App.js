import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Student } from "./components/Student";
import { Manage} from "./components/Manage";


import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="container">
     <Navigation />
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/student" component={Student} />
         <Route path="/manage" component={Manage} />


       </Switch>

       

  
    </div>
    
    </BrowserRouter>
    

  );
}

export default App;

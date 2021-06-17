import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import "./App.css";
import { Customers } from "./Customers";
import Transactions from "./Transactions";
import HomePageHeader from "./HomePageHeader";

function App() {
  return (
    <Router>
      <HomePageHeader/>
    <div className="App">
    <Route exact path = "/" component = {Customers}/>
    <Route path = "/transactions" component = {Transactions}/>
   </div>
   </Router>
 );
}

export default App
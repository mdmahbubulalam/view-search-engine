import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import SearchList from './components/SearchList/SearchList';
import NotFound from './components/NotFound/NotFound';
import GoogleCustomSearch from './components/GoogleCustomSearch/GoogleCustomSearch';



function App() {
  return (
    <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/googleCustomSearch">
        <GoogleCustomSearch />
      </Route>
      <Route path="/searchList/q=:searchValue">
        <SearchList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </Router>
  
  );
}

export default App;

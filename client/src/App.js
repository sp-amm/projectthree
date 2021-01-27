import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Loading, NavBar } from "./components";
import { Profile, Home, Sell } from "./pages";

import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();
  if(isLoading){
    return<Loading />;
  }
  return (
      <div className="App d-flex flex-column h-100">
      <NavBar/>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/sell" component={Sell} />
      </Switch>
      </Container>
      </div>
  );
}

export default App;

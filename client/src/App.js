import React, { Component } from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./components/Home.js";
import Jokes from "./components/Jokes.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dad Jokes Central</h1>
        <NavLink to="/" exact>
          <button>Home</button>
        </NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/api/jokes">
          <button>Jokes</button>
        </NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/api/login">
          <button>Signin</button>
        </NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/api/register">
          <button>Signup</button>
        </NavLink>
        &nbsp; | &nbsp;
        <button onClick={this.signOut}>Signout</button>
        <Route path="/" component={Home} exact />
        <Route path="/api/jokes" component={Jokes} />
        <Route path="/api/login" render={() => <Login {...this.props} />} />
        <Route
          path="/api/register"
          render={() => <Register {...this.props} />}
        />
        <GlobalStyle />
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0;
    font-size: 62.5%;
    border: 1px solid black;
    text-align: center;
  }
  h1 {
    font-size: 3.2rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  p, a, input, label, form {
    font-size: 1.6rem;
  }
`;

export default withRouter(App);

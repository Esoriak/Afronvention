import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Screen/Home'
import Random from './Screen/Random'
import Login from './Screen/Login'

// import './Screen/Home.css'

function App() {
  return (
    <>
    <div className="fullscreen">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Login} />
          <Route path="/random" component={Random} />
          {/* <Route path="/submit" component={} /> */}
        </Switch>
    </div>
        </>
  );
}

export default App;

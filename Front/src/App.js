import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Screen/Home'
import Random from './Screen/Random'

// import './Screen/Home.css'

function App() {
  return (
    <>
    <div className="fullscreen">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/random" component={Random} />
        </Switch>
    </div>
        </>
  );
}

export default App;

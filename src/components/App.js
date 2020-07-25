import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './NavBar';
import Homepage from './Homepage';

function App({ projects, testimonials }) {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Homepage
            projects={projects}
            testimonials={testimonials}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

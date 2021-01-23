import React from 'react'
import Home from './containers/Home'
import Reviews from './containers/Reviews'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  const history = useHistory();
  return (
    <div className='App'>
      <Router>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={3000}
            classNames='fade'
           >
          <Switch location={location}>
            <Route exact path ="/reviews" component={Reviews} history={history}/>
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
          </CSSTransition>
          </TransitionGroup>
      )}/>
      </Router>
      </div>
  );
}

export default App;

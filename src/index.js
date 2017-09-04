import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import DataContainer from './components/dataContainer/dataContainer';


const App = () => {
  return (
    <Router>
	    <div>
        <Route
          path='/world'
          render={() => (
            <DataContainer desk="Foreign" />
          )}
        />
        <Route
          exact path="/"
          render={() => (
            <DataContainer desk="" />
          )}
        />
        <Route
          path='/us'
          render={() => (
            <DataContainer desk="U.S" />
          )}
        />
        <Route
          path='/politics'
          render={() => (
            <DataContainer desk="Politics" />
          )}
        />
        <Route
          path='/science'
          render={() => (
            <DataContainer desk="Science" />
          )}
        />
        <Route
          path='/sports'
          render={() => (
            <DataContainer desk="Sports" />
          )}
        />
	    </div>
	</Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

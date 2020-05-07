import React from 'react';
import './App.css';
import ProfileScreen from './screens/ProfileScreen';
import NotifScreen from './screens/NotifScreen';
import TaskScreen from './screens/TaskScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const prof = {};

function App() {

  React.useEffect(() => {
      let url = "http://localhost:3001/notes"
      fetch(url).then(res => res.json())
      .then(res => prof=res[0]);
  }, [])


  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/task1">
            <TaskScreen task={1} />
          </Route>
          <Route path="/task2">
            <TaskScreen task={2} />
          </Route>
          <Route path="/notifications">
            <NotifScreen />
          </Route>
          <Route path="/">
            <ProfileScreen prof={prof} />
          </Route>
        </Switch>
    </div>
    
    </Router>
  );
}

export default App;

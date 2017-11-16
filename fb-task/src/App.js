import React, { Component } from 'react';
import NewTaskForm from "./components/NewTaskForm"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

// NewTaskForm
// TaskList
// PurgeButton
class App extends Component {
   
  render() {
    let tasksRef = firebase.database().ref("tasks");
    return (
      <div>
      <div className="jumbotron bg-dark text-white">
        <div className="container">
          <h1 className="display-3">Task343</h1>
        </div>
        
      </div>
      <div className = "container">
      <section>
          {
            <NewTaskForm tasksRef = {tasksRef} />
            //tasks here
          }
        </section>
        </div>
      </div>
    );
  }
}

export default App;

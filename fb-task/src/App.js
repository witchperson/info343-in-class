import React, { Component } from 'react';
import NewTaskForm from "./components/NewTaskForm"
import firebase from 'firebase/app';
// import "firebase/auth";
// import "firebase/database";

import TaskList from "./components/TaskList";
import PurgeButton from './components/PurgeButton';
class App extends Component {
   
  render() {
    let tasksRef = firebase.database().ref("tasks");
    let awesomeRef = firebase.database().ref("awesomeTasks");
    return (
      <div>
      <div className="jumbotron bg-dark text-white">
        <div className="container">
          <h1 className="display-3">Task343</h1>
        </div>
      </div>
      <div className = "container">
      <section>
        <div className = "container">
          <NewTaskForm tasksRef = {tasksRef} />
            <div className = "pt-3">
            <TaskList tasksRef = {tasksRef} />
            </div>
            <PurgeButton tasksRef = {tasksRef}/>
          </div>
        </section>
        <section>
        <div className = "container">
        <h2 className = "display-4 pt-4">Awesome Tasks</h2>
          <NewTaskForm tasksRef = {awesomeRef} />
            <div className = "pt-3">
            <TaskList tasksRef = {awesomeRef} />
            </div>
            <PurgeButton tasksRef = {awesomeRef}/>
          </div>
        </section>
        </div>
      </div>
    );
  }
}

export default App;

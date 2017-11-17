import React from "react";
//Task
import Task from "./Task";

export default class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasksSnapShot: undefined
        }
    }
    
    componentDidMount(){
        this.props.tasksRef.on("value", 
            snapshot =>this.setState(
            {tasksSnapShot:snapshot}));
        
    }

    componentWillUnMount(){
        this.props.taskRef.off("value");
    }

    toggleDone(){

    }

    render(){
        if(!this.state.tasksSnapShot){
            return (<div>
            Loading... please be patient       
            </div>);
        } 
        
        let tasks =[];
        this.state.tasksSnapShot.forEach(taskSnapShot=>{
            tasks.push(<Task key= {taskSnapShot.key} taskSnapShot={taskSnapShot}/>);
        });

        return (
            <ul>
                {tasks}
            </ul>
        )
    }
}
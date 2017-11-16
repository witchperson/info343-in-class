import React from "react";
//Task

export default class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasksSnapShot: undefined
        }
    }
    
    componentDidMount(){
        this.props.taskRef.on("value", 
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
        this.state.tasksSnapShot.forEach(task=>{
            tasks.push(<Task />);
        });
        return (
            <ul>
                {tasks}
            </ul>
        )
    }
}
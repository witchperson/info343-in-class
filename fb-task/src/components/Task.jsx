import React, {Component} from 'react';

export default class Task extends Component {
    render() {
        let taskStyles = {
            cursor: "pointer"
        }
        // ... 
        let doneTaskStyles = {...taskStyles,
            color:"#AAA",
            textDecoration:"line-through"
        }
        let task = this.props.taskSnapShot.val()
        return (
            <li style = {task.done ? doneTaskStyles:taskStyles}
                onClick={()=>this.props.taskSnapShot.ref.update({done:!task.done})}
            >{task.title}
            </li>
        );
    }
}
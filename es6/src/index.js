// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

class Task {
    constructor(mytitle, doneness) {
        this.title = mytitle;
        this.done = doneness;
    }
    
    render(){
        let li = document.createElement("li");
        li.textContent = this.title;
        
        if(this.done) {
            li.classList.add("done");
        }

        li.addEventListener("click", () => {
            this.done = !this.done;
            li.classList.toggle("done");
        });

        return li;
    }  
}

class TaskList{
    constructor(mytasks){
        this.tasks = mytasks;
    }

    purgeMe(){
        this.tasks = this.tasks.filter(tasks=>!tasks.done);
    }

    addTask(task){
        this.tasks.push(task);
    }

    render(){
        let ul = document.createElement("ui");
        this.tasks.forEach(task => {
            ul.appendChild(task.render());    
        });
        return ul;
    }
}

class Button {
    constructor(mylabel){
        this.label = mylabel;
    }

    render(){
        let button = document.createElement("button");
        button.classList.add("btn","btn-primary");
        button.textContent = this.label;
        return button;
    }
}

class TaskForm {
    //constructor(){}
    render(){
        let form = document.createElement("form");
        form.classList.add("pb-4");
        let input = document.createElement("input");
        form.appendChild(input);
        input.classList.add("form-control");
        input.setAttribute("placeholder","what do you need to do?");
        return form;
    }
}

class App{
    constructor(myparentElement, mytaskList){
        this.parentElement = myparentElement;
        this.taskList = mytaskList;
        this.newTaskForm = new TaskForm();
        this.purgeButton = new Button("Purge me!");
    }
    render(){
        this.parentElement.textContent = "";
        
        let form = this.parentElement.appendChild(this.newTaskForm.render());
        let ul = this.parentElement.appendChild(this.taskList.render());
        let button = this.parentElement.appendChild(this.purgeButton.render());

        form.addEventListener("submit",evt =>{
            evt.preventDefault();
            let input = form.querySelector("input");
            this.taskList.addTask(new Task(input.value));
            let updatedBrowser = this.taskList.render();
            this.parentElement.replaceChild(updatedBrowser, ul);
            // ul is gonna kick out
            ul = updatedBrowser;
            input.value = "";
        })

        button.addEventListener("click", ()=>{
            this.taskList.purgeMe();
            let updatedUI = this.taskList.render();
            this.parentElement.replaceChild(updatedUI, ul);
            ul = updatedUI;
        });
    }
}

let app = new App(document.querySelector("#app"),  
    new TaskList([
        new Task("Learn ES6 Features!"),
        new Task("Buy a Ferrari!")
    ]));
app.render();
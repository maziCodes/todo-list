import { Component, Input } from '@angular/core';
// import { Tasks } from './app.data';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Declaring greetings variable
  greetings = 'Hi, welcome to my Todo App !';
  tasks: any;
  titles: string;
  details: string;
  description: any;



  // Initiating the Index and Id variable for the tasks
  id:number = 0;
  // Initiating the Task object in the createTask function
  task:any;
  // Initiating the Index variable in the deleteTask function
  index:number;
  // Initiating the indexOfTask variable in the editTask function
  indexOfTask:number;
  // 
  editting:boolean = false;


  // Initiating class constructor
  constructor() {  
	  this.tasks = []
  }

  // Function to create new task
  createTask(title,description) {
    // Using If Statement to check empty input
    if ((title === undefined || description === undefined) || (title === "" || description === "") ) {
      alert("Please, enter your complete task details");
    } else {
        // incrementing task Id for each created task by 1
        this.id ++;
        // Initiating task object
        this.task = {
          "id": this.id,
          "title": title,
          "description": description   
        }  
        // Storing new instance task object in local storage per session
   
        this.tasks.push(this.task);  
        console.log(this.tasks);

        // localStorage.setItem("storedTasks",JSON.stringify(this.tasks));
        // let storedTask = localStorage.getItem("storedTasks");
        // console.log(localStorage.getItem("storedTasks"));
        // console.log(storedTask);
        // this.tasks = JSON.parse(storedTask);
        // console.log(JSON.parse(storedTask) + " parsed to Json");
        // console.log(localStorage.length);
      }
    }

  // Function to delete task
  deleteTask(taskOne) {
    // Getting the index of an existing task in the table
    this.index = this.tasks.findIndex(task => task.id === taskOne.id);
    console.log(this.index);
      // Deleting existing task form the table
      this.tasks.splice(this.index, 1);
      // Alerting user of before deleting
      alert("Task deleted!");
      console.log(this.tasks);      
  }

  // Function to edit task
  editTask(editableTask) {
    this.editting = true;
    this.indexOfTask = this.tasks.indexOf(editableTask);
  }

  // Display edited task in console
  consoleThis() {
    console.log(this.tasks[this.indexOfTask].title);
  }
}



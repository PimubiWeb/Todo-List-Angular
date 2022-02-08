import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  //declare variables
  todos = new Array();
  todoTitle = '';
  todoDescription = '';
  todoDate = new Date().toDateString();
  idTodo= 0;

  constructor() {
    this.downloadLocal();
   }

  ngOnInit(): void {
    this.todoTitle = '';
    this.todoDescription = '';
    this.idTodo = 1;
    //this.todos = [];
    }

    addTodo(): void{ //Enter a new todo
      if(this.todoTitle.trim().length === 0 ){ //need to write something in title
        return;
      }
      if(this.todoDescription.trim().length === 0 ){ //need to write something in desc
        return;
      }
      this.todos.push({
        id:this.idTodo,
        title: this.todoTitle,
        description: this.todoDescription,
        date: this.todoDate,
        completed: false
      })
      this.todoTitle = '';
      this.todoDescription = '';
      this.idTodo++;
      this.updateLocal();
    }

    deleteTodo(id: number): void { //delete a todo through its id
      const index = this.todos.findIndex((todo) => todo.id == id)
        this.todos.splice(index, 1)
        this.updateLocal();
    }

    changeCompleted(i: number):void { //change boolean value of todo.completed 
      this.todos[i].completed = !this.todos[i].completed;
      this.updateLocal();
    }
    
    // local storage
    downloadLocal(): void{
      let a = localStorage.getItem('todos');
      if(a)
        this.todos = JSON.parse(a);
        console.log(a)
    }

    //update local storage
    updateLocal(): void{
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    //advise how many todos have u done
    remaining(): number {
      return this.todos.filter(todo => !todo.completed).length;
    }

    //clear completed button to delete all todos that are completed
    deleteCompleted(): void {
      this.todos = this.todos.filter(todo => !todo.completed);
      this.updateLocal();
    }
  }



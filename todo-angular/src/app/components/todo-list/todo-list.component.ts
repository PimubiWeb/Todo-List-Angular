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

  constructor() { }

  ngOnInit(): void {
    this.todoTitle = '';
    this.todoDescription = '';
    this.idTodo = 1;
    this.todos = [];
    }

    addTodo(): void{
      if(this.todoTitle.trim().length === 0 ){
        return;
      }
      if(this.todoDescription.trim().length === 0 ){
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
    }

    deleteTodo(id: number): void {
      const index = this.todos.findIndex((todo) => todo.id == id)
        this.todos.splice(index, 1)
        this.updateLocal();
    }

    changeCompleted():void { //change boolean value of todo.completed 
      
    }

    //TODO dont work local storage
    // local storage
    // downloadLocal(): void{ 
    //   if(JSON.parse(localStorage.getItem(this.LocalTodo)))
    //       this.todos = JSON.parse(localStorage.getItem('todos'));
    // }

    //update local storage
    updateLocal(): void{
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }



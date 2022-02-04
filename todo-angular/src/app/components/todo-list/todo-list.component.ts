import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = new Array();

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      'id': 1,
      'title': 'hola que tal'
    },
    {
      'id': 2,
      'title': 'adios'
    },
    {
      'id': 3,
      'title': 'otra cosa mas'
    }]
    }
  }



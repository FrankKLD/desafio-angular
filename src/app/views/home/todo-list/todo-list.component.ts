import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/shared/model/todo.model';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listTodos: todo[] | undefined;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.listTodos = data;
    });
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todos';
import { TodoService  } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  onToggle(todo) {
    console.log('toggle');


  }

  onDelete(todo)
  {
   this.deleteTodo.emit(todo);
  }

}

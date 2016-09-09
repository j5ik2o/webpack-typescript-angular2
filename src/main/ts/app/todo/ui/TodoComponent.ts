import { Component } from '@angular/core';
import { TodoStore } from '../application/TodoStore';
import { TodoViewModel } from './TodoViewModel';
import { TodoViewModelConverter } from './TodoViewModelConverter';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TodoState } from '../application/TodoState';
import { TodoRepository } from '../domain/TodoRepository';
import { TodoActionCreator } from './TodoActionCreator';

@Component({
  selector: 'todo',  // <todo></todo>
  template: `
     <div>
      <form [ngFormModel]="_todoForm" (submit)="doSubmit($event)">
      <input ngControl="todo" type="text">
      <button type="submit">Update</button>
      </form>
      <div>
        <ul>
          <li *ngFor="let m of todos()">{{m.text}}</li>
        </ul>
      </div>
    </div>
`
})
export class TodoComponent {

  private _listenerSubscription: { remove: Function };
  private _todoForm: FormGroup;
  private _state = new TodoState('', new TodoRepository());

  constructor(private _store: TodoStore, fb: FormBuilder) {
    this._todoForm = fb.group({
      todo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._listenerSubscription = _store.addListener(this.handleStateChange.bind(this));
  }

  ngOnDestroy() {
    this._listenerSubscription.remove();
  }

  handleStateChange() {
    const storeState = this._store.getState();
    const repository = new TodoRepository(storeState.getRepository().resolveAll());
    this.state = new TodoState(storeState.currentTodo, repository);
  }

  doSubmit(event) {
    console.log(this._todoForm.todo);
    TodoActionCreator.createTodo(this._todoForm.todo);
  }

  todos(): TodoViewModel[] {
    return new TodoViewModelConverter(this._store.getRepository()).getTodoVMs();
  }


}

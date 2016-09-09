import { Routes } from '@angular/router';
import { HelloWorld } from './helloWorld/HelloWorld';
import { TodoComponent } from './todo/ui/TodoComponent';


export const ROUTES: Routes = [
  {path: '', component: HelloWorld},
  {path: '/todo', component: TodoComponent}
];

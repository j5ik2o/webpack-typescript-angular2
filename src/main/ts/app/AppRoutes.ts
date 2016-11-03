import { Routes, RouterModule } from '@angular/router';
import { HelloWorld } from './helloWorld/HelloWorld';
import { Alert } from './alert';


export const ROUTES: Routes = [
{ path: '',      component: HelloWorld },
{ path: 'alert', component: Alert },
];

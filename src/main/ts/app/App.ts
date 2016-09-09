/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      <span>
        <a [routerLink]=" ['./todo'] ">
          Todo 
        </a>
      </span>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

    constructor() {

    }

    ngOnInit() {
    }

}


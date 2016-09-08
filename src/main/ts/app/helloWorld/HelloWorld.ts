import { Component } from '@angular/core';

@Component({
    selector: 'helloWorld',  // <helloWorld></helloWorld>
    template: `
        <span>{{value}}</span>
`
})
export class HelloWorld {

    value = "hello"

    ngOnInit() {
        console.log('hello `Home` component');
    }

};
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ENV_PROVIDERS } from './Environment';
import { ROUTES } from './AppRoutes';
import { App } from './App';
import { HelloWorld } from './helloWorld/HelloWorld';
import { TodoComponent } from './todo/ui/TodoComponent';

/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component

// Application wide providers


type StoreType = {
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    HelloWorld,
    TodoComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
  }

  hmrOnInit(store: StoreType) {
  }

  hmrOnDestroy(store: StoreType) {
  }

  hmrAfterDestroy(store: StoreType) {
  }
}

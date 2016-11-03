import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { Ng2BootstrapModule } from 'ng2-bootstrap/components';
import { Alert } from './alert';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './Environment';
import { ROUTES } from './AppRoutes';
// App is our top level component
import { App } from './App';
import { HelloWorld } from './helloWorld/HelloWorld';

// Application wide providers


type StoreType = {
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        HelloWorld,
        Alert
    ],
    imports: [ // import Angular's modules
        Ng2BootstrapModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {}
    hmrOnInit(store: StoreType) {
    }
    hmrOnDestroy(store: StoreType) {
    }
    hmrAfterDestroy(store: StoreType) {
    }
}

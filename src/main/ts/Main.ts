/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/Environment';
import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/AppModule';
import * as Promise from 'core-js/es6/promise';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(decorateModuleRef)
}


bootloader(main);

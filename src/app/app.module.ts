/// <reference path='../../declarations.d.ts'/>

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './Navigation';
import AboutComponent from './about';
import HomeComponent from './home';
import {BlogComponent} from './blog/Blog';
import {CoreModule} from './core/core.module';
import {PageNotFoundComponent} from './404/not-found.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        CoreModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutComponent,
        BlogComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

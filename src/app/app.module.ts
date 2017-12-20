/// <reference path='../../declarations.d.ts'/>

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './Navigation';
import AboutComponent from './about';
import HomeComponent from './home';
import {CoreModule} from './core/core.module';
import {PageNotFoundComponent} from './404/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {BlogModule} from './blog/blog.module';

@NgModule({
    imports: [
        CoreModule,
        BlogModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

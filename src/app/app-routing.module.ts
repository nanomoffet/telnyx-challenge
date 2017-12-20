import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './404/not-found.component';
import {BlogComponent} from './blog/Blog';
import {AboutComponent} from './about/About';
import {HomeComponent} from './home/Home';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}

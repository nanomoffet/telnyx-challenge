import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './404/not-found.component';
import {AboutComponent} from './about/About';
import {HomeComponent} from './home/Home';
import {BlogComponent} from './blog/Blog';
import {PostDetailComponent} from './blog/post-detail/post-detail';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: PostDetailComponent},
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

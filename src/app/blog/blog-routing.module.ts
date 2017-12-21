import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlogComponent} from './Blog';

const blogRoutes: Routes = [
    {path: '', component: BlogComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { }

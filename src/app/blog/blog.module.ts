import {NgModule} from '@angular/core';
import {BlogComponent} from './Blog';
import {PostSummaryComponent} from './post-summary/post-summary';
import {PostDetailComponent} from './post-summary/post-detail/post-detail';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        BlogComponent,
        PostSummaryComponent,
        PostDetailComponent
    ],
})
export class BlogModule {
}

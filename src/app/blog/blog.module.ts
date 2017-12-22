import {NgModule} from '@angular/core';
import {BlogComponent} from './Blog';
import {PostSummaryComponent} from './post-summary/post-summary';
import {PostDetailComponent} from './post-detail/post-detail';
import {SharedModule} from '../shared/shared.module';
import {CommentModalComponent} from './post-detail/comment-modal/comment-modal';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        BlogComponent,
        PostSummaryComponent,
        PostDetailComponent,
        CommentModalComponent
    ],
})
export class BlogModule {
}

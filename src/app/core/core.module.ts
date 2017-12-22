import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {PostsService} from './services/posts.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {CommentsService} from './services/comments.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
    ],
    declarations: [],
    providers: [
        PostsService,
        CommentsService
    ],
    exports: [
        BrowserAnimationsModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}

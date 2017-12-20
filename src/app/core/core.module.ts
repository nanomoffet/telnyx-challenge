import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {PostsService} from '../blog/posts.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
    ],
    declarations: [],
    providers: [
        PostsService
    ],
    exports: [
        BrowserAnimationsModule
    ]
})
export class CoreModule {
}

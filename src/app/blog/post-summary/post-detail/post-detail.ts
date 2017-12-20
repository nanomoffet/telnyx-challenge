import {Component, OnInit} from '@angular/core';

import template from './post-detail.html';
import {PostsService} from './posts.service';
import {Post} from './store/models/post.model';

@Component({
    selector: 'tnx-post-detail',
    template
})

export class PostDetailComponent implements OnInit {

    posts: [Post];

    constructor(private blogs: PostsService) {}

    ngOnInit() {
        this.blogs.getBlogPosts().subscribe(posts => {
            this.posts = posts;
        })
    }
}

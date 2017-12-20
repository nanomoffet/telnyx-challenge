import {Component, OnInit} from '@angular/core';

import template from './blog.html';
import {PostsService} from './posts.service';
import {Post} from './store/models/post.model';

@Component({
    selector: 'blog',
    template
})

export class BlogComponent implements OnInit {

    posts: [Post];

    constructor(private blogs: PostsService) {}

    ngOnInit() {
        this.blogs.getBlogPosts().subscribe(posts => {
            this.posts = posts;
        })
    }
}

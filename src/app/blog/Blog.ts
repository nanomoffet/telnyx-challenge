import {Component, OnInit} from '@angular/core';

import template from './blog.html';
import {PostsService} from '../core/services/posts.service';
import {Post} from './store/models/post.model';

@Component({
    selector: 'tnx-blog',
    template,
})

export class BlogComponent implements OnInit {

    posts: [Post];

    constructor(private blogs: PostsService) {}

    ngOnInit() {
        this.blogs.getBlogPosts().subscribe(posts => {
            this.posts = posts;
            this.posts.sort((a, b) => {
                return Date.parse(b.publish_date) - Date.parse(a.publish_date);
            });
            console.log(this.posts);
        })
    }


}

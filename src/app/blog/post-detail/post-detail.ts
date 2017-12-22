import {Component, OnInit} from '@angular/core';

import template from './post-detail.html';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostsService} from '../../core/services/posts.service';
import {CommentsService} from '../../core/services/comments.service';
import {Post} from '../store/models/post.model';
import {Comment} from '../store/models/comment.model';

@Component({
    selector: 'tnx-post-detail',
    template
})

export class PostDetailComponent implements OnInit {

    id: number;
    post: Post;
    comments: Comment[];
    openCommentModal = false;

    constructor(private route: ActivatedRoute, private ps: PostsService, private cs: CommentsService) {
        this.post = {
            id: null,
            title: null,
            author: null,
            publish_date: null,
            slug: null,
            description: null,
            content: null
        }
    }


    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = +params.get('id');
            this.ps.getSingleBlogPost(this.id).subscribe( post => this.post = post);
            this.cs.getBlogPostComments(this.id).subscribe( comments => {
                this.comments = comments.sort((a, b) => {
                    return Date.parse(b.date) - Date.parse(a.date)
                });
                // this.comments = comments.filter(comment => {
                //     return comment.parent_id === null;
                // });
                // comments.forEach(comment => {
                //     if (comment.parent_id !== null) {
                //         this.comments.splice(comment.parent_id, 0, comment);
                //     }
                // })
            });
        });
    }

    addComment() {
        this.openCommentModal = true;
    }

    closeModal() {
        this.openCommentModal = false;
    }
}

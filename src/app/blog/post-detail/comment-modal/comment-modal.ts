import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import template from './comment-modal.html';
import {CommentsService} from '../../../core/services/comments.service';
import {Post} from '../../store/models/post.model';
import {Comment} from '../../store/models/comment.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'tnx-comment-modal',
    template
})

export class CommentModalComponent implements OnInit {

    @Input() post: Post;
    @Input() numberOfComments: number;
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    commentForm: FormGroup;

    constructor(private fb: FormBuilder, private cs: CommentsService) {
        this.createForm();
    }


    ngOnInit() {

    }

    createForm() {
        this.commentForm = this.fb.group({
            comment: '',
            name: '',
        })
    }

    addComment() {
        const newComment: Comment = {
            id: null,
            postId: this.post.id,
            parent_id: null,
            user: this.commentForm.get('name').value,
            date: new Date().toISOString().slice(0, 10),
            content: this.commentForm.get('comment').value
        };
        this.cs.postBlogPostComment(this.post.id, newComment)
            .subscribe( res => console.log(res));
        this.closeModal.emit();
    }
}

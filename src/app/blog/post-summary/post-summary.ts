import {Component, Input, OnInit} from '@angular/core';

import template from './post-summary.html';
import {Post} from '../store/models/post.model';

@Component({
    selector: 'tnx-post-summary',
    template
})

export class PostSummaryComponent implements OnInit {

    @Input() post: Post;

    constructor() {}

    ngOnInit() {

    }
}

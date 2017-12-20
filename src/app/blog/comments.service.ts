import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';
import {Post} from './store/models/post.model';
import {Comment} from './store/models/comment.model';

@Injectable()
export class CommentsService {

    baseUrl = 'http://localhost:9001';

    constructor (private http: HttpClient) {}


    getBlogPostComments(id: number): Observable<Post> {
        return this.http.get<Post>(this.baseUrl + `/posts/${id}/comments`)
    }

    postBlogPostComment(id: number, comment: Comment): Observable<Response> {
        return this.http.post<Response>(this.baseUrl + `/posts/${id}/comments`, comment)
    }

    updateComment(id: number, comment: Comment): Observable<Response> {
        return this.http.put<Response>(this.baseUrl + `/comments/${id}`, comment);
    }
}
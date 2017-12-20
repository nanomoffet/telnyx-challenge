import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';
import {Post} from './store/models/post.model';

@Injectable()
export class PostsService {

    baseUrl = 'http://localhost:9001';

    constructor (private http: HttpClient) {}

    getBlogPosts(): Observable<[Post]> {
        return this.http.get<[Post]>(this.baseUrl + '/posts')
    }

    getSingleBlogPost(id: number): Observable<Post> {
        return this.http.get<Post>(this.baseUrl + `/posts/${id}`)
    }
}

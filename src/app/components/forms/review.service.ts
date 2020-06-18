import {Injectable} from '@angular/core';
import {pipe, Subject, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ReviewModel} from './review.model';
import {catchError, exhaustMap, map, take} from 'rxjs/operators';
import {AuthService} from '../about/authentication/auth.service';

@Injectable({providedIn: 'root'})
export class ReviewService {
  error = new Subject<string>();

  constructor(private http: HttpClient ,
              private authService: AuthService) {}

  storeReview(name: string, email: string, message: string) {
    const postReview: ReviewModel = {name, email, message};
    this.http.post<{ title: string }>('https://angulartestiello.firebaseio.com/post.json',
      postReview).subscribe(responseReview => {
      console.log(postReview);
    }, error => {
      this.error.next(error.message);
    });
  }



  postReview() {
    return this.authService.user.pipe(
      take(1), exhaustMap(user => {
      return this.http
        .get<{[key: string]: ReviewModel}>('https://angulartestiello.firebaseio.com/post.json', {
        params: new HttpParams().set('auth' , user.token)});
    }) ,   map( responseReview => {
        const reviewArray: ReviewModel[] = [];
        for (const key in responseReview) {
          if (responseReview.hasOwnProperty(key)) {
            reviewArray.push({ ...responseReview[key], id: key});
          }
        }
        return reviewArray;
      }),
      catchError ( errorResponse => {
        return throwError(errorResponse);
      })
    );
 }

  onDelete() {
    return  this.http.delete('https://angulartestiello.firebaseio.com/post.json');
  }
}

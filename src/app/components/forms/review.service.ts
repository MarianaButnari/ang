import {Injectable} from "@angular/core";
import {Subject, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ReviewModel} from "./review.model";
import {catchError, map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ReviewService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  storeReview(name: string, email: string, message: string) {
    const postReview: ReviewModel = {name: name, email: email, message: message};
    this.http.post<{ title: string }>('https://angulartestiello.firebaseio.com/post.json',
      postReview).subscribe(responseReview => {
      console.log(postReview);
    }, error => {
      this.error.next(error.message);
    });
  }



  postReview(){
    return this.http
      .get<{[key: string]: ReviewModel}>('https://angulartestiello.firebaseio.com/post.json')
      .pipe(
        map( responseReview =>{
          const reviewArray: ReviewModel[]=[];
          for (const key in responseReview){
            if (responseReview.hasOwnProperty(key)){
              reviewArray.push({ ...responseReview[key], id:key})
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

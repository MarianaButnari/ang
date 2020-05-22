import {Component, OnInit, ViewChild,OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReviewModel} from "./review.model";
import {HttpClient} from "@angular/common/http";
import {ReviewService} from "./review.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {
   @ViewChild('myFormReview' , {static: false}) reviewForm : NgForm;

// TEMPLATE-DRIVEN

  modelReview = new ReviewModel('Mary' , 'email@mail.com' , 'Great Job!');
  loadedReviews: ReviewModel[] = [];
  submitReview = false;
  error = null;
  private errorSub: Subscription;


constructor(private http: HttpClient ,
            private reviewService: ReviewService) { }

  imageUrl1 = 'https://internet-mktg.com/wp-content/uploads/2016/07/wordpress-plugins-2016-1.jpg';

  ngOnInit() {
    this.errorSub = this.reviewService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.submitReview = true;
    this.reviewService.postReview().subscribe(reviews=>{
      this.submitReview = false;
      this.loadedReviews = reviews;
    },error => {
      this.error = error.message;
    }
    );

  }

  onSubmit(reviewPost: ReviewModel) {
    this.reviewService.storeReview(reviewPost.name, reviewPost.email,reviewPost.message);
  }
  onPostReview(){
    this.submitReview = true;
    this.reviewService.postReview().subscribe(reviews=>{
      this.submitReview = false;
      this.loadedReviews = reviews;
    },error => {
      this.error = error.message;
    }
    );
  }



   // newReview(){this.modelReview = new ReviewModel('','','');}

  onClearReview(){
    this.reviewService.onDelete().subscribe(() =>{
      this.loadedReviews=[];
    });
  }
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}



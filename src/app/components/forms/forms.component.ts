import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
   @ViewChild('myform' , {static: false}) reviewForm : NgForm;

  userReview = {name :'',
                message : 'No feedback message'};
  submitreview = false;
  constructor() { }
  imageUrl1 = 'https://internet-mktg.com/wp-content/uploads/2016/07/wordpress-plugins-2016-1.jpg';
  ngOnInit() {
 }
  // onSubmit(form: NgForm) {
  //   console.log('Your form data : ', form.value);
  // }

  // onSubmit(){
  //   console.log(this.reviewForm);
  // }
  onSubmit(){
    this.submitreview = true;
    this.userReview.name = this.reviewForm.value.name;
    this.userReview.message = this.reviewForm.value.message
    this.reviewForm.reset();
  }
}


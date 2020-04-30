import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // @ViewChild('nameInput' , {static: false}) nameInputReference: ElementRef;
  // @ViewChild('emailInput' , {static: false}) emailInputReference: ElementRef;
  // @ViewChild('messageInput' , {static: false}) messageInputReference: ElementRef;
  // messageAdded = new EventEmitter<{name: string , email: string , message: string}>();
  // name = 'Name' ;
  message = 'No feedback message';
  constructor() { }
  imageUrl1 = 'https://internet-mktg.com/wp-content/uploads/2016/07/wordpress-plugins-2016-1.jpg';
  ngOnInit() {
 }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

  // onAddFeedback() {
  //   const newFeedbackMessage = this.messageInputReference.nativeElement.value;
  //
  // }
}


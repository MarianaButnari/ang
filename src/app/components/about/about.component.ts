import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('myFormAbout') signUpForm :NgForm;
   buttonStatus = 'Start';
   newButtonStatus = 'Welcome!';

  constructor() { }

  ngOnInit(): void { };

  changeButtonStatus() {
    this.buttonStatus = this.newButtonStatus;
  }

  // onSubmitAbout(form:NgForm){
  //   console.log(form)
  // }

  onSubmitAbout() {
    console.log('Your form data : '+ this.signUpForm);
  }
}

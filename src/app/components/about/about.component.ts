import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SignUpService} from "./signUp.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // @ViewChild('myFormAbout') signUpForm :NgForm;
   // buttonStatus = 'Start';
   // newButtonStatus = 'Welcome!';
   isLoginMode = true;

  constructor(private signUp: SignUpService ) { }

  ngOnInit(): void { };
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  // changeButtonStatus() {
  //   this.buttonStatus = this.newButtonStatus;
  // }



  onSubmitAbout(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode ){}
    else {this.signUp.signUp(email,password).subscribe(responseData =>
      {console.log(responseData); } ,
      error => {
        console.log(error);
      }
    ); }
    form.reset();
  }
}

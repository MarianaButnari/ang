import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // REACTIVE FORM

  newsletterSignUp: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newsletterSignUp = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'suggestion': new FormArray([])
    });
  }
  onSubmitNewsletter(){
    console.log(this.newsletterSignUp.value);
  }
  onAddSuggestion(){
    const control = new FormControl(null , Validators.required);
    (<FormArray>this.newsletterSignUp.get('suggestion')).push(control);
  }
  getControls(){
    return (this.newsletterSignUp.get('suggestion') as FormArray).controls;
  }
}

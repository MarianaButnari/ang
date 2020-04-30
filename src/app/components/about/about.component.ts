import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 // fullName = 'Enter your full name';
 // @Output() newButton = new EventEmitter<string>();
  buttonStatus = 'Start';
  newButtonStatus = 'Welcome!';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

  changeButtonStatus($event: MouseEvent) {
    this.buttonStatus = this.newButtonStatus;

  }
}

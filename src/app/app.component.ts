import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularNew';
  public isMenuCollapsed = true;
  constructor() { }
  ngOnInit() {
  }
  toHome() {
    document.getElementById('nav').scrollIntoView();
  }
  toAbout() {
    document.getElementById('about').scrollIntoView();
  }
  toTeam() {
    document.getElementById('team').scrollIntoView();
  }
  toReviews() {
    document.getElementById('form').scrollIntoView();
  }
  toMap() {
    document.getElementById('map').scrollIntoView();
  }
  toContact() {
    document.getElementById('footer').scrollIntoView();
  }
}

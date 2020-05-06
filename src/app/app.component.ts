import {Component, OnInit, } from '@angular/core';
import { interval} from 'rxjs'
import {count} from "rxjs/operators";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ViewportScroller} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularNew';
  public isMenuCollapsed = true;
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {}
  onClickScroll(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId)
  }
  // toHome() {
  //   document.getElementById('nav').scrollIntoView();
  // }
  // toAbout() {
  //   document.getElementById('about').scrollIntoView();
  // }
  // toTeam() {
  //   document.getElementById('team').scrollIntoView();
  // }
  // toReviews() {
  //   document.getElementById('form').scrollIntoView();
  // }
  toMap() {
    document.getElementById('map').scrollIntoView();
  }
  // toContact() {
  //   document.getElementById('footer').scrollIntoView();
  // }

}

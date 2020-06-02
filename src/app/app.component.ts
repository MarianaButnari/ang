import {Component, OnInit,} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularNew';
  public isMenuCollapsed = true;
  constructor( private route: ActivatedRoute,
               private router:Router,
               private viewportScroller: ViewportScroller) {
  }

  ngOnInit() {}

  public onClickScroll(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

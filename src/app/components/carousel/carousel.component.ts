import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']

})
export class CarouselComponent implements OnInit {
  constructor( private viewportScroller: ViewportScroller) {}
  imgUrl1 = 'assets/images/carousel2.png';
  imgUrl2 = 'assets/images/carousel1.png';
  imgUrl3 = 'assets/images/carousel3.png';
 ngOnInit() {}
  scrollToElement( elementId : string ) : void {
   this.viewportScroller.scrollToAnchor(elementId);

  }

}


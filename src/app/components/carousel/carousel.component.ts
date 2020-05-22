import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']

})
export class CarouselComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}
  imgUrl1 = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/angulart2-dark_1200x303.png?sfvrsn=b936a75a_0';
  imgUrl2 = 'https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/Angular_6_and_Beyond.png';
  imgUrl3 = 'https://www.monterail.com/hubfs/angular2.jpg';
 ngOnInit() {}
  scrollToElement( elementId : string ) : void {
   this.viewportScroller.scrollToAnchor(elementId);

  }
}

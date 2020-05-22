import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SharedCourseService} from "../shared/shared-course.service";
import {CourseModel} from "./course.model";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [
    trigger('wishList' , [
      state('normal' , style({
        color: '#29ca8e',
        transform: 'scale(1)',

      })),
      state('highlighted' ,style({
        color: '#f2db9b',
        transform: 'scale(1.5)',
      })) ,
      transition('normal<=>highlighted', animate(300))
    ])
  ]
})

export class NewsComponent implements OnInit {
  state= 'normal';
  public courseList: CourseModel[];

 constructor(private viewportScroller: ViewportScroller,
             private course: SharedCourseService) {
  }

ngOnInit():void {
    this.courseList = this.course.getCourse()

 }

  public onClickScroll(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId)
  }

  public onAnimate(){
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
}
}

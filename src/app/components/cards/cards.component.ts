import { Component, OnInit } from '@angular/core';
import {Teacher} from './teacher.model';
import {SharedTeachersModel} from '../shared/shared-teachers.model';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  // animations: [
  //   trigger('cardAnimation' , [
  //     transition('* => *' , [
  //       query(':enter' , style({ opacity: 0 }), {optional: true}),
  //       query(':enter' , stagger('300ms' , [
  //         animate('.5s easy-in', keyframes([
  //           style({opacity: 0, transform: 'translateY(-50%)' , offset: 0}) ,
  //           style({opacity: .5, transform: 'translateY(-50%) scale(1.1)' , offset: 0.3 }),
  //           style({opacity: 1, transform: 'translateY(0)' , offset: 1}),
  //         ]))]), {optional: true}),
  //   ]),
  //     transition('* => *', animate('300ms 1.1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })))
  // ])]
})
export class CardsComponent implements OnInit {
 teachers: Teacher[] = [];

  constructor() { }

  ngOnInit() {
    this.teachers = SharedTeachersModel.Teacher;
  }
}

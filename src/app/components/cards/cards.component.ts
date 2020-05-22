import { Component, OnInit } from '@angular/core';
import {Teacher} from "./teacher.model";
import {SharedTeachersModel} from "../shared/shared-teachers.model";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 teachers: Teacher[] = [];

  constructor() { }

  ngOnInit() {
    this.teachers= SharedTeachersModel.Teacher;
  }
}

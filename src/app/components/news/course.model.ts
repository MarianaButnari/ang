import {Teacher} from "../cards/teacher.model";

export class CourseModel {
  public imagePath: string;
  public date: string;
  public hours: string;
  public courseName: string;
  public courseDescription: string;
  public teacher: Teacher;
  public cost: number;

  constructor( imagePath: string , date: string , hours: string, courseName: string, courseDescription: string ,teacher: Teacher, cost: number) {
    this.imagePath = imagePath;
    this.date = date;
    this.hours = hours;
    this.courseName = courseName;
    this.courseDescription = courseDescription;
    this.teacher = teacher;
    this.cost = cost
  }

}

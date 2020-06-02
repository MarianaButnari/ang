import {Injectable} from "@angular/core";
import {CourseModel} from "../news/course.model";
import {Teacher} from "../cards/teacher.model";
import {SharedTeachersModel} from "./shared-teachers.model";

@Injectable({
  providedIn:'root'
})
export class SharedCourseService {

  public teachers = SharedTeachersModel.Teacher;

  private selectedTeacher:Teacher[]= this.teachers;

  public courses: CourseModel [] = ([
    {imagePath:'assets/images/classes1.png',
      date:'31.05.2020' ,
      hours:'7 hours',
      courseName:'Angular' ,
      courseDescription:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      teacher:this.selectedTeacher[1],
      cost:100},
    {imagePath:'assets/images/classes4.png',
      date:'31.05.2020' ,
      hours:'7 hours',
      courseName:'Angular' ,
      courseDescription:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      teacher:this.selectedTeacher[2],
      cost:300},
    {imagePath:'assets/images/classes2.png',
      date:'31.05.2020' ,
      hours:'7 hours',
      courseName:'Angular' ,
      courseDescription:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript',
      teacher:this.selectedTeacher[0],
      cost:1000},
    {imagePath:'assets/images/classes3.png',
      date:'31.05.2020' ,
      hours:'7 hours',
      courseName:'Angular' ,
      courseDescription:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript',
      teacher:this.selectedTeacher[0],
      cost:1000},
  ]);
constructor() {
}
public getCourse() {
  return this.courses;}
}

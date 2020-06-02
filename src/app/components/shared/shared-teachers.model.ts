import {Teacher} from "../cards/teacher.model";

export class SharedTeachersModel {
  public static readonly Teacher = [
    new Teacher('assets/images/teacher1.png',
      'John',
      'This is the best team that can teach you to code'),
    new Teacher('assets/images/teacher2.png',
      'Mary',
      'This is the best team that can teach you to code'),
    new Teacher('assets/images/teacher3.png',
      'Max',
      'This is the best team that can teach you to code'),
    new Teacher('assets/images/teacher4.png',
      'Max',
      'This is the best team that can teach you to code'),
  ]
}

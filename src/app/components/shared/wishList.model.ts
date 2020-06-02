export class WishListModel {

  constructor(public id:number, public courseId: number, public courseName: string, public cost: number, public quantity: number) {
    this.id = id;
    this.courseId = courseId;
    this.courseName = courseName;
    this.cost = cost;
    this.quantity = quantity;
  }


}

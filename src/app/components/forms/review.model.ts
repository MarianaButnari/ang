export class ReviewModel {
  name: string;
  email: string;
  message: string;
  id?: string;
constructor(name: string,email: string,message: string) {
  this.name=name;
  this.email=email;
  this.message=message;
}
}

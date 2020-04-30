import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
 imageUrl = 'https://media.wired.com/photos/5cc244cc2c90a35c66b7d930/master/w_2560%2Cc_limit/Coding-Becomes-Criminal.jpg';
 // imageUrl = '/Users/oleg/Desktop/scoalaIT/img/undrawMobileMessages.png';
  ngOnInit() {
    setTimeout(() => {this.imageUrl = 'https://miro.medium.com/max/1024/1*p97BugR0XeVxY__7CqL9fA.png'; }
   , 3000);
  }
}

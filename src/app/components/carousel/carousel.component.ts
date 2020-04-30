import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  // styleUrls: ['./carousel.component.css'],
  styles: [`
    #carouselExampleCaptions{
      margin-top: 80px;
      transition: all 2s;
    }
    .carousel-inner{
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
    .carousel-item{
      background-repeat: no-repeat;
      background-attachment: local;
      background-size: cover;
      height: 650px;
    }
    h1 , h3, a{
      color: black;
    }
    .carousel-item h3 a:hover{
      color: #f2db9b;
    }
    .section-btn {
      background: transparent;
      border-radius: 50px;
      border: 1px solid #ffffff;
      font-size: inherit;
      font-weight: normal;
      padding: 15px 30px;
      transition: 0.5s;
    }

    .section-btn:hover {
      background: #ffffff;
      border-color: transparent;
    } `]

})
export class CarouselComponent implements OnInit {
  constructor() {}
  imgUrl1 = 'https://hackr.io/blog/why-should-you-learn-angular/thumbnail/large';
  imgUrl2 = 'https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/Angular_6_and_Beyond.png';
  imgUrl3 = 'https://www.monterail.com/hubfs/angular2.jpg';
 ngOnInit() {}
  toContact() {
    document.getElementById('footer').scrollIntoView();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import * as AOS from 'aos';
import {AuthService} from './components/about/authentication/auth.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularNew';
  public isMenuCollapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private viewportScroller: ViewportScroller ,
               private authService: AuthService) {
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
    AOS.init();
  }

  public onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MyOunPipe } from "./components/main/myPipe.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { MainComponent } from './components/main/main.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsComponent } from './components/news/news.component';
import { MapComponent } from './components/map/map.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SharedCourseService } from './components/shared/shared-course.service';





@NgModule({
  declarations: [
    MyOunPipe,
    AppComponent,
    FirstComponentComponent,
    MainComponent,
    FormsComponent,
    CardsComponent,
    CarouselComponent,
    NewsComponent,
    MapComponent,
    ContactsComponent,
    AboutComponent,
    WishListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ SharedCourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

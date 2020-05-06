import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { FormsComponent } from './components/forms/forms.component' ;
import { CardsComponent} from './components/cards/cards.component';
import { CarouselComponent} from './components/carousel/carousel.component';
import { ClassesComponent} from './components/classes/classes.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'first',component: FirstComponentComponent},
  { path: 'main', component: MainComponent },
  { path: 'news' , component: NewsComponent},
  { path: 'reviews' , component: FormsComponent},
  { path: 'cards' , component: CardsComponent},
  { path: 'carousel' , component: CarouselComponent},
  // { path: 'error' , component: ClassesComponent }
  // { path: 'error' , component: ClassesComponent , data: {message: 'Page not found!!!'}},    DATE STATICE
  // { path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    anchorScrolling: 'enabled'
  })],
  // imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

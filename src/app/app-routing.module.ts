import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FormsComponent } from './components/forms/forms.component' ;
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { MapComponent } from './components/map/map.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {WishListComponent} from './components/wish-list/wish-list.component';



const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: 'first' },
  { path: 'first', component: FirstComponentComponent ,
  children: [
    { path: 'carousel' , component: CarouselComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'cards' , component: CardsComponent },
    { path: 'reviews' , component: FormsComponent },
    { path: 'map' , component: MapComponent },
    { path: 'contacts' , component: ContactsComponent }
  ]
  },
   { path: 'wish' , component: WishListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    // useHash: true,
    onSameUrlNavigation: 'reload' ,
    // scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' ,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

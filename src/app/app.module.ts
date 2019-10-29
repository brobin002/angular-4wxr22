import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  FormsModule,
                      RouterModule.forRoot([
                        { path: 'list', component: ListComponent},
                        { path: 'list/:restaurantId', component: RestaurantDetailsComponent },
                        ]) ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, ListComponent, RestaurantDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ListService]
})
export class AppModule { }

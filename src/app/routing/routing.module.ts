import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from '../layout-components/home/home.component';
import { PageNotFoundComponent } from '../common-components/page-not-found/page-not-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path : 'home' ,component: HomeComponent,
      children: [
      ]},  
      {path: '' , redirectTo: 'home' , pathMatch:'full'},
      // {path: 'home' , redirectTo: 'home' , pathMatch:'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule] 
})
export class RoutingModule { }
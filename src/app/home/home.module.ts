import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"",
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }

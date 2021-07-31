import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path:"home",
  //   component: HomeComponent
  // }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation:"enabled"
    })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

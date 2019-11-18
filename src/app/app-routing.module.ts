import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule)
    }
  ]},
  {
  path: 'login',
  children: [
  {
    path: '',
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

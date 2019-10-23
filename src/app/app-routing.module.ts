import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'coursesPage', pathMatch: 'full' },
  { path: 'coursesPage', component: AppComponent },
  { path: '**', redirectTo: 'coursesPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

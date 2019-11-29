import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';


const routes: Routes = [
  {
    path: '',
    component: AddCoursePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCoursePageRoutingModule {
}

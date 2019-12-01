import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'new',
    loadChildren: () => import('../add-course-page/add-course-page.module').then(m => m.AddCoursePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule {
}

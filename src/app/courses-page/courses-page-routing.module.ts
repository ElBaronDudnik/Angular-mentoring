import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
  {
    path: 'new',
    component: AddCourseComponent,
    data: { child: 'New Course' }
  },
  {
    path: ':id',
    component: CourseItemComponent,
    data: { child: 'id' }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule {
}

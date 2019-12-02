import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
    data: { breadcrumb: 'Course' }
  },
  {
    path: 'new',
    component: AddCourseComponent,
    data: { breadcrumb: 'Courses/New Course' }
  },
  {
    path: ':id',
    component: CourseItemComponent,
    data: { breadcrumb: 'Courses/id' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule {
}

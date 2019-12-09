import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { InstrumentalSectionComponent } from './components/instrumental-section/instrumental-section.component';
import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { CourseSearchComponent } from './components/instrumental-section/course-search/course-search.component';
import { CourseAdditionComponent } from './components/instrumental-section/course-addition/course-addition.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AuthorsInputFieldComponent } from './components/add-course/authors-input-field/authors-input-field.component';
import { DateInputFieldComponent } from './components/add-course/date-input-field/date-input-field.component';
import { DurationInputFieldComponent } from './components/add-course/duration-input-field/duration-input-field.component';



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    CoursesPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoursesListComponent,
    InstrumentalSectionComponent,
    CourseItemComponent,
    CourseSearchComponent,
    CourseAdditionComponent,
    AddCourseComponent,
    AuthorsInputFieldComponent,
    DateInputFieldComponent,
    DurationInputFieldComponent,
  ],
})
export class CoursesPageModule { }

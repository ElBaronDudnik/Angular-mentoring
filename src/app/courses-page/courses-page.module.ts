import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { InstrumentalSectionComponent } from './components/instrumental-section/instrumental-section.component';
import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { CourseSearchComponent } from './components/instrumental-section/course-search/course-search.component';
import { CourseAdditionComponent } from './components/instrumental-section/course-addition/course-addition.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    CoursesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    CoursesListComponent,
    InstrumentalSectionComponent,
    CourseItemComponent,
    CourseSearchComponent,
    CourseAdditionComponent,
  ],
})
export class CoursesPageModule { }

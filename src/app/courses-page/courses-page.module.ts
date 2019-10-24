import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { InstrumentalSectionComponent } from './components/instrumental-section/instrumental-section.component';
import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { CourseSearchComponent } from './components/instrumental-section/course-search/course-search.component';
import { CourseAdditionComponent } from './components/instrumental-section/course-addition/course-addition.component';
import { DurationPipePipe } from '../shared/pipes/duration-pipe/duration-pipe.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { CoursesPageRoutingModule } from './courses-page-routing.module';



@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule,
    CoursesPageRoutingModule
  ],
  declarations: [
    CoursesListComponent,
    InstrumentalSectionComponent,
    CourseItemComponent,
    CourseSearchComponent,
    CourseAdditionComponent,
    DurationPipePipe
  ],
})
export class CoursesPageModule { }

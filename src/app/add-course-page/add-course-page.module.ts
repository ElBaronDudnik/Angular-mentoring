import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { AddCoursePageRoutingModule } from './add-course-page-routing.module';
import { DateInputFieldComponent } from './components/date-input-field/date-input-field.component';
import { DurationInputFieldComponent } from './components/duration-input-field/duration-input-field.component';
import { AuthorsInputFieldComponent } from './components/authors-input-field/authors-input-field.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AddCoursePageComponent,
    DateInputFieldComponent,
    DurationInputFieldComponent,
    AuthorsInputFieldComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AddCoursePageRoutingModule,
    FormsModule
  ]
})
export class AddCoursePageModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { InstrumentalSectionComponent } from './instrumental-section/instrumental-section.component';
import { LogoComponent } from './logo/logo.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseAdditionComponent } from './course-addition/course-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    CoursesListComponent,
    InstrumentalSectionComponent,
    LogoComponent,
    CourseItemComponent,
    CourseSearchComponent,
    CourseAdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

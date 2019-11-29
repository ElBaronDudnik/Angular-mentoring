import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageModule } from './login-page/login-page.module';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';


const routes: Routes = [
    { path: 'courses',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule)
    },
    { path: 'login',
      loadChildren: () => LoginPageModule
    },
    { path: 'add-course',
      loadChildren: () => AddCoursePageModule
    },
    { path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    { path: '**',
      redirectTo: 'login',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

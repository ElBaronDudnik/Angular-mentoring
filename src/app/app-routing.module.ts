import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page/login-page.component';


const routes: Routes = [
    { path: 'courses',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule)
    },
    { path: 'login',
      component: LoginPageComponent
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

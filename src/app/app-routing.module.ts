import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'courses',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule)
    },
    { path: 'login',
      loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
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

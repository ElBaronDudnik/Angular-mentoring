import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login-page/login/login.component';

const routes: Routes = [
    { path: 'courses',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule),
      canActivate: [AuthGuard]
    },
    { path: 'login',
      component: LoginComponent
    },
    { path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    { path: '**',
      component: PageNotFoundComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

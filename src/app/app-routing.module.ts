import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login-page/login/login.component';

const routes: Routes = [
    { path: 'courses',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule),
      canActivate: [AuthGuard]
    },
    { path: 'login',
      component: LoginComponent,
    },
    { path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: 'not-found',
      component: PageNotFoundComponent,
    },
    { path: '**',
      redirectTo: 'not-found',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

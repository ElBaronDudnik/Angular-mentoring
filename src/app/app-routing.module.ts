import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
    { path: 'courses',
      loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule),
      canActivate: [AuthGuard]
    },
    { path: '',
      redirectTo: 'login',
      pathMatch: 'full',
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

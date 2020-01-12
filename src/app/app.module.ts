import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login-page/login.module';
import { CoursesListReducer } from './courses-page/components/courses-list/store/courses-list.reducers';
import { environment } from 'environments/environment';
import { appReducer } from './shared/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './login-page/login/store/auth.effect';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CoreModule,
    SharedModule,
    LoginModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

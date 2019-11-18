import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginPageComponent } from '../login-page/login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPageComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPageComponent
  ]
})
export class CoreModule {
}

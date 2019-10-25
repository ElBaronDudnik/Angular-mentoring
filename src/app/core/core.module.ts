import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';

@NgModule({
  imports: [
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ]
})
export class CoreModule {
}
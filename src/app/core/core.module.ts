import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

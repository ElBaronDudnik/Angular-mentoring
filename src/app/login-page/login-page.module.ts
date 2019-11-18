import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginPageRoutingComponent } from './login-page-routing.module';



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LoginPageRoutingComponent
  ]
})
export class LoginPageModule { }

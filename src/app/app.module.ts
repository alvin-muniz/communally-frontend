import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TimerComponent } from './session/timer/timer.component';
import { TimePipe } from './pipes/time.pipe';
import { DisplayTimerComponent } from './session/timer/display-timer/display-timer.component';
import {SessionModule} from './session/session.module';
import {UserService} from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SessionModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

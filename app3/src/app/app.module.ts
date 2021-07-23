import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserLoginComponent} from './user.component';
import {UserLoginService} from './userLogin.service';
import {CreateCustomerComponent} from './create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

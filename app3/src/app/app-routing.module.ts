import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user.component';
import {CreateCustomerComponent} from './create.component';

const routes: Routes = [
  {path : 'login', component : UserLoginComponent},
  {path : 'createCustomer', component : CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

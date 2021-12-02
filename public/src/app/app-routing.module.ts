import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserMComponent } from './user-m/user-m.component';

const routes: Routes = [
  {path: '', 
  component: UserMComponent,
  },

  // { path: '', 
  // component: RegisterComponent,
  // outlet:'reg' },

  // { path: '', 
  // component: LoginComponent,  
  // outlet:'log'},

//!Save Route
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

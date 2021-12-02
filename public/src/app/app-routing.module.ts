import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserMComponent } from './user-m/user-m.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', 
  component: UserMComponent,
  },
  {path: 'home', 
  component: HomeComponent,
  },
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

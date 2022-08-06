import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { GetallbookComponent } from './componant/getallbook/getallbook.component';
import { LoginComponent } from './componant/login/login.component';
import { SignupComponent } from './componant/signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,
  children:[
    {
      path:'book',
      component:GetallbookComponent,
    },
  ]
  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

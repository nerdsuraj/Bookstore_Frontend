import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookViewComponent } from './componant/book-view/book-view.component';
import { CartComponent } from './componant/cart/cart.component';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { GetallbookComponent } from './componant/getallbook/getallbook.component';
import { LoginComponent } from './componant/login/login.component';
import { OrderplacedComponent } from './componant/orderplaced/orderplaced.component';
import { SignupComponent } from './componant/signup/signup.component';

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      {
        path: '', redirectTo: "dashboard/book",
        pathMatch: 'full'
      },
      {
        path: 'book',
        component: GetallbookComponent,
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'bookview/:bookId',
        component: BookViewComponent
      },
      {
        path: 'order',
        component:OrderplacedComponent
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

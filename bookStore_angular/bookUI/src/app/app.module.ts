import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { NgxStarRatingModule } from 'ngx-star-rating';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { SignupComponent } from './componant/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componant/login/login.component';
import { GetallbookComponent } from './componant/getallbook/getallbook.component';
import { SearchbookPipe } from './pipe/searchbook.pipe';
import { CartComponent } from './componant/cart/cart.component';
import { BookViewComponent } from './componant/book-view/book-view.component';
import { OrderplacedComponent } from './componant/orderplaced/orderplaced.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    GetallbookComponent,
    SearchbookPipe,
    CartComponent,
    BookViewComponent,
    OrderplacedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatRadioModule,
    NgxStarRatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

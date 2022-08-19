import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  book: any; 
  cartcount: any;
  cartbooks: any; 
  orderlist: any = [];
  book_qty = 1;
  customerForm!: FormGroup;
  submitted = false;
  step1: any;
  step1button: boolean = true;
  step2: any;
  step2button: boolean = true;

  address: any;
  firstname: any;
  lastname: any;
  mobileNo: any;
  disabled: boolean = true;
  

  constructor(private formbuilder: FormBuilder,private books: BookService,private route: Router, 
    private user: UserServiceService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.customerForm = this.formbuilder.group({
      Name: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
    this.cartlist();
  }

  cartlist(){
    this.books.usercartlist().subscribe((response: any) => {
      this.cartcount = response.data.books.length
      this.cartbooks = response.data.books;
      console.log(this.cartbooks);

      console.log(response);
      
    })
  }

  //calling the customer details 
  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);

      let payload = {
        Name:this.customerForm.value.Name,
        PhoneNumber:this.customerForm.value.PhoneNumber,
        Address: this.customerForm.value.Address,
        City: this.customerForm.value.city,
        state: this.customerForm.value.state,

      }
      this.user.useraddress(payload).subscribe((response: any) => {
        console.log(response);

      })
    }
    else {
      console.log("Please fill the form");
    }

  }

  //for negative values
  // negative(book: any) {
  //   if (this.book_qty > 1) {
  //     this.book_qty = this.book_qty - 1;
  //   }
  //   this.updatequantity(book)  
  // }

  // positive(book: any) {
  //   this.book_qty = this.book_qty + 1;
  //   this.updatequantity(book)
  // }

  updatequantity(book: any) {
   
    this.books.userupdatequantity(book.productId).subscribe((response: any) => {
      this.snackbar.open("book remove from cart!",'',{
        duration: 3000,
      })
      console.log(response);

    })
  }
  
  setStep(index: any) {
    if (index == 1) {
      if (this.cartcount >= 1) {
        this.disabled = false;
        this.step1 = true;
        this.step1button = false;

      }
    }
    else if (index == 2) {
      if (this.customerForm.valid) {
        this.step2 = true;
        this.step2button = false;
      }
    }
  }

}

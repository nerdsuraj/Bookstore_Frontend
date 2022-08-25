import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute,  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  bookdata: any;

  bookid: any;  

  feedbackArray: any;
  feedback: any;
  value: any;

  book_qty = 1;
  addtobag: boolean = true;
  quantity: boolean = false;

  bookDetails:any;
  subscription!: Subscription;

  constructor(private books: BookService, private route: Router,private activatedroute: ActivatedRoute,
    private data:DataService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId");                                                                                                    //this "bookID" we have set in the getallbooks.ts in quickview() method & we are getting/storing bookid by using activated route part and not by using local storage as done and commented above
    // console.log(this.bookid);
    this.subscription = this.data.receivedData.subscribe(responce => this.bookDetails = responce)
   
    this.getfeedback();
  }

  // getbook() {
  //   this.books.getAllBooks().subscribe((response: any) => {  
  //     response.result.forEach((element: any) => {  

  //       if (element._id == this.bookid) {  
  //         this.bookdata = element;  
  //       }
  //     });
  //   });
  // }

  //for the add to cart
  
  addtocart() {
    this.books.useraddtobag(this.bookid).subscribe((response: any) => {
      console.log(response);
      this.snackbar.open("book added to cart sucessfully!",'',{
        duration: 3000,
      })
      // this.dataservice.sendData(book)

    })
    this.route.navigateByUrl('/dashboard/cart')
  }

  //for wishlist

  addtowishlist() {
    this.books.useraddtowishlist(this.bookid).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl('/dashboard/wish')
  }

  //for the feedback from the user
  
  addfeedback() {
    let req = {
      feedback: this.feedback,
    }
    this.books.useraddfeedback(this.bookid, req).subscribe((response: any) => {
      console.log(response);
      window.location.reload();

    })

  }

  getfeedback() {
    this.books.usergetfeedback(this.bookid).subscribe((response: any) => {
      console.log( response.data.userAdded);
      this.feedbackArray = response.data.userAdded;
      this.feedbackArray.reverse();

    })

  }
}

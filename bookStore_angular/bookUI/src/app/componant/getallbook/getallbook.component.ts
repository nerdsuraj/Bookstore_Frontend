import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import {ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  book: any;
  allbooks: any = [];
  countbooks: any;
  totalLength: any;
  page: number = 1;
  bookid: any;
  searchword: any;

  constructor(private books: BookService, private route: Router,private dataservice:DataService,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dataservice.receivedData.subscribe((response: any) => {  
    //   console.log(response)

      // this.searchword = response;
      // console.log(this.searchword);

      
    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); 
    console.log(this.bookid);


    // });
    this.getallbooks()
  }

  getallbooks() {
    this.books.getAllBooks().subscribe((response: any) => {
      console.log(response.data);
      this.allbooks = response.data;

      this.countbooks = response.data.length  
      this.totalLength = response.data.length 
    });
  }

  lowtohigh() {
    this.allbooks = this.allbooks.sort((low: any, high: any) => low.price - high.price); 
  }
  hightolow() {
    this.allbooks = this.allbooks.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.allbooks.reverse();
  }
  bookview(book: any) {  
    this.dataservice.sendData(book)
    localStorage.setItem('bookId', book._id);  
    this.route.navigateByUrl('/dashboard/bookview/' + book._id) 
  }
}

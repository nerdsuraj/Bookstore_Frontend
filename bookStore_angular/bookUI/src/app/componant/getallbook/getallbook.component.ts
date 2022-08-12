import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Router } from '@angular/router';
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

  constructor(private books: BookService, private route: Router,private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((response: any) => {  
      console.log(response)

      this.searchword = response;
      console.log(this.searchword);


    });
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
    this.allbooks = this.allbooks.sort((low: any, high: any) => low.price - high.price); //.price is coming from backend api
  }
  hightolow() {
    this.allbooks = this.allbooks.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.allbooks.reverse();
  }
}

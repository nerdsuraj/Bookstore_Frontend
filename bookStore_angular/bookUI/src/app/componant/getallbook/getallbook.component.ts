import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Router } from '@angular/router';

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
  bookid: any;

  constructor(private books: BookService, private route: Router) { }

  ngOnInit(): void {
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
}

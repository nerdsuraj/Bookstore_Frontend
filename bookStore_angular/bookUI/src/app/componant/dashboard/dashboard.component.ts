import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  book: any; 
  cartcount: any;
  cartbooks: any; 
  UserName: any

  constructor(private route: Router,private dataservice:DataService,
    private books:BookService) { }

  ngOnInit(): void {
    this.UserName=window.localStorage.getItem("Name")
    this.cartlist();
  }

  //for bookstore logo

  bookstore() {
    this.route.navigateByUrl("/dashboard/book")
  }

  //for logout button

  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  searchword(search: any) {  // This is done for search pipe part in getallbooks and dashboard
    console.log(search);  //this .target.value is coming from console
    this.dataservice.searchMessage(search) // done for search pipe & this .target.value is coming from console
  }
  cartlist(){
    this.books.usercartlist().subscribe((response: any) => {
      this.cartcount = response.data.books.length
      this.cartbooks = response.data.books;
      // console.log(this.cartbooks);

      // console.log(response);
      
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router,private dataservice:DataService) { }

  ngOnInit(): void {
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
    this.dataservice.sendData(search) // done for search pipe & this .target.value is coming from console
  }
}

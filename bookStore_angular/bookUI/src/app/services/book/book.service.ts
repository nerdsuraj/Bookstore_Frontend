import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../httpservice/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService:HttpServiceService ) {
    this.token = localStorage.getItem("token");
   }
 
   getAllBooks() {

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.Get('books', true, httpOption)
  }

}

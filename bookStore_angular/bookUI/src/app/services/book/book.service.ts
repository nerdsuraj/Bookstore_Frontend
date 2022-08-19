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


//for user post the book into the cart
useraddtobag(bookID: any) {  //here we are using product id as it is used in backend API 

  let httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': " br " + this.token,  
    })
  }
  return this.httpService.Post('cart/' + bookID, {}, true, httpOption)
}




// <<<<<<<---------------------->>>>>>>>>>>>>>

  usercartlist() {

    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.Get('cart', true, httpOption)
  }

//  <<<<<<<<<<<<<-------------------->>>>>>>>>>>>>
//for update the quantity of book 

userupdatequantity(bookID: any) {
  let httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': " br " + this.token,    
    })
  }
  console.log("httpotion",httpOption)
  return this.httpService.put('cart/' + bookID, null,  true, httpOption)
}

//ispursched the book or not
purchased(){
  let httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "br " + this.token,
    })
  }
  return this.httpService.put('cart/purch/true', null, true, httpOption)
}


}

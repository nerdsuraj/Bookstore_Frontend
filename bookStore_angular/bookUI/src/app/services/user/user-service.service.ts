import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservice/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token: any;
  

  constructor(private httpService:HttpServiceService) { 
    this.token = localStorage.getItem("token");
  }

  login(reqData: any) {
    // console.log("inside the user.service", reqData);

    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.Post('users/login', reqData, false, httpOption)
  }

  //registration
  registration(reqData: any) {
    // console.log("inside the user.service", reqData);
    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.Post('users', reqData, false, httpOption)
  }


  //for the customer details 
  useraddress(data: any) {
// console.log("for token",this.token)
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
        'Authorization': " br " + this.token,  
      })
    }
    return this.httpService.Post('cust', data, true, httpOption)
  }
}

import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservice/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token: any;

  constructor(private httpService:HttpServiceService) { }

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

    let httpOption = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',  //request and response are in the format of json means key-value pair
        'Authorization': " br " + this.token,  
      })
    }
    return this.httpService.Post('cust', data, false, httpOption)
  }
}

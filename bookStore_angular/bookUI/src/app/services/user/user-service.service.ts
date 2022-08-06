import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservice/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

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
}

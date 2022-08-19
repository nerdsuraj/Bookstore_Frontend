import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  Endurl= environment.baseurl;

  constructor(private httpClient : HttpClient) { }

  Post(url: string, reqData: any, token: boolean ,httpOption: any={} )
  {
    // console.log("inside http service ",reqData);
   return this.httpClient.post(this.Endurl+url, reqData, token && httpOption)
  }

  Get(url: string ,token: boolean ,httpOption:any={})
  {
    // console.log("inside http service ",reqData);
    return this.httpClient.get(this.Endurl+url, token && httpOption)
  }
  // Put(url: any, req: any, token: boolean = false, httpOptions: any) {   // here data:any is used in context of whatever data we are sending to backend through post operation
  //   // console.log(data)
  //   return this.httpClient.put(this.Endurl+url, req, token && httpOptions)
  // }
  put(url: string,body:any, token: boolean ,httpOption:any={}) {
    return this.httpClient.put(this.Endurl+url,body,token && httpOption);
    }
  
}

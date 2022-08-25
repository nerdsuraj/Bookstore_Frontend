import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');  
  receivedData = this.messageSource.asObservable();

  private searchMessageSource = new BehaviorSubject("");
  newSearchMessage = this.searchMessageSource.asObservable();
  
  constructor() { }
  
  sendData(message: any) { 
    this.messageSource.next(message)
  }

  searchMessage(message: string) {
    this.searchMessageSource.next(message)
  }
  
 
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  private subject = new Subject<any>();

  sendEvent(){
    this.subject.next();
  }
  getEvent():Observable<any>{
    return this.subject.asObservable();
  }
}

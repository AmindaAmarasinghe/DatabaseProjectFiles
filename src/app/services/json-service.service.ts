import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
  jsonUrl = 'localhost:81/CO226/project/loginResult.json';
  constructor(private http: HttpClient) { }
  getJson(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}

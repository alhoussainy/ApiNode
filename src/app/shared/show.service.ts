import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient ) { }

  getApi(){
    return this.http.get('http://localhost:8080');
  }
}

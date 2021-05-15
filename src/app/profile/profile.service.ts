import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  user$ = this.http.get('https://gitconnected.com/v1/portfolio/saiteja');
  
}

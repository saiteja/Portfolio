import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './profile.type';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  user$ = this.http.get<Profile>('https://gitconnected.com/v1/portfolio/saiteja');
  
}

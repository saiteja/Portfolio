import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$ : Observable<any> | undefined;
  constructor(private profileService: ProfileService) { 
    this.user$ = profileService.user$;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile/profile.service';
import { Profile } from '../profile/profile.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  user$: Observable<Profile> | undefined;
  constructor(private profileService: ProfileService) { 
    this.user$ = profileService.user$;
  }

  ngOnInit(): void {
  }

}

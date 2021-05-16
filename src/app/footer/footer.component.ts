import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile/profile.service';
import { Profile } from '../profile/profile.type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  user$: Observable<Profile> | undefined;
  today: number = Date.now();
  constructor(private profileService: ProfileService) { 
    this.user$ = profileService.user$;
  }

  ngOnInit(): void {
  }

}

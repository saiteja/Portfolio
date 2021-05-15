import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  user$: Observable<any> | undefined;
  today: number = Date.now();
  constructor(private profileService: ProfileService) { 
    this.user$ = profileService.user$;
  }

  ngOnInit(): void {
  }

}

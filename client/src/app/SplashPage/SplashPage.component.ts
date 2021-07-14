import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CacheService } from '../_services/cache.service';

@Component({
  selector: 'app-splashpage',
  templateUrl: './SplashPage.component.html',
  styleUrls: ['./SplashPage.component.css']
})
export class SplashPageComponent implements OnInit {

  constructor(private cache: CacheService) { }

  ngOnInit() {
    localStorage.clear();
    this.cache.setBaseUrl(environment.apiUrl);
    this.cache.setUserLoginStatus('Visitor');
    console.log('Splash Pre');
  }

}

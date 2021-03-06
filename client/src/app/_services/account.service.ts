import { BehaviorSubject } from 'rxjs';
import { UserDto } from './../_dtos/userDto';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CacheService } from './cache.service';
import { UserAuthenticatedDto } from '../_dtos/userAuthenticatedDto';
import { Router } from '@angular/router';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {
  baseUrl: string;
  accountLoginKnown = new BehaviorSubject('');
  accountLoginSuccess = new BehaviorSubject(false);

  constructor(private http: HttpClient, private cache: CacheService,
    private toastr: ToastrService, private route: Router) {
    this.baseUrl = this.cache.getBaseUrl();
    }
  
  ngOnInit(): void {
    this.baseUrl = this.cache.getBaseUrl();
  }

  async loginAsync(user: string, pass: string) {
    this.baseUrl = this.cache.getBaseUrl();

    var dto = new UserAuthenticatedDto();

    await this.http.post<UserAuthenticatedDto>(this.baseUrl + 'account/login', dto).subscribe(
      (response) => {
        this.toastr.success("Logged In Successfully", "", { positionClass: 'toast-bottom-right' });
        var username = response.username ?? '';
        var token = response.token ?? '';
        // var roles = response.roleslist ?? '';
        // var knownAs = response.knownAs ?? '';
        if (token === '') this.toastr.error('User has no JWT token');
        // if (roles === '') this.toastr.error('User has no assigned roles');

        this.cache.cacheUser(username, token );
        var rolesEntries: any = localStorage.getItem('roles');
        var rolesEntryList = JSON.parse(rolesEntries);
        for (var i = 0; i < rolesEntryList.length; i++) {
          this.cache.setUserLoginStatus(rolesEntryList[i]);
        }
        // this.cache.StorageSet('knownAs', knownAs);
        // this.accountLoginKnown.next(knownAs);
        this.route.navigateByUrl('/splashPagePost');
      }, error => {
        this.toastr.error("Invalid Login", "", { positionClass: 'toast-bottom-right' });
        this.cache.setUserLoginStatus('NavVisitor');
        this.accountLoginKnown.next('');
        this.route.navigateByUrl('/splashPage');
      }
  );
  }
}

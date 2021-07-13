import { CacheService } from './../_services/cache.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss']
})
export class NavBarComponent implements OnInit {
  messageText = '';
  welcomeName = '';
  loginForm : any;
  loginStatus : any;

  constructor(
    public account: AccountService, private fb: FormBuilder,
              public http: HttpClient, public cache: CacheService,
              public router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    });
    
    this.account.accountLoginKnown.subscribe(knownAs => {
      this.welcomeName = knownAs;
    });

    this.account.accountLoginSuccess.subscribe(successStatus => {
      this.loginStatus = successStatus;
      // if (this.loginStatus) {
      //   this.router.navigateByUrl('/splashPagePost');
      // } else {
      //   this.router.navigateByUrl('/splashPage');
      // }
    })
  }

  login() {
    var username = this.loginForm.get('username').value;
    var password = this.loginForm.get('password').value;
    this.loginForm.get('username').setValue('');
    this.loginForm.get('password').setValue('');

    this.account.loginAsync(username, password);
  }

  logout()
  {
    this.loginForm.get('username').setValue('');
    this.loginForm.get('password').setValue('');
    this.cache.setUserLoginStatus('NavVisitor');
    this.cache.StorageClearLogin();
    this.cache.StorageSetBool('loggedIn', false);
  }

  showHelp() {
    
  }

}

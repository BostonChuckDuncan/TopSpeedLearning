import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { HttpClient } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  baseUrl? : any;
  baseUrlS? : any;

  constructor(private http: HttpClient, private route: Router) {}

  cacheUser(
    userName: string,
    token: string,
    rolesList: string,
    knownAs: string
  ) {
    localStorage.setItem('userName', userName);
    var decodedToken = JSON.parse(atob(token.split('.')[1]));
    localStorage.setItem('token', decodedToken);
    localStorage.setItem('roles', rolesList);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('knownAs', knownAs);
  }

  removeUser() {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('roles');
    localStorage.removeItem('knownAs');
  }

  setBaseUrl(url: string) {
    localStorage.setItem('baseurl', url);
  }

  getBaseUrl(): string {
    return localStorage.getItem('baseurl') ?? '';
  }

  // setIsUserAdmin() {
  //   const jsonUser = localStorage.getItem('user');
  //   if (jsonUser) {
  //     const user = JSON.parse(jsonUser);
  //     const status = user.systemAdmin === true ? 'Admin' : 'User';
  //     this.setUserLoginStatus(status);
  //     return user.systemAdmin;
  //   } else {
  //     return false;
  //   }
  // }

  setUserLoginStatus(status: string) {
    this.StorageSetBool('User', false);
    this.StorageSetBool('Visitor', false);
    this.StorageSetBool('Admin', false);

    switch (status.toLowerCase()) {
      case 'user':
        this.StorageSetBool('User', true);
        break;
      case 'visitor':
        this.StorageSetBool('Visitor', true);
        break;
      case 'admin':
        this.StorageSetBool('Admin', true);
        this.StorageSetBool('User', true);
        break;
      case 'none':
        break;
    }
  }

  getUserLoginStatus() {
    if (this.StorageGetBool('User') === true) {
      return 'User';
    } else {
      if (this.StorageGetBool('Visitor') === true) {
        return 'Visitor';
      } else {
        if (this.StorageGetBool('Admin') === true) {
          return 'Admin';
        } else {
          return 'none';
        }
      }
    }
  }

  loggedOut() {
    this.removeUser();
    this.setUserLoginStatus('Visitor');
    this.route.navigate(['/splashPage']);
  }

  StorageSet(key: string, value: string) {
    // storage values must be strings
    localStorage.setItem(key, value); // store the value as a string
  }
  StorageSetBool(key: string, value: boolean) {
    // storage values must be strings
    const storeValue = value ? 'true' : 'false';
    localStorage.setItem(key, storeValue); // store the value as a string
    return value; // return the original value
  }
  StorageSetNumber(key: string, value: number) {
    const szNumber = value.toString();
    localStorage.setItem(key, szNumber);
  }

  StorageGet(key: string) {
    const result = localStorage.getItem(key);
    return result;
  }
  StorageGetBool(key: string) {
    const result = localStorage.getItem(key);
    const retVal = result === 'true' ? true : false;
    return retVal;
  }
  StorageGetNumber(key: string) {
    const num = localStorage.getItem(key) ?? '';
    const szNum = num.toString();
    return szNum;
  }

  StorageDelete(key: string) {
    localStorage.removeItem(key);
  }

  StorageClearLogin() {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('knownAs');
  }
}

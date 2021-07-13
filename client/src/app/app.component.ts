import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './_services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TopSpeedLearning';
  users: any;

  constructor(private http: HttpClient, private cache: CacheService) { }

  ngOnInit(): void {
    this.cache.setBaseUrl("https://localhost:5001/api/");
    this.cache.setUserLoginStatus('Visitor');
//    this.getUsers();
  }

  // getUsers() {
  //     		this.http.get('https://localhost:5001/api/users').subscribe( response => {
	// 		this.users = response;
	// 		}, error => { console.log(error); });
  // }
}

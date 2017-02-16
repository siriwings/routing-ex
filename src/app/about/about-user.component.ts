import {Component, OnInit} from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';

import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

@Component({
  template: `
<a (click)="goBack()" class="waves-effect waves-light btn">Go Back</a>

<div *ngIf="user">
<h1>{{user.name}} ({{user.username}})</h1>
</div>`
})
export class AboutUserComponent implements OnInit {
  //user; //ngIf에 쓸 불린 값.
  user:User;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service:UserService
  ) {}

  ngOnInit() {
    //grab the current username
    let username = this.route.snapshot.params['username'];

    this.service.getUser(username).then(user=>this.user = user);
/*
    this.user = users.find(function (user) {  //function의 파라미터 user는 about.component에서 받아온 파라미터.
      //users에서 user를 찾은 다음, user.username과 username이 같다면 true 반환.
      return user.username === username;

    });
    console.log(username);
    */
  }


  goBack(){
    //window.history.back();
    this.router.navigate(['/about']);
  }
}

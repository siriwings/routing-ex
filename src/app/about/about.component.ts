import { Component ,OnInit} from '@angular/core';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'about-page',
  template: `
    <div class="row" *ngIf="users">
        <div class="col s12 m7" *ngFor="let user of users">
          <div class="card">
            <div class="card-image">
              <img [src]="user.avatar">
              <span class="card-title">{{user.name}}</span>
            </div>
            <div class="card-action">
            
              <a [routerLink]="['/about',user.username]">{{user.username}}</a>
            </div>
          </div>
        </div>
      </div>
   
  `

})
export class AboutComponent implements OnInit {
  users:User[];

  constructor(private service:UserService){}

  ngOnInit(){
    this.service.getUsers().then(users=>this.users=users);
  }
}

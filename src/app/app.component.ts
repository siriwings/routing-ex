import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


/*
 @Component({
 selector: 'app-root',
 template: `
 <header>
 <nav>
 <div class="nav-wrapper">
 <a href="#" class="brand-logo left">My app</a>
 <ul class="right">
 <li><a routerLink="/">home</a></li>
 <li><a routerLink="/about">about</a></li>
 <li><a routerLink="/contact">contact</a></li>
 </ul>
 </div>
 </nav>
 </header>
 <main>
 <router-outlet></router-outlet>
 </main>

 `, styleUrls: ['./app.component.css']
 })
 */

export class AppComponent {
  message = 'app works!';
}

import { Component, OnInit } from '@angular/core';

@Component({
  template:`
<div>
  <h1>404 Not Found</h1>
  <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">home</a>.</p>
</div>
`
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

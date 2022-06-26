import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public auth = true;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  showMenu(): boolean{
    if(this.route.url == '/login' || this.route.url == '/register'){
      return false
    }
    return true
  }
}

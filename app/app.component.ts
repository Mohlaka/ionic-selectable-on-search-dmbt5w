import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages';

@Component({
  templateUrl: 'app.html'
})
export class AppComponent {
  rootPage: any = HomePage;

  constructor(private platform: Platform) {
    this.platform.ready();
  }
}

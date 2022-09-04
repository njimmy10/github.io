import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    window.open('uorderlb://request?jjs4', '_blank');
  }
  title = 'test-an';
}

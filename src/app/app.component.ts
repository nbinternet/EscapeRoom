import {Component} from '@angular/core';
import {ViewChild} from "@angular/core";
import {CountdownComponent} from "ngx-countdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Can you escape from Zombie Glasgow!';

  @ViewChild('cd', {static: false}) private countdown: CountdownComponent;

  constructor() {
  }

  handleEvent(event) {

  }
}

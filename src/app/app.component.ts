import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {ViewChild} from "@angular/core";
import {TimerControlService} from "./services/timer-control.service";
import {CountdownComponent} from "ngx-countdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Can you escape from Zombie Glasgow!';

  @ViewChild('cd', {static: false}) private countdown: CountdownComponent;

  constructor(private timerService: TimerControlService) {
    timerService.announcement$.subscribe(
      announcment => {
        this.countdown.begin();
      });
  }

  ngOnInit(): void {
  }

  handleEvent(event) {

  }
}

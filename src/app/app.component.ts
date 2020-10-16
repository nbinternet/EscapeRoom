import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {ViewChild} from "@angular/core";
import {TimerControlService} from "./services/timer-control.service";
import {CountdownComponent} from "ngx-countdown";
import {CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Can you escape from Zombie Glasgow?';
  private timerService: TimerControlService;

  @ViewChild('cd', {static: false}) private countdown: CountdownComponent;

  constructor(private _timerService: TimerControlService) {
    this.timerService = _timerService;

    this.timerService.announcement$.subscribe(
      announcment => {
        if (announcment == this.timerService.DO_START) {
          this.countdown.begin();
        } else if (announcment == this.timerService.DO_END) {
          this.countdown.stop();
        }
      });
  }

  ngOnInit(): void {
  }

  handleEvent(event: CountdownEvent) {
    if (event.action == "stop") {
      this.timerService.update(event.left)
    }
  }
}

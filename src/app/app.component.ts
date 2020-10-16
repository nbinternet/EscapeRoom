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
  asset = '../assets/title1.PNG';
  title = 'Can you escape from Zombie Glasgow?';
  private timerService: TimerControlService;
  config = {
    demand: true,
    leftTime: 20,      // 1800,
    notify: [10],     // 300
    format: 'm:ss'
  }
  extraDetail = '';

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

    switch (AppComponent.getRndInteger(0, 2)) {
      case 0 :
        this.asset = '../assets/title1.PNG';
        break;
      case 1 :
        this.asset = '../assets/title2.PNG';
        break;
      case 2 :
        this.asset = '../assets/title3.PNG';
        break;
    }
  }

  ngOnInit(): void {
  }

  private static getRndInteger(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleEvent(event: CountdownEvent) {
    if (event.action == "stop") {
      this.timerService.update(event.left);
    }

    if (event.action == "done") {
      AppComponent.changeElement("mainBody");
      AppComponent.changeElement("mainhtml");
      this.asset = '../assets/title4.png';
      this.extraDetail = '';
    }

    if (event.action == "notify") {
      this.extraDetail = 'Less than 5 minutes to go';
    }
  }

  private static changeElement(id): void {
    var el = document.getElementById(id);
    el.style.backgroundColor = "#590039";
  }
}

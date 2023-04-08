import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { TeamDetailsService } from "./services/team-details.service";
import { TimerControlService } from "./services/timer-control.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
  public timerControlService: TimerControlService,
  public teamDetailsService: TeamDetailsService,
  public router: Router
  ){}

  ngOnInit() {
  this.router.navigate([''])
  }
}
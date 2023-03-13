import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamDetailsService } from "../../services/team-details.service";
import { TimerControlService } from "../../services/timer-control.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(
    public teamDetailsService: TeamDetailsService, 
    public timerControlService: TimerControlService,
    public router: Router
    ) {
    this.teamDetailsService.reset();
    this.timerControlService.reset();
  }
  
  start(value: string) {
    if(value){
      this.teamDetailsService.teamName = value;
      this.router.navigate(['/towermap']);
      this.timerControlService.start();
    }
  }
}

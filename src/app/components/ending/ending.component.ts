import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {TimerControlService} from "../../services/timer-control.service";

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent implements OnInit {
  constructor(
    public teamDetailsService: TeamDetailsService,
    public timerControlService: TimerControlService
  ){}
  
  ngOnInit(): void {
    this.timerControlService.stop();
  }
}

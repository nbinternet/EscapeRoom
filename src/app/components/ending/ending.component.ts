import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {TimerControlService} from "../../services/timer-control.service";

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent implements OnInit {
  teamDetailsService: TeamDetailsService;
  timerControlService: TimerControlService;

  constructor(private _teamDetailsService: TeamDetailsService, private _timerControlService: TimerControlService) {
    this.teamDetailsService = _teamDetailsService;
    this.timerControlService = _timerControlService;
  }

  ngOnInit(): void {
    this.endCounter();
  }

  private endCounter() {
    this.timerControlService.announcement(this.timerControlService.DO_END);
  }
}

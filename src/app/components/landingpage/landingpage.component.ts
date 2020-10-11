import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {TimerControlService} from "../../services/timer-control.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  incorrectCount: number = 0;
  teamDetailsService: TeamDetailsService;
  timerControlService: TimerControlService;

  constructor(private _teamDetailsService: TeamDetailsService, private _timerControlService: TimerControlService) {
    this.teamDetailsService = _teamDetailsService;
    this.timerControlService = _timerControlService;
  }

  ngOnInit(): void {
  }

  teamUpdate(value: string) {
    this.teamDetailsService.teamName = value;
  }

  pinUpdate(value: string) {
    this.answer = value;
    if (this.answer.trim() == "1010021") {
      this.correctAnswer = true;
      this.incorrectCount = 0;
    } else {
      this.incorrectCount++;
    }
  }

  onStart() {
    this.startCounter();
  }

  private startCounter() {
    this.timerControlService.announcement(this.timerControlService.DO_START);
  }
}

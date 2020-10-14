import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-puzzletaxi',
  templateUrl: './puzzletaxi.component.html',
  styleUrls: ['./puzzletaxi.component.css']
})
export class PuzzletaxiComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint: boolean = false;
  teamDetailsService: TeamDetailsService;
  incorrect: boolean = false;
  config =
    {
      leftTime: 60,
      format: ''
    };

  constructor(private _teamDetailsService: TeamDetailsService) {
    this.teamDetailsService = _teamDetailsService;
  }

  ngOnInit(): void {
  }

  update(value: string) {
    this.answer = value;
    if (this.answer.trim() == "1729") {
      this.correctAnswer = true;
      this.incorrect = false;
      this.showHint = false;
    } else {
      this.incorrect = true;
    }
  }

  handleEvent(event: CountdownEvent) {
    if (event.action == "done") {
      this.showHint = true;
      this.incorrect = false;
    }
  }
}

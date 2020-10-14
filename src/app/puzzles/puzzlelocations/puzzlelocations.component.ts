import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-puzzlelocations',
  templateUrl: './puzzlelocations.component.html',
  styleUrls: ['./puzzlelocations.component.css']
})
export class PuzzlelocationsComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint1: boolean = false;
  showHint2: boolean = false;
  teamDetailsService: TeamDetailsService;
  incorrect: boolean = false;
  config =
    {
      notify: [180],      // 2 mins
      leftTime: 240,      // 4 mins
      format: ''
    };

  constructor(private _teamDetailsService: TeamDetailsService) {
    this.teamDetailsService = _teamDetailsService;
  }

  ngOnInit(): void {
  }

  update(value: string) {
    this.answer = value;
    if (/^.*science\s*centre.*$/.test(this.answer.toLowerCase())) {
      this.correctAnswer = true;
      this.incorrect = false;
      this.showHint1 = false;
      this.showHint2 = false;
    } else {
      this.incorrect = true;
    }
  }

  handleEvent(event: CountdownEvent) {
    if (event.action == "notify") {
      this.showHint1 = true;
      this.showHint2 = false;
      this.incorrect = false;
    }

    if (event.action == "done") {
      this.showHint1 = false;
      this.showHint2 = true;
      this.incorrect = false;
    }
  }
}

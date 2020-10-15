import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-puzzleapocalypticmap',
  templateUrl: './puzzleapocalypticmap.component.html',
  styleUrls: ['./puzzleapocalypticmap.component.css']
})
export class PuzzleapocalypticmapComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint1: boolean = false;
  showHint2: boolean = false;
  teamDetailsService: TeamDetailsService;
  incorrect: boolean = false;
  config =
    {
      notify: [120],    // 2 mins
      leftTime: 240,    // 4 mins
      format: ''
    };

  constructor(private _teamDetailsService: TeamDetailsService) {
    this.teamDetailsService = _teamDetailsService;
  }

  ngOnInit(): void {
  }

  update(value: string) {
    this.answer = value;
    if (this.answer.trim().toLowerCase() == "hillhead") {
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

import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-puzzlplants',
  templateUrl: './puzzleplants.component.html',
  styleUrls: ['./puzzleplants.component.css']
})
export class PuzzleplantsComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint: boolean = false;
  teamDetailsService: TeamDetailsService;
  incorrect: boolean = false;
  config =
    {
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
    if (/^(?=.*0)(?=.*2)(?=.*6)(?=.*7)(?=.*9)(?!.*1)(?!.*3)(?!.*4)(?!.*5)(?!.*8).*$/.test(this.answer)) {
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

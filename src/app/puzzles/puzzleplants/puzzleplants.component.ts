import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";

@Component({
  selector: 'app-puzzlplants',
  templateUrl: './puzzleplants.component.html',
  styleUrls: ['./puzzleplants.component.css']
})
export class PuzzleplantsComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint: boolean = false;
  incorrectCount: number = 0;
  teamDetailsService: TeamDetailsService;

  constructor(private _teamDetailsService: TeamDetailsService) {
    this.teamDetailsService = _teamDetailsService;
  }

  ngOnInit(): void {
  }

  update(value: string) {
    this.answer = value;
    if (/^(?=.*0)(?=.*2)(?=.*6)(?=.*7)(?=.*9)(?!.*1)(?!.*3)(?!.*4)(?!.*5)(?!.*8).*$/.test(this.answer)) {
      this.correctAnswer = true;
      this.incorrectCount = 0;
      this.showHint = false;
    } else {
      this.incorrectCount++;
    }

    if (this.incorrectCount > 3) {
      this.showHint = true;
    }
  }
}

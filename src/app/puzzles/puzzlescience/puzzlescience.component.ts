import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";

@Component({
  selector: 'app-puzzlescience',
  templateUrl: './puzzlescience.component.html',
  styleUrls: ['./puzzlescience.component.css']
})
export class PuzzlescienceComponent implements OnInit {
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
    if (this.answer.trim().toLowerCase() == "irn bru") {
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

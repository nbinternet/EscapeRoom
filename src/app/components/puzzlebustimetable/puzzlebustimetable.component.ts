import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-puzzlbustimetable',
  templateUrl: './puzzlebustimetable.component.html',
  styleUrls: ['./puzzlebustimetable.component.css']
})
export class PuzzlebustimetableComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint: boolean = false;
  incorrectCount: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  update(value: string) {
    this.answer = value;
    if (this.answer.trim() == "1654") {
      this.correctAnswer = true;
      this.incorrectCount = 0;
      this.showHint = false;
    } else {
      this.incorrectCount++;
    }

    if (this.incorrectCount > 3) {
      this.showHint = true;
      this.incorrectCount = 0;
    }
  }
}

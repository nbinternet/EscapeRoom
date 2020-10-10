import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-puzzledna',
  templateUrl: './puzzledna.component.html',
  styleUrls: ['./puzzledna.component.css']
})
export class PuzzlednaComponent implements OnInit {
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
    if (this.answer.trim().toLowerCase() == "plants") {
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

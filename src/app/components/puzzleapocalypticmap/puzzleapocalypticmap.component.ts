import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-puzzleapocalypticmap',
  templateUrl: './puzzleapocalypticmap.component.html',
  styleUrls: ['./puzzleapocalypticmap.component.css']
})
export class PuzzleapocalypticmapComponent implements OnInit {
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
    if (this.answer.trim().toLowerCase() == "hillhead") {
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

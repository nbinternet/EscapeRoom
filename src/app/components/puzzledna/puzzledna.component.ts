import {Component, OnInit} from '@angular/core';
import {locationNames} from "../../models/locationNames";
import {LocationTrackerService} from "../../services/location-tracker.service";

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

  locationTracker: LocationTrackerService;

  constructor(private _locationTracker: LocationTrackerService) {
    this.locationTracker = _locationTracker
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

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.BotanicGardens, true);
  }
}

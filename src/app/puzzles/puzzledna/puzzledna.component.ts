import {Component, OnInit} from '@angular/core';
import {locationNames} from "../../models/locationNames";
import {LocationTrackerService} from "../../services/location-tracker.service";
import {TeamDetailsService} from "../../services/team-details.service";
import {CountdownEvent} from "ngx-countdown";

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
  teamDetailsService: TeamDetailsService;
  incorrect: boolean = false;
  config =
    {
      leftTime: 240,
      format: ''
    };

  constructor(private _locationTracker: LocationTrackerService, private _teamDetailsService: TeamDetailsService) {
    this.locationTracker = _locationTracker
    this.teamDetailsService = _teamDetailsService;
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

    if (this.incorrectCount > 2) {
      this.showHint = true;
      this.incorrectCount = 0;
    }
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.BotanicGardens, true);
  }

  handleEvent(event: CountdownEvent) {
    if (event.action == "done") {
      this.showHint = true;
      this.incorrect = false;
    }
  }
}

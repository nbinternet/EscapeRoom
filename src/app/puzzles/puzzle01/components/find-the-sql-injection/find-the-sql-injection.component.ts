import { Component } from '@angular/core';
import { locationNames } from 'src/app/models/locationNames';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { TeamDetailsService } from 'src/app/services/team-details.service';
import {CountdownEvent} from "ngx-countdown";

@Component({
    selector: 'app-find-the-sql-injection',
    templateUrl: './find-the-sql-injection.component.html',
    styleUrls: ['./find-the-sql-injection.component.css']
})
export class FindTheSqlInjectionComponent {
    public isCorrect: boolean = false;
    public isWrong: boolean = false;
    public wrongMessage: string = '';
    showHint: boolean = false;
  config = {
    leftTime: 120, //2 mins
    format: ''
  };


    constructor(private teamDetailsService: TeamDetailsService, private _locationTracker: LocationTrackerService) { }

    nextClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle01Part1, true)
    }

    updateAnswer(value: string) {
        value = value.trim();
        if (value == '25') {
            this.isCorrect = true;
            this.isWrong = false;
            this.showHint = false;
        }
        else{
            this.teamDetailsService.decrementScore();
            this.isCorrect = false;
            this.isWrong = true;
            if (value === '5' || value === '6'){
                this.wrongMessage =
                    `Hardcoding database login credentials is really bad practice,
                    but this is not how the hackers gained access.`;
            }
            else if (value === '35') {
                this.wrongMessage =
                    `Not encrypting passwords in a database is not very secure,
                    but this is not how the hackers gained access.`;
            }
            else {
                this.wrongMessage = 'No vulnerability here!';
            }
        }
    }

  handleEvent(event: CountdownEvent) {
    if (event.action === 'done') {
      this.showHint = true;
      this.isWrong = false;
    }
  }
}

import { Component } from '@angular/core';
import { locationNames } from 'src/app/models/locationNames';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { TeamDetailsService } from 'src/app/services/team-details.service';
import { Puzzle03Service } from '../../puzzle03.service';
import {CountdownEvent} from "ngx-countdown";

@Component({
    selector: 'app-xxs-solution',
    templateUrl: './xxs-solution.component.html',
    styles: ['./xxs-solution.component.css']
})
export class XxsSolutionComponent {
  showHint: boolean = false;
  config = {
    leftTime: 120, //2 mins
    format: ''
  };

  get allAnswersFound(): boolean {
        let answersFound = this.puzzleService.xxsPreventionOptions.filter((option) => {
            return option.checked && option.isCorrect;
        })
        return answersFound.length === 4;
    }

    constructor(public puzzleService: Puzzle03Service, private _teamDetailsService: TeamDetailsService, private _locationTracker: LocationTrackerService){ }

    optionClicked(option: any) {
        if (!option.checked) {
            option.checked = true;

            if (!option.isCorrect) {
                this._teamDetailsService.decrementScore();
            }
        }
    }

    nextClicked(){
        this._locationTracker.currentStatus.set(locationNames.Puzzle03Part2, true);
    }

  handleEvent(event: CountdownEvent) {
    if (event.action === 'done'){
      this.showHint = true;
    }
  }

}

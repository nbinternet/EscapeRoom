import { Component } from "@angular/core";
import { locationNames } from "src/app/models/locationNames";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { TeamDetailsService } from "src/app/services/team-details.service";
import {CountdownEvent} from "ngx-countdown";

@Component({
    selector: 'app-sql-solution',
    templateUrl: './sql-solution.component.html',
    styleUrls: ['./sql-solution.component.css']
})
export class SqlSolutionComponent {
    public isCorrect: boolean = false;
    public isWrong: boolean = false;
    showHint: boolean = false;
    config = {
      leftTime: 120, //2 mins
      format: ''
    };


  public description: string =
    `Vulnerability detected! Now we need your help to prevent it. The Glasgow Science Centre team have replaced the vulnerable SQL query with the following prepared statement.`;

    public preparedStatementExplanation: string =
    `The prepared statement will bind the email input to the SQL as a string, stripping it from any malicious code that could be run on the server.`;

    public correctMessage: string =
    `Parameterising the SQL query reduces the risk of SQL injection (see the Handbook for further details).`;

    private _answerRegex: RegExp =
    /select[\s]+(email,(\s?)password|\*)[\s]+from[\s]+admins[\s]+where[\s]+email(|\s)+=(|\s)+\?(|[\s])+[;]?/;

    constructor(
        private _teamDetailsService: TeamDetailsService,
        private _locationTracker: LocationTrackerService
    ){}

    nextClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle01Part2, true);
    }

    updateAnswer(value: string): void {
        if (this._answerRegex.test(value.toLowerCase())) {
            this.isCorrect = true;
            this.isWrong = false;
            this.showHint = false;
        }else{
            this.isCorrect = false;
            this.isWrong = true;
        }
    }

  handleEvent(event: CountdownEvent) {
    if (event.action === 'done'){
      this.showHint = true;
      this.isWrong = false;
    }
  }
}

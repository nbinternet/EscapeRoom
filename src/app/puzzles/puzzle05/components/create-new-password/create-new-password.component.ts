import { Component } from "@angular/core";
import { TeamDetailsService } from "src/app/services/team-details.service";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { locationNames } from "src/app/models/locationNames";

@Component({
    selector: 'app-create-new-password',
    templateUrl: './create-new-password.component.html',
    styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent {
    teamDetailsService: TeamDetailsService;
    locationTracker: LocationTrackerService;
    firstTime: boolean = true;
    password: string;
    completeRegex: boolean = false;
    lowercaseRegex: RegExp = /[a-z]/;
    capRegex: RegExp = /[A-Z]/
    specialCharRegex: RegExp = /[!"£$%^&*()@~#'?=-_]/;
    numberRegex: RegExp = /[0-9]/;
    incorrect: boolean = true;
    capLetter: boolean = false;
    number: boolean = false;
    specialChar: boolean = false;
    lowercaseLetter: boolean = false;
    complete: boolean = false;
    length: boolean = false;
    
    constructor(
        private _locationTracker: LocationTrackerService,
    ) {}

    nextClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle05Part1, true);
    }

    requirementsFound(value: string) : void {
        this.firstTime = false;
        this.incorrect = true;
        this.capLetter = false;
        this.number = false;
        this.length = false;
        this.specialChar = false;
        this.lowercaseLetter = false;
        this.complete = false;

        if (this.capRegex.test(value)) {
            this.capLetter = true;
            this.incorrect = false;
        }
        if (this.specialCharRegex.test(value)) {
            this.specialChar = true;
            this.incorrect = false;
        }
        if (this.numberRegex.test(value)) {
            this.number = true;
            this.incorrect = false;
        }
        if (value.length >= 16) {
            this.length = true;
            this.incorrect = false;
        }
        if (this.lowercaseRegex.test(value)) {
            this.lowercaseLetter = true;
            this.incorrect = false;
        }
        if (this.capLetter == true && this.specialChar == true && this.number == true && this.lowercaseLetter == true && this.length == true) {
            this.complete = true;
            this.incorrect = false;
        }
    }
}
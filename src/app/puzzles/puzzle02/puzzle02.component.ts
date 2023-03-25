import { Component } from "@angular/core";
import { CountdownEvent } from "ngx-CountdownEvent";
import { locationNames } from "src/app/models/locationNames";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { TeamDetailsService } from "src/app/services/team-details.service";

@Component({
    selector: 'app-puzzle02',
    templateUrl: './puzzle02.component.html',
    styleUrls: ['./puzzle02.component.css']
})
export class Puzzle02Component {
    showHint: boolean = false;
    correctMachine: string = '4';
    correctFeatureRegexOne: RegExp = /(update|patch|upgrade)(.*)os(|\s*|\w*)/;
    correctFeatureRegexTwo: RegExp = /(|\s*|\w*)os(|\s*|\w*)(update|patch|upgrade)(|\s*|\w*)/;
    errors: string[] = [];
    introduction: string = `Hackers have taken control of the lift which means the people at the top of the Tower cannot get down.
    The Science Centre's lift operation is controlled by a server on the network.
    The diagram below shows the nodes that are connected to this network. One of these nodes contains the controls to the lifts.
    A hacker has managed to access one of the nodes on the network by exploiting a vulnerability.\n\n
    Find the machine with the vulnerability and the solution. You can open the terminal of a machine by clicking on the server in the diagram.`;

    constructor(
        private _teamDetailsService: TeamDetailsService,
        private _locationTracker: LocationTrackerService
    ){}

    get machineDone(): boolean {
        return this._locationTracker.getPuzzleCheckpointIfApplicable(locationNames.Puzzle02) != -1
    }

    get featureDone(): boolean {
        return this._locationTracker.getPuzzleCheckpointIfApplicable(locationNames.Puzzle02) == 2
    }

    handleEvent(event: CountdownEvent) {
        if (event.action == 'done') {
            this.showHint = true;
        }
    }
    answerMachine(value: string){
        if (value == this.correctMachine) {
            this._locationTracker.registerCheckpointForPuzzle(locationNames.Puzzle02, 1);
            this.errors = [];
        }else {
            this._teamDetailsService.decrementScore();
            this.errors = ['This machine is not vulnerable'];
        }
    }

    answerFeature(value: string){
        let formattedValue: string = value.toLocaleLowerCase();
        if (this.correctFeatureRegexOne.exec(formattedValue) || this.correctFeatureRegexTwo.exec(formattedValue)){
            this._locationTracker.registerCheckpointForPuzzle(locationNames.Puzzle02, 2);
            this.errors = [];
        }else{
            this.errors = ['That is not the correct action. Have another look and try again'];
        }
    }

    returnToMapClicked(){
        this._locationTracker.currentStatus.set(locationNames.Puzzle02, true)
    }
}
    
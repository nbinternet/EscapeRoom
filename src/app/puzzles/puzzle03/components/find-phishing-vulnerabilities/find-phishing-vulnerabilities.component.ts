import { Component, OnInit } from "@angular/core";
import { locationNames } from "src/app/models/locationNames";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { PhishingSignsEnum } from "../../constants/phishing-signs.enums";
import { Puzzle03Service } from "../../puzzle03.service";
@Component({
    selector: 'app-find-phishing-vulnerabilities',
    templateUrl: './find-phishing-vulnerabilities.component.html',
    styleUrls: ['./find-phishing-vulnerabilities.component.css']
})
export class FindPhishingVulnerabilitiesComponent implements OnInit {
    public isWrong: boolean = false;
    public signsFound: any[] = [];
    public phishingSigns: any;

    public description: string =
    `The hackers have written a script that exposes cookie data when clicking on a fake Glasgow Science Centre login.\n
    They have created some phishing emails that they sent to Glasgow Science Centre staff to get them to click on this fake link.\n
    Can you help then team at the Glasgow Science Centre identify some warning signs in the phishing email?`;

    public emailLabel: string =
    'Click on different parts of the email to identify phishing warning signs (there are 6 in total).';
    
    public maliciousLink: string = `https://www.glasgow-science-centre.com/glasgowsecurity/loginnow/status?message=<script src="loginnow.js"></script>`;

    get allSignsFound(): boolean {
        return this.signsFound.length === 6;
    }

    constructor(
        public puzzleService: Puzzle03Service,
        private _locationTracker: LocationTrackerService

    ){}

    ngOnInit(): void {
        this.signsFound = this.puzzleService.signsFound;
        this.phishingSigns = this.puzzleService.phishingSigns;
    }
    nextClicked(){
        this._locationTracker.currentStatus.set(locationNames.Puzzle03Part1, true);
    }

    phishingSignFound(sign: string){
        switch(sign){
            case PhishingSignsEnum.theRequest:
                this._signFound(this.phishingSigns.theRequest);
                break;
            case PhishingSignsEnum.language:
                this._signFound(this.phishingSigns.language);
                break;
            case PhishingSignsEnum.content:
                this._signFound(this.phishingSigns.content);
                break;   
            case PhishingSignsEnum.sender:
                this._signFound(this.phishingSigns.sender);
                break;   
            case PhishingSignsEnum.links:
                this._signFound(this.phishingSigns.links);
                break; 
            case PhishingSignsEnum.formatting:
                this._signFound(this.phishingSigns.formatting);
                break;  
            default:
                this.isWrong = true;                          
        }
    }

    private _signFound(sign: any){
        if (!sign.found) {
            sign.found = true;
            this.signsFound.push(sign);
            this.isWrong = false;
        }
    }
}

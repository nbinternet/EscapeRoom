import {Component, EventEmitter, Input, Output } from '@angular/core';
import {TimerControlService} from 'src/app/services/timer-control.service';

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
    @Input()
    public videoSrc: string;

    @Output()
    public next: EventEmitter<any> = new EventEmitter()

    constructor(private _timerService: TimerControlService) {}

    ngOnInit() {
        this._timerService.stop();
    }

    nextClicked() {
        this._timerService.start();
        this.next.emit();
    }
}
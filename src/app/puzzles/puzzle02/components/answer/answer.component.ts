import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    @Input() label: string;
    @Output() answer = new EventEmitter<string>();
   
    constructor() {}

    ngOnInit(): void { }

    updateAnswer(value: string){
        this.answer.emit(value);
    }
}
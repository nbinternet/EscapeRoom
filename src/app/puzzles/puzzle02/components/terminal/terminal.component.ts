import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineInstance } from 'src/app/models/MachineInstance';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
    prefix: string = "H:\\>systeminfo\n\n";
    currentTerminalId: number;
    machine: MachineInstance;

    constructor(private terminalService: TerminalService, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.currentTerminalId = +params['id'];
        });
        this.getMachine();
    }

    getMachine(): void {
        this.terminalService.getMachines().subscribe((machines) => {
            this.machine = machines[this.currentTerminalId - 1];
        });
    }

    getMachineOutput(): string {
        let output: string = this.machine.toString();
        return this.prefix + output;
    }
}
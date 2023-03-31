import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MachineInstance } from '../models/MachineInstance';
import { TERMINALS } from '../models/mock-terminals';

@Injectable({
    providedIn: 'root'
})
export class TerminalService {
    getMachines(): Observable<MachineInstance[]> {
        return of(TERMINALS); 
    }
}
import { TestBed } from '@angular/core/testing';
import { TermnialService } from './terminal.service';

describe('TerminalService', () => {
    let service: TermnialService;

    beforeEach((() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TermnialService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
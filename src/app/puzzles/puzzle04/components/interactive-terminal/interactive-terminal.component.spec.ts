import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractiveTerminalComponent} from './interactive-terminal.component';

describe('InteractiveTerminalComponent', () => {
  let component: InteractiveTerminalComponent;
  let fixture: ComponentFixture<InteractiveTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
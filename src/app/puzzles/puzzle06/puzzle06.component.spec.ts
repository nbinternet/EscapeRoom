import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Puzzle06Component} from './puzzle06.component';

describe('PuzzlplantsComponent', () => {
  let component: Puzzle06Component;
  let fixture: ComponentFixture<Puzzle06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
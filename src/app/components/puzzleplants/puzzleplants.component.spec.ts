import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleplantsComponent } from './puzzleplants.component';

describe('PuzzlplantsComponent', () => {
  let component: PuzzleplantsComponent;
  let fixture: ComponentFixture<PuzzleplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleplantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

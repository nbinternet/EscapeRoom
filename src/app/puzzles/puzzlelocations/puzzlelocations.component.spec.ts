import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PuzzlelocationsComponent} from './puzzlelocations.component';

describe('PuzzlelocationsComponent', () => {
  let component: PuzzlelocationsComponent;
  let fixture: ComponentFixture<PuzzlelocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlelocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlelocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

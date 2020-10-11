import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PuzzlednaComponent} from './puzzledna.component';

describe('PuzzlednaComponent', () => {
  let component: PuzzlednaComponent;
  let fixture: ComponentFixture<PuzzlednaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlednaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlednaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

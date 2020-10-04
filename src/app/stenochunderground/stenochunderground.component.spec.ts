import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StenochundergroundComponent } from './stenochunderground.component';

describe('StenochundergroundComponent', () => {
  let component: StenochundergroundComponent;
  let fixture: ComponentFixture<StenochundergroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StenochundergroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StenochundergroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

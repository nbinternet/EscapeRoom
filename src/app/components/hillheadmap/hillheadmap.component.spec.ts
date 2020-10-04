import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillheadmapComponent } from './hillheadmap.component';

describe('HillheadmapComponent', () => {
  let component: HillheadmapComponent;
  let fixture: ComponentFixture<HillheadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillheadmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillheadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

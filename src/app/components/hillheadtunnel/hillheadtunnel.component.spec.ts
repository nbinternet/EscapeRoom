import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillheadtunnelComponent } from './hillheadtunnel.component';

describe('HillheadtunnelComponent', () => {
  let component: HillheadtunnelComponent;
  let fixture: ComponentFixture<HillheadtunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillheadtunnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillheadtunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

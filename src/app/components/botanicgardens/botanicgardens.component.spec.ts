import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BotanicgardensComponent} from './botanicgardens.component';

describe('BotanicgardensComponent', () => {
  let component: BotanicgardensComponent;
  let fixture: ComponentFixture<BotanicgardensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotanicgardensComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotanicgardensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

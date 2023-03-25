import {ComponentFixture, TestBed} from '@angular/core/testing';
import { FindTheSqlInjectionComponent } from './find-the-sql-injection.component';

describe('FindTheSqlInjectionComponent', () => {
  let component: FindTheSqlInjectionComponent;
  let fixture: ComponentFixture<FindTheSqlInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTheSqlInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTheSqlInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
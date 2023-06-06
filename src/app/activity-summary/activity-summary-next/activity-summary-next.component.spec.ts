import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySummaryNextComponent } from './activity-summary-next.component';

describe('ActivitySummaryNextComponent', () => {
  let component: ActivitySummaryNextComponent;
  let fixture: ComponentFixture<ActivitySummaryNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySummaryNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitySummaryNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

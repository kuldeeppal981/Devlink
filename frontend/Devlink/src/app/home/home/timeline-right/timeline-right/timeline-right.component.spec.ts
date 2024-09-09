import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRightComponent } from './timeline-right.component';

describe('TimelineRightComponent', () => {
  let component: TimelineRightComponent;
  let fixture: ComponentFixture<TimelineRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

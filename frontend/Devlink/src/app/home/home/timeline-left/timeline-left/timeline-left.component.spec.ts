import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLeftComponent } from './timeline-left.component';

describe('TimelineLeftComponent', () => {
  let component: TimelineLeftComponent;
  let fixture: ComponentFixture<TimelineLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPeopleComponent } from './joined-people.component';

describe('JoinedPeopleComponent', () => {
  let component: JoinedPeopleComponent;
  let fixture: ComponentFixture<JoinedPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinedPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinedPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

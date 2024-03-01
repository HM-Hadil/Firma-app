import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionSolComponent } from './detection-sol.component';

describe('DetectionSolComponent', () => {
  let component: DetectionSolComponent;
  let fixture: ComponentFixture<DetectionSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectionSolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectionSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

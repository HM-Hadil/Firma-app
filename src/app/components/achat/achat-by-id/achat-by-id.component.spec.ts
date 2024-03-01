import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatByIdComponent } from './achat-by-id.component';

describe('AchatByIdComponent', () => {
  let component: AchatByIdComponent;
  let fixture: ComponentFixture<AchatByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAchatsComponent } from './list-achats.component';

describe('ListAchatsComponent', () => {
  let component: ListAchatsComponent;
  let fixture: ComponentFixture<ListAchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAchatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

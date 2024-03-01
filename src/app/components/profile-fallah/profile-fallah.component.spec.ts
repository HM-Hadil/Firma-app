import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFallahComponent } from './profile-fallah.component';

describe('ProfileFallahComponent', () => {
  let component: ProfileFallahComponent;
  let fixture: ComponentFixture<ProfileFallahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFallahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFallahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

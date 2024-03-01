import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVenteComponent } from './liste-vente.component';

describe('ListeVenteComponent', () => {
  let component: ListeVenteComponent;
  let fixture: ComponentFixture<ListeVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina1Offerte } from './pagina-1-offerte';

describe('Pagina1Offerte', () => {
  let component: Pagina1Offerte;
  let fixture: ComponentFixture<Pagina1Offerte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina1Offerte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina1Offerte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

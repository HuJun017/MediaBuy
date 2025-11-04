import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina3Termini } from './pagina-3-termini';

describe('Pagina3Termini', () => {
  let component: Pagina3Termini;
  let fixture: ComponentFixture<Pagina3Termini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina3Termini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina3Termini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

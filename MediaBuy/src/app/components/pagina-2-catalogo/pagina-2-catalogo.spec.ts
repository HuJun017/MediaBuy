import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina2Catalogo } from './pagina-2-catalogo';

describe('Pagina2Catalogo', () => {
  let component: Pagina2Catalogo;
  let fixture: ComponentFixture<Pagina2Catalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina2Catalogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina2Catalogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

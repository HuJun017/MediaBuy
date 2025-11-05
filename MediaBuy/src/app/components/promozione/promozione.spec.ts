import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promozione } from './promozione';

describe('Promozione', () => {
  let component: Promozione;
  let fixture: ComponentFixture<Promozione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Promozione]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Promozione);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

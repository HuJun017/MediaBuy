import { TestBed } from '@angular/core/testing';

import { OffertePromozioniService } from './offerte-promozioni';

describe('OffertePromozioni', () => {
  let service: OffertePromozioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertePromozioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

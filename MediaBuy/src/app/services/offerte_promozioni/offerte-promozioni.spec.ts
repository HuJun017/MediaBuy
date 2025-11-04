import { TestBed } from '@angular/core/testing';

import { OffertePromozioni } from './offerte-promozioni';

describe('OffertePromozioni', () => {
  let service: OffertePromozioni;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertePromozioni);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

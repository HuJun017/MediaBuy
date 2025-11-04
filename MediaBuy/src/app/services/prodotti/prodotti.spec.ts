import { TestBed } from '@angular/core/testing';

import { Prodotti } from './prodotti';

describe('Prodotti', () => {
  let service: Prodotti;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prodotti);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

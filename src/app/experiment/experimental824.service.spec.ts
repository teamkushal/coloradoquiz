import { TestBed } from '@angular/core/testing';

import { Experimental824Service } from './experimental824.service';

describe('Experimental824Service', () => {
  let service: Experimental824Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental824Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

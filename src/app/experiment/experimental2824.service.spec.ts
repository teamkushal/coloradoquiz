import { TestBed } from '@angular/core/testing';

import { Experimental2824Service } from './experimental2824.service';

describe('Experimental2824Service', () => {
  let service: Experimental2824Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2824Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental354Service } from './experimental354.service';

describe('Experimental354Service', () => {
  let service: Experimental354Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental354Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

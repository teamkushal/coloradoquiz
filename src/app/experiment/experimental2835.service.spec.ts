import { TestBed } from '@angular/core/testing';

import { Experimental2835Service } from './experimental2835.service';

describe('Experimental2835Service', () => {
  let service: Experimental2835Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2835Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

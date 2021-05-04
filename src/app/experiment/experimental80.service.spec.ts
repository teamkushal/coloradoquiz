import { TestBed } from '@angular/core/testing';

import { Experimental80Service } from './experimental80.service';

describe('Experimental80Service', () => {
  let service: Experimental80Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental80Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

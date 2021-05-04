import { TestBed } from '@angular/core/testing';

import { Experimental670Service } from './experimental670.service';

describe('Experimental670Service', () => {
  let service: Experimental670Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental670Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental900Service } from './experimental900.service';

describe('Experimental900Service', () => {
  let service: Experimental900Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental900Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

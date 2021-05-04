import { TestBed } from '@angular/core/testing';

import { Experimental954Service } from './experimental954.service';

describe('Experimental954Service', () => {
  let service: Experimental954Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental954Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

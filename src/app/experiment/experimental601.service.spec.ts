import { TestBed } from '@angular/core/testing';

import { Experimental601Service } from './experimental601.service';

describe('Experimental601Service', () => {
  let service: Experimental601Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental601Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental488Service } from './experimental488.service';

describe('Experimental488Service', () => {
  let service: Experimental488Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental488Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

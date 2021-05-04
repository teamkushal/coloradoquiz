import { TestBed } from '@angular/core/testing';

import { Experimental302Service } from './experimental302.service';

describe('Experimental302Service', () => {
  let service: Experimental302Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental302Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

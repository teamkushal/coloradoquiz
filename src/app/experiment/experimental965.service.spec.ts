import { TestBed } from '@angular/core/testing';

import { Experimental965Service } from './experimental965.service';

describe('Experimental965Service', () => {
  let service: Experimental965Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental965Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

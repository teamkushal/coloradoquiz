import { TestBed } from '@angular/core/testing';

import { Experimental2101Service } from './experimental2101.service';

describe('Experimental2101Service', () => {
  let service: Experimental2101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

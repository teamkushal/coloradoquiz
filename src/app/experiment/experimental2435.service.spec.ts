import { TestBed } from '@angular/core/testing';

import { Experimental2435Service } from './experimental2435.service';

describe('Experimental2435Service', () => {
  let service: Experimental2435Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2435Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

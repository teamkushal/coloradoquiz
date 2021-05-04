import { TestBed } from '@angular/core/testing';

import { Experimental2535Service } from './experimental2535.service';

describe('Experimental2535Service', () => {
  let service: Experimental2535Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2535Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

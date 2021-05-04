import { TestBed } from '@angular/core/testing';

import { Experimental2443Service } from './experimental2443.service';

describe('Experimental2443Service', () => {
  let service: Experimental2443Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2443Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

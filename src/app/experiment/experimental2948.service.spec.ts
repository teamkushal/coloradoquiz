import { TestBed } from '@angular/core/testing';

import { Experimental2948Service } from './experimental2948.service';

describe('Experimental2948Service', () => {
  let service: Experimental2948Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2948Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

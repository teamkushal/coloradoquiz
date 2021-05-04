import { TestBed } from '@angular/core/testing';

import { Experimental2261Service } from './experimental2261.service';

describe('Experimental2261Service', () => {
  let service: Experimental2261Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2261Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

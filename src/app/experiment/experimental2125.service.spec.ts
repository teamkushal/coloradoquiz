import { TestBed } from '@angular/core/testing';

import { Experimental2125Service } from './experimental2125.service';

describe('Experimental2125Service', () => {
  let service: Experimental2125Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2125Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

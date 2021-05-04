import { TestBed } from '@angular/core/testing';

import { Experimental2102Service } from './experimental2102.service';

describe('Experimental2102Service', () => {
  let service: Experimental2102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

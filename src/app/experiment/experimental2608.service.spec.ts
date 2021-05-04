import { TestBed } from '@angular/core/testing';

import { Experimental2608Service } from './experimental2608.service';

describe('Experimental2608Service', () => {
  let service: Experimental2608Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2608Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

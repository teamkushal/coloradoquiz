import { TestBed } from '@angular/core/testing';

import { Experimental2010Service } from './experimental2010.service';

describe('Experimental2010Service', () => {
  let service: Experimental2010Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2010Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

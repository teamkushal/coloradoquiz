import { TestBed } from '@angular/core/testing';

import { Experimental2006Service } from './experimental2006.service';

describe('Experimental2006Service', () => {
  let service: Experimental2006Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2006Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

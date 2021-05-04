import { TestBed } from '@angular/core/testing';

import { Experimental316Service } from './experimental316.service';

describe('Experimental316Service', () => {
  let service: Experimental316Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental316Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

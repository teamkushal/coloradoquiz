import { TestBed } from '@angular/core/testing';

import { Experimental174Service } from './experimental174.service';

describe('Experimental174Service', () => {
  let service: Experimental174Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental174Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

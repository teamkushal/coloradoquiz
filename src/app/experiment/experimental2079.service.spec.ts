import { TestBed } from '@angular/core/testing';

import { Experimental2079Service } from './experimental2079.service';

describe('Experimental2079Service', () => {
  let service: Experimental2079Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2079Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

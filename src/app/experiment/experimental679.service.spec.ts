import { TestBed } from '@angular/core/testing';

import { Experimental679Service } from './experimental679.service';

describe('Experimental679Service', () => {
  let service: Experimental679Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental679Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

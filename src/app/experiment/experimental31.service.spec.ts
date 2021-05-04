import { TestBed } from '@angular/core/testing';

import { Experimental31Service } from './experimental31.service';

describe('Experimental31Service', () => {
  let service: Experimental31Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental31Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

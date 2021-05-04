import { TestBed } from '@angular/core/testing';

import { Experimental137Service } from './experimental137.service';

describe('Experimental137Service', () => {
  let service: Experimental137Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental137Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

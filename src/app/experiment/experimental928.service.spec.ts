import { TestBed } from '@angular/core/testing';

import { Experimental928Service } from './experimental928.service';

describe('Experimental928Service', () => {
  let service: Experimental928Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental928Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

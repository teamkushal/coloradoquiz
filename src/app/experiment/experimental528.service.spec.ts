import { TestBed } from '@angular/core/testing';

import { Experimental528Service } from './experimental528.service';

describe('Experimental528Service', () => {
  let service: Experimental528Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental528Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

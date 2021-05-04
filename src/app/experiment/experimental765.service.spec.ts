import { TestBed } from '@angular/core/testing';

import { Experimental765Service } from './experimental765.service';

describe('Experimental765Service', () => {
  let service: Experimental765Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental765Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

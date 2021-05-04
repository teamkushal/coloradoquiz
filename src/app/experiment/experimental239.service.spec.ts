import { TestBed } from '@angular/core/testing';

import { Experimental239Service } from './experimental239.service';

describe('Experimental239Service', () => {
  let service: Experimental239Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental239Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

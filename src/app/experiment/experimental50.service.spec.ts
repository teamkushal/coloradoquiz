import { TestBed } from '@angular/core/testing';

import { Experimental50Service } from './experimental50.service';

describe('Experimental50Service', () => {
  let service: Experimental50Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental50Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

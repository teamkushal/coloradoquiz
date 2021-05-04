import { TestBed } from '@angular/core/testing';

import { Experimental436Service } from './experimental436.service';

describe('Experimental436Service', () => {
  let service: Experimental436Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental436Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

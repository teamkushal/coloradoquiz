import { TestBed } from '@angular/core/testing';

import { Experimental1Service } from './experimental1.service';

describe('Experimental1Service', () => {
  let service: Experimental1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

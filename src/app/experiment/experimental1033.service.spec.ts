import { TestBed } from '@angular/core/testing';

import { Experimental1033Service } from './experimental1033.service';

describe('Experimental1033Service', () => {
  let service: Experimental1033Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1033Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

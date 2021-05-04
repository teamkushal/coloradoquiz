import { TestBed } from '@angular/core/testing';

import { Experimental1020Service } from './experimental1020.service';

describe('Experimental1020Service', () => {
  let service: Experimental1020Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1020Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

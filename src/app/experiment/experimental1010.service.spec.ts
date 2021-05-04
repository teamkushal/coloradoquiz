import { TestBed } from '@angular/core/testing';

import { Experimental1010Service } from './experimental1010.service';

describe('Experimental1010Service', () => {
  let service: Experimental1010Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1010Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

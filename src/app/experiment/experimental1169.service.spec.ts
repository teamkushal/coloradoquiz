import { TestBed } from '@angular/core/testing';

import { Experimental1169Service } from './experimental1169.service';

describe('Experimental1169Service', () => {
  let service: Experimental1169Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1169Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

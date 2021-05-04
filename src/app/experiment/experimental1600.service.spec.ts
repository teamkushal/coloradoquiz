import { TestBed } from '@angular/core/testing';

import { Experimental1600Service } from './experimental1600.service';

describe('Experimental1600Service', () => {
  let service: Experimental1600Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1600Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

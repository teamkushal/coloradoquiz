import { TestBed } from '@angular/core/testing';

import { Experimental1364Service } from './experimental1364.service';

describe('Experimental1364Service', () => {
  let service: Experimental1364Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1364Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

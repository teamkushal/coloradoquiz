import { TestBed } from '@angular/core/testing';

import { Experimental1498Service } from './experimental1498.service';

describe('Experimental1498Service', () => {
  let service: Experimental1498Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1498Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

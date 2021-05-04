import { TestBed } from '@angular/core/testing';

import { Experimental1784Service } from './experimental1784.service';

describe('Experimental1784Service', () => {
  let service: Experimental1784Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1784Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

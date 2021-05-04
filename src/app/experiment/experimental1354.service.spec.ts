import { TestBed } from '@angular/core/testing';

import { Experimental1354Service } from './experimental1354.service';

describe('Experimental1354Service', () => {
  let service: Experimental1354Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1354Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

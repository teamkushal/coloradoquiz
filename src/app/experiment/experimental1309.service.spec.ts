import { TestBed } from '@angular/core/testing';

import { Experimental1309Service } from './experimental1309.service';

describe('Experimental1309Service', () => {
  let service: Experimental1309Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1309Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

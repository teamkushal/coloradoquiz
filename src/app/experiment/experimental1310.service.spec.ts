import { TestBed } from '@angular/core/testing';

import { Experimental1310Service } from './experimental1310.service';

describe('Experimental1310Service', () => {
  let service: Experimental1310Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1310Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

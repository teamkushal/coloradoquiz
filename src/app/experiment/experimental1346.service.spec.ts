import { TestBed } from '@angular/core/testing';

import { Experimental1346Service } from './experimental1346.service';

describe('Experimental1346Service', () => {
  let service: Experimental1346Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1346Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

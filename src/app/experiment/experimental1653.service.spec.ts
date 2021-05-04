import { TestBed } from '@angular/core/testing';

import { Experimental1653Service } from './experimental1653.service';

describe('Experimental1653Service', () => {
  let service: Experimental1653Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1653Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

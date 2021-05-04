import { TestBed } from '@angular/core/testing';

import { Experimental1103Service } from './experimental1103.service';

describe('Experimental1103Service', () => {
  let service: Experimental1103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1476Service } from './experimental1476.service';

describe('Experimental1476Service', () => {
  let service: Experimental1476Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1476Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

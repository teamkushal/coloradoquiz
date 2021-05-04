import { TestBed } from '@angular/core/testing';

import { Experimental1604Service } from './experimental1604.service';

describe('Experimental1604Service', () => {
  let service: Experimental1604Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1604Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

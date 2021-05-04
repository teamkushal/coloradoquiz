import { TestBed } from '@angular/core/testing';

import { Experimental1534Service } from './experimental1534.service';

describe('Experimental1534Service', () => {
  let service: Experimental1534Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1534Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

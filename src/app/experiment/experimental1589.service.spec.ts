import { TestBed } from '@angular/core/testing';

import { Experimental1589Service } from './experimental1589.service';

describe('Experimental1589Service', () => {
  let service: Experimental1589Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1589Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

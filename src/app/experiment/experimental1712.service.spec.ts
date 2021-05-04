import { TestBed } from '@angular/core/testing';

import { Experimental1712Service } from './experimental1712.service';

describe('Experimental1712Service', () => {
  let service: Experimental1712Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1712Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

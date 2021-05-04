import { TestBed } from '@angular/core/testing';

import { Experimental1825Service } from './experimental1825.service';

describe('Experimental1825Service', () => {
  let service: Experimental1825Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1825Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

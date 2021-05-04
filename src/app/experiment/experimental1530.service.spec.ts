import { TestBed } from '@angular/core/testing';

import { Experimental1530Service } from './experimental1530.service';

describe('Experimental1530Service', () => {
  let service: Experimental1530Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1530Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
